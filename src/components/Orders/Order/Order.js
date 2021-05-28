import classes from "./Order.module.css";

const Order = ({ name, phone, address, macaroons, price }) => {
  const labels = {
    blackMacaroon: "Black macaroon",
    blueMacaroon: "Blue macaroon",
    greenMacaroon: "Green macaroon",
    lemonMacaroon: "Lemon macaroon",
    mintMacaroon: "Mint macaroon",
    pinkMacaroon: "Pink macaroon",
    violetMacaroon: "Violet Macaroon",
  }
  const outputIngredients = Object.keys(macaroons)
    .map(type => <li key={type}>{labels[type]}: {macaroons[type]}</li>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputIngredients}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;