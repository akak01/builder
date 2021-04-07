import MacaroonBoxIngredient from "../MacaroonBoxIngredient/MacaroonBoxIngredient";

import classes from "./MacaroonBoxPreview.module.css";


const MacaroonBoxPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<MacaroonBoxIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.MacaroonBoxPreview}>
      <div className={classes.macaroon}>
        <div className={classes.ingredients}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default MacaroonBoxPreview;