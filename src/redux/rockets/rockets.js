import axios from 'axios';

const FETCH_ROCKETS = 'FETCH_ROCKETS';
const CHANGE_RESERVE = 'CHANGE_RESERVE';

const rockets = [];

export const FetchRocketsHandler = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return dispatch({ type: FETCH_ROCKETS, payload: response.data });
};

export const ReservationHandler = (id) => (dispatch) => dispatch({ type: CHANGE_RESERVE, id });

const rocketsReducer = (state = rockets, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload.map((rocket) => (
        {
          id: rocket.id,
          name: rocket.rocket_name,
          image: rocket.flickr_images,
          description: rocket.description,
          type: rocket.rocket_type,
          active: false,
        }));

    case CHANGE_RESERVE:
      return (
        state.map((rocket) => (rocket.id === action.id
          ? { ...rocket, active: !rocket.active } : { ...rocket }))
      );

    default: return state;
  }
};
export default rocketsReducer;
