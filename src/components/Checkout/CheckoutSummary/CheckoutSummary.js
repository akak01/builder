import classes from "./CheckoutSummary.module.css";
import MacaroonBoxPreview from "../../MacaroonBoxBuilder/MacaroonBoxPreview/MacaroonBoxPreview";
import CheckoutForm from "./ChackoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <MacaroonBoxPreview macaroons={{
         blackMacaroon: 5,
         blueMacaroon: 3,
         greenMacaroon: 2,
         lemonMacaroon: 2,
         mintMacaroon: 4,
         pinkMacaroon: 3,
         violetMacaroon: 2,
        }} price={150} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default CheckoutSummary;