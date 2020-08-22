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
  title,
}) => (
  <div className="w-full mb-4">
    <div className="font-semibold">
      <p>{institute}</p>
      <p>{location}</p>
    </div>

    <div>
      {from} - {to}
    </div>

    <p>{title}</p>
  </div>
);

export default Education;
