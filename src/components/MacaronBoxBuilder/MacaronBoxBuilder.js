import classes from "./MacaronBoxBuilder.module.css";
import MacaronBoxPreview from "./MacaronBoxPreview/MacaronBoxPreview";
import MacaronBoxControls from "./MacaronBoxControls/MacaronBoxControls";

const MacaronBoxBuilder = () => {
  const ingredients = {
    tomato: 10,
    salami: 20,
    greenOlive: 10,
    blackOlive: 10,
    redPepper: 10,
    yellowPepper: 5,
  };

  return (
    <div className={classes.MacaronBoxBuilder}>
      <MacaronBoxPreview ingredients={ingredients} />
      <MacaronBoxControls />
    </div>
  );
}

export default MacaronBoxBuilder;