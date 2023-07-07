import "./style.css";

interface IProjectThumb {
  imageURL?: string;
  alt?: string;
  linkURL?: string;
}

export function ProjectThumb({ imageURL, linkURL, alt }: IProjectThumb) {
  return (
    <a
      href={linkURL ? linkURL : "#"}
      className={`project-thumb ${imageURL ? "colorful" : ""}`}
    >
      <div>{imageURL ? <img src={imageURL} alt={alt} /> : ""}</div>
    </a>
  );
}
