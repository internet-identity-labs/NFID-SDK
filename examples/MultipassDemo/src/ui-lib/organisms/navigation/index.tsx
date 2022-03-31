import { Logo } from "@identity-labs/nfid-sdk-react"
import React from "react"

interface NavigationProps {
  staticBackground?: boolean
}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="fixed flex w-full m-auto bg-gray-100">
      <div className="flex justify-between w-full p-4 m-auto md:max-w-7xl md:p-6 xl:py-8 md:m-auto lg:m-auto">
        <div className="text-lg font-bold tracking-widest uppercase font-lato">
          <Logo nav />
          <span className="ml-3">demo</span>
        </div>
      </div>
    </nav>
  )
}
