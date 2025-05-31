import type React from "react";

interface SuccessMessageProps {
  title?: string;
  message?: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title = "Thank You!",
  message = "Your message has been sent successfully. We'll get back to you soon.",
}) => {
  return (
    <div className="text-center py-8">
      <div className="text-success-500 text-5xl mb-4">✓</div>
      <h2 className="text-2xl font-semibold text-dark-100 mb-2">{title}</h2>
      <p className="text-dark-100">{message}</p>
    </div>
  );
};
