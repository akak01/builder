import classes from "./Ingredient.module.css";

const Ingredient = ({ type }) => {
  const types = {
      salami: { },
      
  }

  return (
    <div className={classes.Ingredient}>{type}</div>
  );
}

export default Ingredient;