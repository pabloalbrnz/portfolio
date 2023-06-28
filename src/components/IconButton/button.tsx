import "./style.css";

interface IIconButton {
  icon: JSX.Element | string;
  text: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "disabled";
  side: boolean;
}

export function IconButton({ icon, text, side, size, variant }: IIconButton) {
  return (
    <button className={`icon-button-${size} icon-button-${variant}`}>
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
