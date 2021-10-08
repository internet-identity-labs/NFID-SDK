import React from "react";

interface NavigationProps {
  staticBackground?: boolean;
}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="w-full flex fixed z-40 bg-white bg-opacity-40 m-auto">
      <div className="w-full md:max-w-7xl m-auto p-4 md:p-6 xl:p-0 xl:py-8 md:m-auto lg:m-auto flex justify-between">
        <div className="uppercase font-lato font-bold tracking-widest text-lg">
          Multi Pass
        </div>
        {/* TODO: Is this link needed? */}
        {/* <div className="hidden md:block uppercase font-lato text-md tracking-wider">
          More Information
        </div> */}
      </div>
    </nav>
  );
};
