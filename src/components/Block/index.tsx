import "./style.css";

interface IBlock {
  number: string;
  text: string;
  name: string;
}

export function Block({ number, text, name }: IBlock) {
  return (
    <div className={`block ${name}`}>
      <span className="block-number">{`${number}`}</span>
      <span className="block-text">{text}</span>
    </div>
  );
}
