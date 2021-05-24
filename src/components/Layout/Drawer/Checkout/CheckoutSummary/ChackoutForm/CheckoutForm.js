import Button from "../../../UI/Button/Button";
import classes from "./CheckoutForm.module.css";

const CheckoutForm = ({ submitCallback, cancelCallback }) => {
    return (
      <form className={classes.CheckoutForm} onSubmit={submitCallback}>
          <div>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required
                placeholder="Ex: Jay Park" />
          </div>
          <div>
              <label for="name">Phone</label>
              <input type="tel" id="phone" name="phone" required
                placeholder= "Ex: 0999999999"
                pattern="0[0-9]{9}" />
          </div>
          <div>
              <label for="name">Address</label>
              <input type="text" id="address" name="address" required
                placeholder="Ex: Lenina 1" />
          </div>

          <Button>Checkout</Button>
          <Button onClick={cancelCallback}>Cancel</Button>
      </form>
    );
}

export default CheckoutForm;