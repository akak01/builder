import classes from "./CheckoutSummary.module.css";
import MacaroonBoxPreview from "../../MacaroonBoxBuilder/MacaroonBoxPreview/MacaroonBoxPreview";
import CheckoutForm from "./ChackoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <MacaroonBoxPreview macaroons={{
         blackMacaroon: 2,
         blueMacaroon: 2,
         greenMacaroon: 2,
         lemonMacaroon: 2,
         mintMacaroon: 2,
         pinkMacaroon: 2,
         violetMacaroon: 2,
        }} price={280} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default CheckoutSummary;