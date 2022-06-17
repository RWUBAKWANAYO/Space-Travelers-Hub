import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { FetchRocketsHandler } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (!rockets.length)dispatch(FetchRocketsHandler());
  }, []);
  return (
    <div>
      {rockets.map((el) => (
        <div key={el.id}>
          <div>
            <img src={el.image} alt="rocket" />
          </div>
          <div>
            <h1>{el.name}</h1>
            <p>
              {el.description}
            </p>
            <button
              type="button"
            >
              Reserve Rocket

            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
