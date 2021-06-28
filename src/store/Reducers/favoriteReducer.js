const initalState = {favoristesPlayGround: []};

function toggleFavorite(state = initalState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAV':
      if (state.favoristesPlayGround.includes(action.value)) {
        const favoritePlaygroundIndex = state.favoristesPlayGround.findIndex(
          item => item === action.value,
        );
        state.favoristesPlayGround.splice(favoritePlaygroundIndex, 1);
      } else {
        nextState = {
          ...state,
          favoristesPlayGround: [...state.favoristesPlayGround, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  }
}

export default toggleFavorite;
