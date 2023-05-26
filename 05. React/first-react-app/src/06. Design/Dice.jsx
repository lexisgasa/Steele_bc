import Die from "./Die";
import "./Dice.css"

export default function Dice({dice, color}) {
  return (
    <section className="Dice">
      {dice.map((val, index) => (
        <Die key={index} value={val} color={color} />
      ))}
    </section>
  );
}
