"use client";

import type React from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  contactFormSchema,
  type ContactFormData,
  type ContactFormErrors,
} from "@/schemas/contact-form-schema";
import { sendContactForm } from "@/api/ContactApi";

export const useContactForm = (recipientEmail: string) => {
  // State for form data
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState<ContactFormErrors>({});

  // Set up React Query mutation with the mock API
  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // In a real implementation, this would send an email to the recipientEmail address
      console.log(`Email will be sent to recipient: ${recipientEmail}`);
      return sendContactForm({
        ...data,
        recipientEmail, // Include the recipient email in the data sent to the API
      });
    },
    onSuccess: () => {
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset errors
      setErrors({});

      // Reset mutation after 5 seconds
      setTimeout(() => {
        mutation.reset();
      }, 5000);
    },
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data with Zod
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      // Handle Zod validation errors
      const fieldErrors: ContactFormErrors = {};

      result.error.errors.forEach((err) => {
        const path = err.path[0] as keyof ContactFormData;
        fieldErrors[path] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }

    // If validation passes, submit the form using React Query mutation
    mutation.mutate(formData);
  };

  return {
    formData,
    errors,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    errorMessage:
      mutation.error?.message || "An error occurred while sending your message",
    handleChange,
    handleSubmit,
  };
};
