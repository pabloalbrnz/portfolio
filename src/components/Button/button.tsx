import "./style.css";

interface IButton {
  text: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "disabled";
}

export function Button({ text, size, variant }: IButton) {
  return <button className={`button-${size} button-${variant}`}>{text}</button>;
}
