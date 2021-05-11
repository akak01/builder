import MacaroonBoxPreview from "./MacaroonBoxPreview/MacaroonBoxPreview";
import MacaroonBoxControls from "./MacaroonBoxControls/MacaroonBoxControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import classes from "./MacaroonBoxBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";

const MacaroonBoxBuilder = ({ history }) => {

  const macaroons = useSelector(state => state.builder.macaroons);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-883f2-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       setMacaroons(response.data.macaroons);
  //     });
  // }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
      setOrdering(false);
      //loadDefaults();
       history.push('/checkout');

  }

  return (
    <div className={classes.MacaroonBoxBuilder}>
      <MacaroonBoxPreview
        macaroons={macaroons}
        price={price} />
      <MacaroonBoxControls
        macaroons={macaroons}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            macaroons={macaroons}
            price={price}
            />
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default MacaroonBoxBuilder;