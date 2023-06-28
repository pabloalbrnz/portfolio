import "./style.css";

import { IconButton } from "../IconButton/button";

interface ITitle {
  text: string;
}

export function Title({ text }: ITitle) {
  return (
    <div className="title-wrapper wrapper">
      <span className="title-text">{text}</span>
      <IconButton
        icon="👋"
        side={false}
        size="md"
        text="Hire me"
        variant="primary"
      />
    </div>
  );
}
