import React from "react";

import classes from "./MacaroonBoxIngredient.module.css";
import blackMacaroonBackground from "../../../images/blackMacaroon.svg";
import blueMacaroonBackground from "../../../images/blueMacaroon.svg";
import greenMacaroonBackground from "../../../images/greenMacaroon.svg";
import lemonMacaroonBackground from "../../../images/lemonMacaroon.svg";
import mintMacaroonBackground from "../../../images/mintMacaroon.svg";
import pinkMacaroonBackground from "../../../images/pinkMacaroon.svg";
import violetMacaroonBackground from "../../../images/violetMacaroon.svg";

const MacaroonBoxIngredient = ({ type, fixed }) => {
  const types = {
    blackMacaroon: { backgroundImage: `url(${blackMacaroonBackground})`, width: "50px", height: "35px"},
    blueMacaroon: { backgroundImage: `url(${blueMacaroonBackground})`, width: "50px", height: "35px"},
    greenMacaroon: { backgroundImage: `url(${greenMacaroonBackground})`, width: "50px", height: "35px"},
    lemonMacaroon: { backgroundImage: `url(${lemonMacaroonBackground})`, width: "50px", height: "35px"},
    mintMacaroon: { backgroundImage: `url(${mintMacaroonBackground})`, width: "50px", height: "35px"},
    pinkMacaroon: { backgroundImage: `url(${pinkMacaroonBackground})`, width: "50x", height: "35px"},
    violetMacaroon: { backgroundImage: `url(${violetMacaroonBackground})`, width: "50px", height: "35px"},
  };

  function getPosition(ingredientWidth) {
    const macaroonDiameter = 380;
    const macaroonRadius = macaroonDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * macaroonDiameter);
    const ingredientLeft = Math.round(Math.random() * macaroonDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - macaroonRadius, 2) + Math.pow(ingredientLeft - macaroonRadius, 2)
    ) + ingredientRadius;

    return distance < macaroonRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  
  return (
    <div className={classes.MacaroonBoxIngredient} style={types[type]}></div>
  );
}

export default React.memo(MacaroonBoxIngredient);