import axios from "axios";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"

const Checkout = ({ history }) => {
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
      macaroons: {
        blackMacaroon: 2,
        blueMacaroon: 2,
        greenMacaroon: 2,
        lemonMacaroon: 2,
        mintMacaroon: 2,
        pinkMacaroon: 2,
        violetMacaroon: 2,
      }
    }

    axios.post('https://builder-883f2-default-rtdb.firebaseio.com/orders.json', order)
      .then(response => {
        history.replace('/');
      });
  }

  return (
    <div>
      <CheckoutSummary
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default Checkout;