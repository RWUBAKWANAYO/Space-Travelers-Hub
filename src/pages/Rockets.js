import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchRocketsHandler } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchRocketsHandler());
  }, []);
  return (
    <div>
      <h1 key={Math.random()}>Rockets</h1>
      <button type="button">Click</button>
    </div>
  );
};

export default Rockets;
