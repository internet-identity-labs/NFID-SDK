import React from "react"

export const Centered: React.FC = ({ children }) => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    {children}
  </div>
)
