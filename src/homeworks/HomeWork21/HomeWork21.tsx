import { useState } from "react";
import "./styles.css";
import image1 from "./assets/like.png";
import image2 from "./assets/dislike.png";
import Button from "../../components/Button";

function HomeWork21() {
  const [likes, setLike] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const likePlus = (): void => {
    setLike(likes + 1);
  };

  const likeMinus = (): void => {
    setDislikes(dislikes + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislikes(0);
  };

  return (
    <div className="homework21-wrapper">
      <div className="button-container">
      <button onClick={likePlus}>
        <img src="image1" alt="Like" />
      </button>
      <p className="counter">{likes > 0 && likes}</p>
      <button onClick={likeMinus}>
        <img src="./assets/dislike.png" alt="Dislike" />
      </button>
      <p className="counter">{dislikes > 0 && dislikes}</p>
      </div>
      <Button onClick={resetResults} />
    </div>
    
  );
}

export default HomeWork21;
