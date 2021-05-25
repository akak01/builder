import MacaroonBoxPreview from "./MacaroonBoxPreview/MacaroonBoxPreview";
import MacaroonBoxControls from "./MacaroonBoxControls/MacaroonBoxControls";
import withAxios from "../withAxios";
import axios from "../../axios";
import classes from "./MacaroonBoxBuilder.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

const MacaroonBoxBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const { macaroons, price} = useSelector(state => state.builder);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    if (isAuthenticated) {
      setOrdering(true);
    }
    else {
      history.push('/auth');
    }
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
          <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default withAxios(MacaroonBoxBuilder, axios);