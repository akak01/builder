import MacaroonBoxPreview from "./MacaroonBoxPreview/MacaroonBoxPreview";
import MacaroonBoxControls from "./MacaroonBoxControls/MacaroonBoxControls";

import classes from "./MacaroonBoxBuilder.module.css";
import { useState } from "react";

const MacaroonBoxBuilder = () => {
  const prices = {
    tomato: 3.5,
    salami: 4,
    greenOlive: .3,
    blackOlive: .3,
    redPepper: 2,
    yellowPepper: 1,
  };

  const [ingredients, setIngredients] = useState({
    tomato: 1,
    salami: 1,
    greenOlive: 1,
    blackOlive: 1,
    redPepper: 1,
    yellowPepper: 1,
  });
  const [price, setPrice] = useState(150);
  const [canBuy, setCanBuy] = useState(true);

  function checkCanBuy(newIngredients) {
    const totalIngredients = Object.values(newIngredients)
      .reduce((total, current) => total + current);
    setCanBuy(totalIngredients > 0);
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    checkCanBuy(newIngredients);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      checkCanBuy(newIngredients);
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.MacaroonBuilder}>
      <MacaroonBoxPreview
        ingredients={ingredients}
        price={price} />
      <MacaroonBoxControls
        canBuy={canBuy}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default MacaroonBoxBuilder;