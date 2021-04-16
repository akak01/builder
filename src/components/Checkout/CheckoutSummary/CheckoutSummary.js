import classes from "./CheckoutSummary.module.css";
import MacaroonBoxPreview from "../../MacaroonBoxBuilder/MacaroonBoxPreview/MacaroonBoxPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <MacaroonBoxPreview ingredients={{
         blackMacaroon: 45,
         blueMacaroon: 35,
         greenMacaroon: 20,
         lemonMacaroon: 25,
         mintMacaroon: 40,
         pinkMacaroon: 36,
         violetMacaroon: 29,
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