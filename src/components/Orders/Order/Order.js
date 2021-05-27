import classes from "./Order.module.css";

const Order = ({ name, phone, address, macaroons, price }) => {
  const outputIngredients = Object.keys(macaroons)
    .map(macaroon => <em key={macaroon}>{macaroon} - {macaroons[macaroon]}</em>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputIngredients}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;