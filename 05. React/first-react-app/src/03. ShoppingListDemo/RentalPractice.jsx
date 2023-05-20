import RentalItemPractice from "./RentalItemPractice";
import "./RentalPractice.css"

export default function RentalPractice({ data }) {
  console.log(data);
  return (
    <div className="RentalPractice">
        {data.map((item) => (
          <RentalItemPractice
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        ))}
    </div>
  );
}
