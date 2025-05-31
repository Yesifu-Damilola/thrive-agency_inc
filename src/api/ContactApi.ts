"use client";

import { supabase } from "@/supabase/supabaseClients";

export const sendContactForm = async ({
  name,
  email,
  subject,
  message,
  recipientEmail,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
  recipientEmail: string;
}) => {
  console.log(name, email, subject, message, recipientEmail);
  const { error } = await supabase.from("contact_message").insert([
    {
      name,
      email,
      subject,
      message,
    },
  ]);

  if (error) {
    throw new Error(error.message || "Failed to submit contact form");
  }

  return { success: true };
};
