import MacaroonBoxPreview from "./MacaroonBoxPreview/MacaroonBoxPreview";
import MacaroonBoxControls from "./MacaroonBoxControls/MacaroonBoxControls";

import classes from "./MacaroonBoxBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";

const MacaroonBoxBuilder = () => {
  const prices = {
    blueMacaroon: 35,
    creamMacaroon: 20,
    lemonMacaroon: 36,
    limeMacaroon: 27,
    mintMacaroon: 42,
    redMacaroon: 38,
    violetMacaroon: 29,
    yellowMacaroon: 34,
  };

  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => {
    axios.get('https://builder-883f2-default-rtdb.firebaseio.com/default.json')
    .then(response => {
      setIngredients(response.data.ingredients);
      setPrice(response.data.price);
    });
  }, []);

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

  return (
    <div className={classes.MacaroonBuilder}>
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
        cancel={stopOrdering}>Hello</Modal>
    </div>
  );
}

export default MacaroonBoxBuilder;