import { ADD_MACAROON, REMOVE_MACAROON, SET_MACAROONS } from "../actions/types";

const initialState = {
    macaroons: {
    },
    price: 0,
};
const prices = {
    blackMacaroon: 30,
    blueMacaroon: 20,
    greenMacaroon: 25,
    lemonMacaroon: 35,
    mintMacaroon: 25,
    pinkMacaroon: 30,
    violetMacaroon: 20,
};

const builder = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case ADD_MACAROON:
        newState.macaroons[action.macaroon]++;
        newState.price += prices[action.macaroon];
        break;
      case REMOVE_MACAROON:
        newState.macaroons[action.macaroon]--;
        newState.price -= prices[action.macaroon];
        break;
      case SET_MACAROONS:
        return { ...action.data };
    
      default:
        break;
    }
  
    return newState;
  }

export default builder;
