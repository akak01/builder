import MacaroonBoxPreview from "./MacaroonBoxPreview/MacaroonBoxPreview";
import MacaroonBoxControls from "./MacaroonBoxControls/MacaroonBoxControls";

import classes from "./MacaroonBoxBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const MacaroonBoxBuilder = ({ history }) => {
  const prices = {
    blackMacaroon: 45,
    blueMacaroon: 35,
    greenMacaroon: 20,
    lemonMacaroon: 25,
    mintMacaroon: 40,
    pinkMacaroon: 36,
    violetMacaroon: 29,
  };

  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(loadDefaults, []);

  function loadDefaults() {
    axios
      .get('https://builder-883f2-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      });
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    axios
      .post('https://builder-883f2-default-rtdb.firebaseio.com/default.json', {
        ingredients: ingredients,
        price: price,
        address: "99 Toktogul str",
        phone: "0 999 999 999",
        name: "Jay Park",
      })
      .then(() => {
        setOrdering(false);
        loadDefaults();
        history.push('/checkout');
      });
  }

  return (
    <div className={classes.MacaroonBoxBuilder}>
      <MacaroonBoxPreview
        ingredients={ingredients}
        price={price} />
      <MacaroonBoxControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default MacaroonBoxBuilder;