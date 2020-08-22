import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  activeClassName?: string;
}

const ActiveLink: React.FC<Props> = ({
  href,
  children,
  activeClassName = "",
}) => {
  const router = useRouter();

  let childElement = children as React.ReactElement;
  let className = childElement.props.className || "";

  if (router.pathname === href) {
    className = `${className} ${activeClassName}`;
  }

  return (
    <Link prefetch href={href}>
      {React.cloneElement(childElement, { className })}
    </Link>
  );
};

export default ActiveLink;
