import { ADD_MACAROON, REMOVE_MACAROON, SET_MACAROONS } from "../actions/types";

const initialState = {
    macaroons:{
    },
    price:0,
};
const prices = {
    blackMacaroon: 0,
    blueMacaroon: 0,
    greenMacaroon: 0,
    lemonMacaroon: 0,
    mintMacaroon: 0,
    pinkMacaroon: 0,
    violetMacaroon: 0,
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
