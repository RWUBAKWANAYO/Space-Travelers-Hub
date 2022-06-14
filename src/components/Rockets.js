import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { handleHello } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <div>
      {rockets.map((el) => <h1 key={Math.random()}>{el}</h1>)}
      <button type="button" onClick={() => dispatch(handleHello())}>Click</button>
    </div>
  );
};

export default Rockets;
