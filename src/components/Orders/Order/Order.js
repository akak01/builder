import classes from "./Order.module.css";

const Order = ({ name, phone, address, macaroons }) => {
  const output = Object.keys(macaroons).map(label => <em>{label} - {macaroons[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Address: {address}</li>
      <li>Macaroons: {output}</li>
    </ul>
  );
}

export default Order;