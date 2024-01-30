import React from "react";
interface NavOptionProps {
  title: string;
  selected?: boolean;
  href: string;
}

const NavOption = ({ title, selected, href }: NavOptionProps) => {
  return (
    <div className={`${selected ? "border-b-4" : ""}`}>
      <a href={href}>
        <h1 className="text-white">{title}</h1>
      </a>
    </div>
  );
};

export default NavOption;
