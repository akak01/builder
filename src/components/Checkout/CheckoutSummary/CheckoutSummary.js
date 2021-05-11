import classes from "./CheckoutSummary.module.css";
import MacaroonBoxPreview from "../../MacaroonBoxBuilder/MacaroonBoxPreview/MacaroonBoxPreview";
import CheckoutForm from "./ChackoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback, macaroons, price }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <MacaroonBoxPreview 
        macaroons={macaroons} 
        price={price} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default CheckoutSummary;