import Macaroons from "../Macaroons/Macaroons";

import classes from "./MacaroonBoxPreview.module.css";
import macaroonsBackground from "../../../images/plate.jpg";

const MacaroonBoxPreview = ({ macaroons, price }) => {
  const result = [];
  for (const macaroon in macaroons) {
    for (let i = 0; i < macaroons[macaroon]; i++) {
      result.push(<Macaroons key={macaroon + i} type={macaroon} />)
    }
  }

  return (
    <div className={classes.MacaroonBoxPreview}>
      <div className={classes.macaroonBox}>
        <div 
          className={classes.macaroons}
          style={{ backroundImage: `url(${macaroonsBackground})`}}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default MacaroonBoxPreview;