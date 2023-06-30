import "./style.css";

import axios from "axios";

export function Instagram() {
  return (
    <div className="ig-container">
      <a href="https://instagram.com/pabloalbrnz" target="_blank">
        <div className="ig-user">
          <div className="ig-pfp">
            <img src="https://i.imgur.com/GbgEqO1.jpg" alt="ig pfp" />
          </div>
          <span className="ig-username">@pabloalbrnz</span>
        </div>
      </a>

      <div className="ig-posts">
        <div className="ig-post">
          <img
            src="https://i.imgur.com/51FgwKB.jpg"
            alt="last one post"
            className="ig-post-image"
          />
        </div>
        <div className="ig-post">
          <img
            src="https://i.imgur.com/GbgEqO1.jpg"
            alt="last two post"
            className="ig-post-image"
          />
        </div>
        <div className="ig-post">
          <img
            src="https://i.imgur.com/CUg4fJZ.jpg"
            alt="last three post"
            className="ig-post-image"
          />
        </div>
      </div>
    </div>
  );
}
