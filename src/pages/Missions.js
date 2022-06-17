import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchMissionsHandler } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchMissionsHandler());
  }, []);

  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
};
export default Missions;
