import React from "react";

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
    blackMacaroon: { backgroundImage: `url(${blackMacaroonBackground})`, width: "55px", height: "55px" },
    blueMacaroon: { backgroundImage: `url(${blueMacaroonBackground})`, width: "55px", height: "55px" },
    greenMacaroon: { backgroundImage: `url(${greenMacaroonBackground})`, width: "55px", height: "55px" },
    lemonMacaroon: { backgroundImage: `url(${lemonMacaroonBackground})`, width: "55px", height: "55px" },
    mintMacaroon: { backgroundImage: `url(${mintMacaroonBackground})`, width: "55px", height: "55px" },
    pinkMacaroon: { backgroundImage: `url(${pinkMacaroonBackground})`, width: "55px", height: "55px" },
    violetMacaroon: { backgroundImage: `url(${violetMacaroonBackground})`, width: "55px", height: "55px" },
  };

  function getPosition(macaroonWidth) {
    const plateDiameter = 380;
    const plateRadius = plateDiameter / 2;
    const macaroonRadius = parseInt(macaroonWidth) / 2;

    const macaroonTop = Math.round(Math.random() * plateDiameter);
    const macaroonLeft = Math.round(Math.random() * plateDiameter);

    const distance = Math.sqrt(
      Math.pow(macaroonTop - plateRadius, 2) + Math.pow(macaroonLeft - plateRadius, 2)
    ) + macaroonRadius;

    return distance < plateRadius
      ? {
        top: macaroonTop - macaroonRadius,
        left: macaroonLeft - macaroonRadius
      }
      : getPosition(macaroonWidth);
  }

  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
 
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.Macaroons} style={types[type]}></div>
  );
}

export default React.memo(Macaroons);