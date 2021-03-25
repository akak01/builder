import classes from "./MacaronBoxIngredient.module.css";

const MacaronBoxIngredient = ({ type }) => {
  const types = {
      salami: { },
      
  }

  return (
    <div className={classes.MacaronBoxIngredient}>{type}</div>
  );
}

export default MacaronBoxIngredient;