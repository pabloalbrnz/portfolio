import { ButtonHTMLAttributes } from "react";

import "./style.css";

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element | string;
  text: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "disabled";
  side: boolean;
}

export function IconButton({
  icon,
  text,
  side,
  size,
  variant,
  ...rest
}: IIconButton) {
  return (
    <button className={`icon-button-${size} icon-button-${variant}`} {...rest}>
      {side ? (
        <>
          <span className="icon-button-text">{text}</span>
          <span className="icon-button-icon">{icon}</span>
        </>
      ) : (
        <>
          <span className="icon-button-icon">{icon}</span>
          <span className="icon-button-text">{text}</span>
        </>
      )}
    </button>
  );
}
