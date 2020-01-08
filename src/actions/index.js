export const dataReceived = (data, slug) => ({
  type: `DATA_RECEIVED`,
  slug,
  data
});

export const setLoading = val => ({
  type: `SET_LOADING`,
  val
});
