import classes from "./CheckoutSummary.module.css";
import MacaroonBoxPreview from "../../MacaroonBoxBuilder/MacaroonBoxPreview/MacaroonBoxPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <MacaroonBoxPreview ingredients={{
         blackMacaroon: 5,
         blueMacaroon: 3,
         greenMacaroon: 2,
         lemonMacaroon: 2,
         mintMacaroon: 4,
         pinkMacaroon: 3,
         violetMacaroon: 2,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;