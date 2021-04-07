import Button from "../../../UI/Button/Button";
import MacaroonBoxIngredient from "../../MacaroonBoxIngredient/MacaroonBoxIngredient";
import classes from "./MacaroonBoxControl.module.css";

const MacaroonBoxControl = ({ type, add, remove }) => {
  return (
    <div className={classes.MacaroonBoxControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <MacaroonBoxIngredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default MacaroonBoxControl;