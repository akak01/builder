import classes from "./Macaroons.module.css";

import blackMacaroonBackground from "../../../images/blackMacaroon.svg";
import blueMacaroonBackground from "../../../images/blueMacaroon.svg";
import greenMacaroonBackground from "../../../images/greenMacaroon.svg";
import lemonMacaroonBackground from "../../../images/lemonMacaroon.svg";
import mintMacaroonBackground from "../../../images/mintMacaroon.svg";
import pinkMacaroonBackground from "../../../images/pinkMacaroon.svg";
import violetMacaroonBackground from "../../../images/violetMacaroon.svg";

const Macaroons = ({ type, fixed }) => {
  const types = {
    blackMacaroon: { backgroundImage: `url(${blackMacaroonBackground})`, width: "40px", height: "40px" },
    blueMacaroon: { backgroundImage: `url(${blueMacaroonBackground})`, width: "40px", height: "40px" },
    greenMacaroon: { backgroundImage: `url(${greenMacaroonBackground})`, width: "40px", height: "40px" },
    lemonMacaroon: { backgroundImage: `url(${lemonMacaroonBackground})`, width: "40px", height: "40px" },
    mintMacaroon: { backgroundImage: `url(${mintMacaroonBackground})`, width: "40px", height: "40px" },
    pinkMacaroon: { backgroundImage: `url(${pinkMacaroonBackground})`, width: "40px", height: "40px" },
    violetMacaroon: { backgroundImage: `url(${violetMacaroonBackground})`, width: "40px", height: "40px" },
  };

  return (
    <div className={classes.Macaroons} style={types[type]}></div>
  );
}

export default Macaroons;