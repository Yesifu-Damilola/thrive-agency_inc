"use client";

import Button from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";
import { LocalVideo } from "../contactform/LocalVideo";
import { SuccessMessage } from "../contactform/Successmessage";
import { FormInput } from "../contactform/FormInput";
import { FormTextarea } from "../contactform/FormTextArea";
import { AdvertSubSection } from "../home/AdvertSubSection";

export const Contact = () => {
  // Gmail address to receive messages - replace with your actual Gmail
  const GMAIL_ADDRESS = "ksamuelojo420@gmail.com"; // ← REPLACE THIS WITH YOUR ACTUAL GMAIL

  // Use the custom hook for form handling
  const {
    formData,
    errors,
    isLoading,
    isSuccess,
    isError,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useContactForm(GMAIL_ADDRESS);

  return (
    <>
      <section className="w-full bg-[url('/images/homebg.png')] bg-cover bg-no-repeat bg-center pt-14">
        <div className="min-h-screen py-12 px-2 sm:px-2 lg:px-2">
          <div className="max-w-[1164px] mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-dark-100 mb-2">
                Contact Us
              </h1>
              <p className="text-gray-600">
                We&aposd love to hear from you. Fill out the form below.
              </p>
            </div>

            {/* Video Section */}
            <div className="mb-2 rounded-lg overflow-hidden shadow-lg relative">
              <LocalVideo />
              <div className="h-[350px] bg-gradient-to-t from-dark-500 to-dark-600 w-full absolute bottom-0" />
            </div>

            {/* Contact Form */}
            <div className="py-6 px-4 rounded-lg shadow-md">
              {isSuccess ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {isError && (
                    <div className="bg-red-50  text-red-500 p-3 rounded-md text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <FormInput
                    id="name"
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    error={errors.name}
                    disabled={isLoading}
                  />

                  <FormInput
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    error={errors.email}
                    disabled={isLoading}
                  />

                  <FormInput
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    error={errors.subject}
                    disabled={isLoading}
                  />

                  <FormTextarea
                    id="message"
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your inquiry in detail..."
                    error={errors.message}
                    disabled={isLoading}
                  />

                  <div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className={`!w-full lg:!w-[282px] sm:!w-[282px] items-center justify-center mx-auto py-5 px-2 rounded-md text-dark-100 font-bold text-lg ${
                        isLoading ? "bg-gray-400" : " hover:bg-success-900"
                      }  focus:outline-none `}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </div>

                  <div className="text-center text-sm text-dark-100 mt-4">
                    Your message will be sent to{" "}
                    <strong>{GMAIL_ADDRESS}</strong>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <AdvertSubSection />
    </>
  );
};
