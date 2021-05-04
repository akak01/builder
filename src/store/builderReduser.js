const instalState = {
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

const builderReduser = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADD_MACAROON":
            newState.macaroons[action.macaroon]++;
            break;
        case "REMOVE_MACAROON":
            newState.macaroons[action.macaroon]--;
            break;

        default;
          break;    
    }
    return state;
}

export default builderReduser;