import { useState } from "react";

function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  const incrementScore = (index) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        return i === index ? score + 1 : score;
      });
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0))
  }
  return (
    <div>
      <h1>Score keeper</h1>
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              Player {index + 1}: {score}
              <button onClick={() => incrementScore(index)}>+1</button>
              {score >= target && "WINNER!"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset} >Reset!</button>
    </div>
  );
}

export default ScoreKeeper;
