import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const ButtonStyles = {
  primary: "bg-green-600 text-white",
  secondary: "bg-gray-600 text-white",
  danger: "bg-red-600 text-white",
};

function Button({ text, onClick, variant, disabled }: ButtonProps) {
  return (
    <button
      className={`rounded-full px-4 py-2 font-bold ${ButtonStyles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
