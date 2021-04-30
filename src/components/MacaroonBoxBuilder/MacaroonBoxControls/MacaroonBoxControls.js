import Button from "../../UI/Button/Button";
import MacaroonBoxControl from "./MacaroonBoxControl/MacaroonBoxControl";
import classes from "./MacaroonBoxControls.module.css";

const MacaroonBoxControls = ({
  macaroons,
  addMacaroon,
  removeMacaroon,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const macaroon in macaroons) {
    total += macaroons[macaroon];
    results.push(<MacaroonBoxControl
        key={macaroon}
        add={addMacaroon}
        remove={removeMacaroon}
        count={macaroons[macaroon]}
        type={macaroon} />)
  }

  return (
    <div className={classes.MacaroonBoxControls}>
      <strong>Macaroons</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default MacaroonBoxControls;