const hello1 = 'hello';
const rockets = [];

export const handleHello = () => ({ type: hello1 });
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
