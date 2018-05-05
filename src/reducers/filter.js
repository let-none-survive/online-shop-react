const initialState = {
  filterBy: 'all',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filterBy: action.payload
      };
    default:
      return state
  }
};
