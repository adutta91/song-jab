const initialState = () => ({
  artists: [],
  concerts: [],
  venues: []
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, [action.slug]: action.data };
    default:
      return state;
  }
};
