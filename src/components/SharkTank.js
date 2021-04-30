import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentData';

function SharkTank({ liveStudents, setLiveStudents, setDeadStudents }) {
  const handleSharkAttack = () => {
    followTheLight(liveStudents);
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  };
  return (
    <div className='button-container'>
      <Button className='m-3' color='danger' onClick={handleSharkAttack}>SHARK ATTACK</Button>
      <div className='shark-tank'>
      {liveStudents.map((studentObject) => <LiveStudent
        key={studentObject.id}
        firstName={studentObject.firstName}
        lastName={studentObject.lastName}
      />)}
      </div>
    </div>
  );
}

SharkTank.propTypes = {
  liveStudents: PropTypes.array,
  setLiveStudents: PropTypes.func,
  setDeadStudents: PropTypes.func
};

export default SharkTank;
