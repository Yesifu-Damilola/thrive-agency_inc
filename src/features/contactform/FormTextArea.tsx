import type React from "react";

interface FormTextareaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  name,
  label,
  value,
  placeholder,
  error,
  disabled,
  rows = 5,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-dark-100 mb-1"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md outline-none focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
