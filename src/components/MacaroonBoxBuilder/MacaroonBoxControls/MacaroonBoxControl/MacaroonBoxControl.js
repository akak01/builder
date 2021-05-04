import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import Macaroons from "../../Macaroons/Macaroons";
import classes from "./MacaroonBoxControl.module.css";

const MacaroonBoxControl = ({ type, count }) => {
  const dispatch = useDispatch ();

  return (
    <div className={classes.MacaroonBoxControl}>
      <Button onClick={() => dispatch({ type: "ADD_MACAROON", macaroon: type})}>+</Button>
      <div className={classes.macaroon}>
        <Macaroons type={type} fixed />
      </div>
      <Button onClick={dispatch({ type: "REMOVE_MACAROON", macaroon: type})} disabled={!count}>-</Button>
    </div>
  );
}

export default MacaroonBoxControl;