const initialState = () => ({
  songs: []
});

export default (state = initialState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
