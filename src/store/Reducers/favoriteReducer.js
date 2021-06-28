const initalState = {favoristesPlayGround: []};

function toggleFavorite(state = initalState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAV':
      const favoritePlaygroundIndex = state.favoristesPlayGround.findIndex(
        item => item.id === action.value.id,
      );
      if (favoritePlaygroundIndex !== -1) {
        nextState = {
          ...state,
          favoristesPlayGround: state.favoristesPlayGround.filter(
            (item, index) => index !== favoritePlaygroundIndex,
          ),
        };
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
