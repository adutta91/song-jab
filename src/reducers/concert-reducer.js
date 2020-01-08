const initialState = () => ({
  concerts: [],
  fetched: false
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case "CONCERTS_RECEIVED":
      return { ...state, concerts: action.concerts, fetched: true };
    default:
      return state;
  }
};
