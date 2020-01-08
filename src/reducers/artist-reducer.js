const initialState = () => ({
  artists: [],
  fetched: false
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case "ARTISTS_RECEIVED":
      return { ...state, artists: action.artists, fetched: true };
    default:
      return state;
  }
};
