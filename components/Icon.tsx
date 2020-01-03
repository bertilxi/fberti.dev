import React from "react";

interface Props {
  src: string;
  size?: number;
  title?: string;
  fillColor?: string;
}

const Icon: React.FC<Props> = ({
  src = "",
  size = 24,
  title = "",
  fillColor = "#2d2d2d"
}) => {
  return (
    <span
      aria-hidden="true"
      aria-label={title}
      className="material-design-icon"
      role="img"
    >
      <svg
        fill={fillColor}
        className="material-design-icon__svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
      >
        <path d={src}>
          <title>{title}</title>
        </path>
      </svg>
    </span>
  );
};

export default Icon;
