import MacaroonBoxPreview from "./MacaroonBoxPreview/MacaroonBoxPreview";
import MacaroonBoxControls from "./MacaroonBoxControls/MacaroonBoxControls";

import classes from "./MacaroonBoxBuilder.module.css";
import { useState } from "react";

const MacaroonBoxBuilder = () => {
  const prices = {
    blueMacaroon: 3.5,
    chocolateMacaroon: 4,
    creamMacaroon: .3,
    greenMacaroon: .3,
    lemonMacaroon: 2,
    limeMacaroon: 1,
    mintMacaroon: 1,
    redMacaroon: 1,
    violetMacaroon: 1,
    yellowMacaroon: 1,
  };

  const [ingredients, setIngredients] = useState({
    blueMacaroon: 1,
    chocolateMacaroon: 1,
    creamMacaroon: 1,
    greenMacaroon: 1,
    lemonMacaroon: 1,
    limeMacaroon: 1,
    mintMacaroon: 1,
    redMacaroon: 1,
    violetMacaroon: 1,
    yellowMacaroon: 1,
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