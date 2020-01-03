import React from "react";

interface Props {
  label: string;
  value?: string;
  href?: string;
}

const Entry: React.FC<Props> = ({ label, value, href }) => {
  return (
    <div className="flex-1">
      <span className="font-semibold">{label}</span>
      {"  "}
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

export default Entry;
