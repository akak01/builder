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
    total += ingredients[ingredient];
    results.push(<MacaroonBoxControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }

  return (
    <div className={classes.MacaroonBoxControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default MacaroonBoxControls;