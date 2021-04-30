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
        blackMacaroon: 0,
        blueMacaroon: 5,
        greenMacaroon: 6,
        lemonMacaroon: 10,
        mintMacaroon: 10,
        pinkMacaroon: 10,
        violetMacaroon: 5,
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