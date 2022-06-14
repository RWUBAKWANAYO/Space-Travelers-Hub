const hello = 'hello';
const missions = [];
const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case hello:
      return [
        ...state, 'hello',
      ];
    default: return state;
  }
};
export default missionsReducer;
