import Button from "../../UI/Button/Button";
import MacaroonBoxControl from "./MacaroonBoxControl/MacaroonBoxControl";
import classes from "./MacaroonBoxControls.module.css";

const MacaroonBoxControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    results.push(<MacaroonBoxControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.MacaroonBoxControls}>
      <strong>Ingredients</strong>
      {results}
      <Button
        onClick={() => setIsBuying(true)}
        disabled={!canBuy}>
          Order
      </Button>
    </div>
  );
}

export default MacaroonBoxControls;
