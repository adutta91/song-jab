const initialState = () => ({
  venues: [],
  fetched: false
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case "VENUES_RECEIVED":
      return { ...state, venues: action.venues, fetched: true };
    default:
      return state;
  }
};
