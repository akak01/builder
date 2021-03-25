import Ingredient from "../Ingredient/Ingredient";
import classes from "./Preview.module.css";

const Preview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<Ingredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.Preview}>
      <div className={classes.sauce}>
        {result}
      </div>
    </div>
  );
}

export default Preview;