import { React } from 'react';
import classes from './MyProfile.module.css';
import MyMission from './MyMission';
import MyRockets from './MyRockets';

const MyProfile = () => (
  <div className={classes.myProfile}>
    <div>
      <MyMission />
    </div>

    <div>
      <MyRockets />
    </div>
  </div>
);

export default MyProfile;
