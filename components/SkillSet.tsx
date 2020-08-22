import React from "react";

interface Props {
  title: string;
  skills: string[];
}

const SkillSet: React.FC<Props> = ({ title, skills }) => (
  <div className="flex-1">
    <h5 className="font-semibold mb-2">{title}</h5>
    <div>
      {skills.map((skill) => (
        <span
          className="inline-block text-sm text-gray-200 bg-indigo-500 rounded-full px-2 py-1 font-semibold mr-2 mb-1"
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillSet;
