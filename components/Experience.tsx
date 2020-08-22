import React, { useCallback } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";

dayjs.locale("en");
const dateFormat = "MMM YYYY";

interface Props {
  name: string;
  href?: string;
  from: string;
  to?: string;
  position: string;
  roles?: string;
  technologies?: string;
  team?: string;
}

const Experience: React.FC<Props> = ({
  name,
  href,
  from,
  to,
  position,
  roles,
  technologies,
  team,
  children,
}) => {
  const fromLabel = dayjs(from).format(dateFormat);
  const toLabel = to ? dayjs(to).format(dateFormat) : "Present";

  const getElapsed = useCallback(() => {
    const dateFrom = new Date(from);
    const dateTo = to ? new Date(to) : new Date();
    const diff = dateTo.getTime() - dateFrom.getTime();
    const seconds = Math.floor(diff / 1000);
    const minute = Math.floor(seconds / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const month = Math.floor(day / 29);
    const year = Math.floor(month / 12);
    return {
      month: month % 12,
      year,
    };
  }, [from, to]);

  const elapsed = getElapsed();

  const getElapsedLabel = useCallback(() => {
    let label = "";
    if (elapsed.year === 1) {
      label += `${elapsed.year} year`;
    }
    if (elapsed.year > 1) {
      label += `${elapsed.year} years`;
    }
    if (elapsed.month === 1) {
      label += ` ${elapsed.month} month`;
    }
    if (elapsed.month > 1) {
      label += ` ${elapsed.month} months`;
    }
    return label.trim();
  }, [elapsed]);

  const elapsedLabel = getElapsedLabel();

  return (
    <div className="w-full mb-4">
      <div className="font-semibold text-xl">
        <a
          className="font-semibold text-indigo-500"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>

        <p>{position}</p>
      </div>

      <div className="flex">
        <div className="w-2/3">
          <div className="text-base">
            {fromLabel} - {toLabel}
            <span className="px-2">·</span>
            <span>{elapsedLabel}</span>
          </div>
        </div>
      </div>

      {roles && (
        <p>
          <label className="font-semibold">Roles: </label>
          {roles}
        </p>
      )}

      {technologies && (
        <p>
          <label className="font-semibold">Technologies: </label>
          {technologies}
        </p>
      )}

      {team && (
        <p>
          <label className="font-semibold">Team: </label>
          {team}
        </p>
      )}

      {children && <p className="my-2">{children}</p>}
    </div>
  );
};

export default Experience;
