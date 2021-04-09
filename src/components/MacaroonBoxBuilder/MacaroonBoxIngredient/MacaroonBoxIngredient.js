import React from "react";

import classes from "./MacaroonBoxIngredient.module.css";
import blueMacaroonBackground from "../../../images/blueMacaroon.svg";
import greenMacaroonBackground from "../../../images/greenMacaroon.svg";
import pinkMacaroonBackground from "../../../images/pinkMacaroon.svg";
import violetMacaroonBackground from "../../../images/violetMacaroon.svg";
const MacaroonBoxIngredient = ({ type, fixed }) => {
  const types = {
    blueMacaroon: { backgroundImage: `url(${blueMacaroonBackground})`},
    greenMacaroon: { backgroundImage: `url(${greenMacaroonBackground})`},
    pinkMacaroon: { backgroundImage: `url(${pinkMacaroonBackground})`},
    violetMacaroon: { backgroundImage: `url(${violetMacaroonBackground})`,},
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