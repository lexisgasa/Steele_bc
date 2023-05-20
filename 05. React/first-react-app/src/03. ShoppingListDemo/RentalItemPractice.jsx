export default function RentalItemPractice({ name, price, rating }) {
  return (
    <div>
      
        <h2>{name}</h2> 
        <h3>${price} a night</h3> 
        <h4>{rating}🌟</h4>
   
    </div>
  );
}
