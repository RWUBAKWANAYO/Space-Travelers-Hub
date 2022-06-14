const hello1 = 'hello';
const rockets = [];
const rocketsReducer = (state = rockets, action) => {
  switch (action.type) {
    case hello1:
      return [
        ...state, 'hello',
      ];
    default: return state;
  }
};
export default rocketsReducer;
