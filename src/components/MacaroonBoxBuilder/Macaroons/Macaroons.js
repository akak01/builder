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
    blackMacaroon: { backgroundImage: `url(${blackMacaroonBackground})`, width: "35px", height: "35px" },
    blueMacaroon: { backgroundImage: `url(${blueMacaroonBackground})`, width: "35px", height: "35px" },
    greenMacaroon: { backgroundImage: `url(${greenMacaroonBackground})`, width: "35px", height: "35px" },
    lemonMacaroon: { backgroundImage: `url(${lemonMacaroonBackground})`, width: "35px", height: "35px" },
    mintMacaroon: { backgroundImage: `url(${mintMacaroonBackground})`, width: "35px", height: "35px" },
    pinkMacaroon: { backgroundImage: `url(${pinkMacaroonBackground})`, width: "35px", height: "35px" },
    violetMacaroon: { backgroundImage: `url(${violetMacaroonBackground})`, width: "35px", height: "35px" },
  };

  return (
    <div className={classes.Macaroons} style={types[type]}></div>
  );
}

export default Macaroons;