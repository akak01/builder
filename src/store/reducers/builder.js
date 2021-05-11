import { useState } from "react";

const initialState = {
    macaroons:{
      blackMacaroon: 5,
      blueMacaroon: 5,
      greenMacaroon: 5,
      lemonMacaroon: 5,
      mintMacaroon: 5,
      pinkMacaroon: 5,
      violetMacaroon: 5,
    },
    price:200,
};
const prices = {
    blackMacaroon: 45,
    blueMacaroon: 35,
    greenMacaroon: 20,
    lemonMacaroon: 25,
    mintMacaroon: 40,
    pinkMacaroon: 36,
    violetMacaroon: 29,
};

const builder = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADD_MACAROON":
            newState.macaroons[action.macaroon]++;
            useState.price += prices[action.macaroon];
            break;
        case "REMOVE_MACAROON":
            newState.macaroons[action.macaroon]--;
            newState.price -= prices[action.macaroon];
            break;

        default:
          break;    
    }
    return state;
}

export default builder;