import MacaronBoxIngredient from "../MacaronBoxIngredient/MacaronBoxIngredient";
import classes from "./MacaronBoxPreview.module.css";

const MacaronBoxPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<Ingredient  type={ingredient} />)
    }
  }

  return (
    <div className={classes.MacaronBoxPreview}>
      <div className={classes.sauce}>
        {result}
      </div>
    </div>
  );
}

export default MacaronBoxPreview;