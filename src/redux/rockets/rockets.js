import axios from 'axios';

const FETCH_ROCKETS = 'FETCH_ROCKETS';

const rockets = [];

export const FetchRocketsHandler = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return dispatch({ type: FETCH_ROCKETS, payload: response.data });
};

const rocketsReducer = (state = rockets, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload.map((rocket) => ({ ...rocket, active: false }));

    default: return state;
  }
};
export default rocketsReducer;
