import React from "react";

import classes from "./MacaroonBoxIngredient.module.css";
import blueMacaroonBackground from "../../../images/blueMacaroon.svg";
import creamMacaroonBackground from "../../../images/creamMacaroon.svg";
import lemonMacaroonBackground from "../../../images/lemonMacaroon.svg";
import limeMacaroonBackground from "../../../images/limeMacaroon.svg";
import mintMacaroonBackground from "../../../images/mintMacaroon.svg";
import redMacaroonBackground from "../../../images/redMacaroon.svg";
import violetMacaroonBackground from "../../../images/violetMacaroon.svg";
import yellowMacaroonBackground from "../../../images/yellowMacaroon.svg";

const MacaroonBoxIngredient = ({ type, fixed }) => {
  const types = {
    blueMacaroon: { backgroundImage: `url(${blueMacaroonBackground})`, width: "35px", height: "35px" },
    creamMacaroon: { backgroundImage: `url(${creamMacaroonBackground})`, width: "10px", height: "10px" },
    lemonMacaroon: { backgroundImage: `url(${lemonMacaroonBackground})`, width: "20px", height: "20px" },
    limeMacaroon: { backgroundImage: `url(${limeMacaroonBackground})`, width: "40px", height: "40px" },
    mintMacaroon: { backgroundImage: `url(${mintMacaroonBackground})`, width: "40px", height: "40px" },
    redMacaroon: { backgroundImage: `url(${redMacaroonBackground})`, width: "40px", height: "40px" },
    violetMacaroon: { backgroundImage: `url(${violetMacaroonBackground})`, width: "40px", height: "40px" },
    yellowMacaroon: { backgroundImage: `url(${yellowMacaroonBackground})`, width: "40px", height: "40px" },
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

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.MacaroonBoxIngredient} style={types[type]}></div>
  );
}

export default React.memo(MacaroonBoxIngredient);