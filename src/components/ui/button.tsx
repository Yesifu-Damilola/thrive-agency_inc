import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  color?: string;
  variant?: "solid" | "outline" | "ghost";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  children,
  width = "282px",
  className = "",
  color = "bg-success-500",
  variant = "solid",
  icon,
  iconPosition = "left",
  ...props
}) => {
  // Base classes that are always applied
  const baseClasses =
    "md:rounded-xl md:py-5 md:px-8 font-open-sans font-bold l]md:text-lg leading-[99%] text-dark-100 text-center flex items-center justify-center gap-2";

  // Variant classes
  const variantClasses = {
    solid: `${color} text-dark-100`,
    outline: `border-2 ${color.replace(
      "bg-",
      "border-"
    )} bg-transparent ${color.replace("bg-", "text-")}`,
    ghost: `bg-transparent ${color.replace(
      "bg-",
      "text-"
    )} hover:bg-opacity-10 hover:${color}`,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width }}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="inline-flex">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="inline-flex">{icon}</span>
      )}
    </button>
  );
};

export default Button;
