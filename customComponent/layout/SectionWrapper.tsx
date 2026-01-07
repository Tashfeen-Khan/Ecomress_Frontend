import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string; // extra Tailwind classes
  backgroundImage?: string; // optional background image
  overlay?: string; // optional overlay e.g. "bg-black/40"
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  backgroundImage,
  overlay,
}) => {
  return (
    <section
      className={` px-4 sm:px-12 py-10  ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        backgroundSize: backgroundImage ? "cover" : undefined,
        backgroundPosition: backgroundImage ? "center" : undefined,
        backgroundRepeat: backgroundImage ? "no-repeat" : undefined,
      }}
    >
{children}
      {/* Content above overlay */}
      {/* <div className=" w-full "></div> */}
    </section>
  );
};

export default SectionWrapper;
