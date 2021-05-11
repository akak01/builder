import axios from "axios";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import { useSelector } from "react-redux";

const Checkout = ({ history }) => {
  const macaroons = useSelector(state => state.builder.macaroons);
  const price = useSelector(state => state.builder.price);
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const order = {
      name: data.get('name'),
      phone: data.get('phone'),
      address: data.get('address'),
      macaroons: macaroons,
      price: price,
    }

    axios.post('https://builder-883f2-default-rtdb.firebaseio.com/orders.json', order)
      .then(response => {
        history.replace('/');
      });
  }

  return (
    <div>
      <CheckoutSummary
        macaroons={macaroons}
        price={price}
        submitCallback={submitCallback}
        cancelCallback={cancelCallback}
         />
    </div>
  );
}
 
export default Checkout;