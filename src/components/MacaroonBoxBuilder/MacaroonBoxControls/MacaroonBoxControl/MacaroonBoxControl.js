import Button from "../../../UI/Button/Button";
import Macaroons from "../../Macaroons/Macaroons";
import classes from "./MacaroonBoxControl.module.css";

const MacaroonBoxControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.MacaroonBoxControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.macaroon}>
        <Macaroons type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default MacaroonBoxControl;