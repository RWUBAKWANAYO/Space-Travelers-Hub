import { React } from 'react';
import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer).filter(
    (rocket) => rocket.active === true,
  );

  if (rockets.length === 0) {
    return (
      <>
        <h2>My Rockets</h2>
        <p>You have no Rockets</p>
      </>
    );
  }
  return (
    <div>
      <h2>My Rockets</h2>
      <ul className={classes.rocketList}>
        {rockets.map((el) => (
          <li className={classes.listItem} key={el.id}>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
