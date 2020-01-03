import React from "react";

interface Props {
  title?: string;
}

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="section-container flex flex-col mx-4 py-4">
      {!!title && <div className="font-semibold text-3xl mb-4">{title}</div>}
      <div className="text-gray-800 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default Section;
