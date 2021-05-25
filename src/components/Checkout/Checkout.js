import MacaroonBoxPreview from "../MacaroonBoxBuilder/MacaroonBoxPreview/MacaroonBoxPreview";
import CheckoutForm from "./ChackoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {
  const { token, id } = useSelector(state => state.auth);
  const macaroons = useSelector(state => state.builder.macaroons);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json?ayth=' + token, {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      macaroons: macaroons,
      price: price,
      userId: id
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <MacaroonBoxPreview macaroons={macaroons} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
 
export default withAxios(Checkout, axios);