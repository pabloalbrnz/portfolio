import "./style.css";

import { IconButton } from "../IconButton/button";

interface ITitle {
  text: string;
  btnText: string;
}

export function Title({ text, btnText }: ITitle) {
  return (
    <div className="title-wrapper wrapper">
      <span className="title-text">{text}</span>
      <IconButton
        icon="👋"
        side={false}
        size="md"
        text={btnText}
        variant="primary"
      />
    </div>
  );
}
