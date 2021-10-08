import React from "react";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="transition duration-300 w-full max-w-xs font-lato tracking-widest uppercase text-lg rounded-full border-2 border-black hover:border-white hover:text-white py-2 px-28"
    >
      {children}
    </button>
  );
