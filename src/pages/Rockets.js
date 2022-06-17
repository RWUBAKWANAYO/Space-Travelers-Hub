import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { FetchRocketsHandler } from '../redux/rockets/rockets';
import classes from './Rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (!rockets.length)dispatch(FetchRocketsHandler());
  }, []);
  return (
    <div className={classes.rocketsColumn}>
      {rockets.map((el) => (
        <div key={el.id} className={classes.rocketRow}>
          <div>
            <img className={classes.rocketImage} src={el.image} alt="rocket" />
          </div>
          <div>
            <h2 className={classes.rocketName}>{el.name}</h2>
            <p className={classes.rocketParagraph}>
              {el.description}
            </p>
            <button
              type="button"
              className="reserveBtnBlue"
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
