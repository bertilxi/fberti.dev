import React from "react";

interface Props {
  institute: string;
  location: string;
  from: string;
  to: string;
  title: string;
}

const Education: React.FC<Props> = ({
  institute,
  location,
  from,
  to,
  title
}) => {
  return (
    <div className="flex-1">
      <div className="font-semibold">{institute}</div>
      <div className="text-gray-700">{location}</div>
      <div className="font-semibold text-gray-700">
        {from} - {to}
      </div>
      <h6 className="font-semibold">{title}</h6>
    </div>
  );
};

export default Education;
