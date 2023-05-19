export default function Slots({ options }) {
  const option1 = options[Math.floor(Math.random() * options.length)];
  const option2 = options[Math.floor(Math.random() * options.length)];
  const option3 = options[Math.floor(Math.random() * options.length)];
  const isWinner = option1 === option2 && option1 === option3;

  return (
    <div>
      <h1>
        {option1}
        {option2}
        {option3}
      </h1>
      {isWinner ? (
        <div>
          <h2 style={{ color: "green" }}>You win!</h2>
          <h3>Congratulations!</h3>
        </div>
      ) : (
        <h2 style={{ color: "red" }}>You lose</h2>
      )}
    </div>
  );
}
