
export const updateTimes = (api) => (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return api.fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

export const initializeTimes = (api) => () => {
  if (!api) return [];
  const today = new Date();
  return api.fetchAPI(today);
};
