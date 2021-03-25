import classes from "./Builder.module.css";
import Preview from "./Preview/Preview";
import Controls from "./Controls/Controls";

const Builder = () => {
  const ingredients = {
    tomato: 10,
    salami: 20,
    greenOlive: 10,
    blackOlive: 10,
    redPepper: 10,
    yellowPepper: 5,
  };

  return (
    <div className={classes.Builder}>
      <Preview ingredients={ingredients} />
      <Controls />
    </div>
  );
}

export default Builder;