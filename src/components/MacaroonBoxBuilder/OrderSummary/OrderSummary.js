import classes from "./OrderSummary.module.css";

const OrderSummary = ({ macaroons, price }) => {
  const labels = {
    blackMacaroon: "Black macaroon",
    blueMacaroon: "Blue macaroon",
    greenMacaroon: "Green macaroon",
    lemonMacaroon: "Lemon macaroon",
    mintMacaroon: "Mint macaroon",
    pinkMacaroon: "Pink macaroon",
    violetMacaroon: "Violet Macaroon",
  }
  const results = Object.keys(macaroons)
    .map(type => <li key={type}>{labels[type]}: {macaroons[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;