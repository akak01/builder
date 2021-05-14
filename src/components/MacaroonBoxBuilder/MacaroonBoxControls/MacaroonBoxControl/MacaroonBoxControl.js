import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import Macaroons from "../../Macaroons/Macaroons";
import classes from "./MacaroonBoxControl.module.css";

const MacaroonBoxControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.MacaroonBoxControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.macaroon}>
        <Macaroons type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default MacaroonBoxControl;