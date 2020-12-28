import React from "react";

interface Props {
  title?: string;
}

const Section: React.FC<Props> = ({ title, children }) => (
  <div className="section-container flex flex-col mx-4 pb-4">
    {!!title && <div className="font-semibold text-xl mb-2">{title}</div>}
    <div className="flex flex-col justify-center">{children}</div>
  </div>
);

export default Section;
