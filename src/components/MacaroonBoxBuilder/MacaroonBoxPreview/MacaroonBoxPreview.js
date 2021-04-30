import Macaroons from "../Macaroons/Macaroons";
import classes from "./MacaroonBoxPreview.module.css";

const MacaroonBoxPreview = ({ macaroons, price }) => {
  const result = [];
  for (const macaroon in macaroons) {
    for (let i = 0; i < macaroons[macaroon]; i++) {
      result.push(<Macaroons key={macaroon + i} type={macaroon} />)
    }
  }

  return (
    <div className={classes.MacaroonBoxPreview}>
      <div className={classes.macaroon}>
        <div 
          className={classes.macaroons}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default MacaroonBoxPreview;