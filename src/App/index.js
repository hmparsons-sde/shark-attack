import React, { useState, useEffect } from 'react';
import Graveyard from '../components/Graveyard';
import SharkTank from '../components/SharkTank';
import { dearlyBeloved, livingStudents } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [liveStudents, setLiveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);
  useEffect(() => {
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);
  return (
    <div className='App'>
      <header><h1 className='mt-5'>Shark Tank</h1></header>
      <SharkTank liveStudents={liveStudents} setLiveStudents={setLiveStudents} setDeadStudents={setDeadStudents}></SharkTank>
      <h1 className='mt-5'>Dearly Departed</h1>
      <Graveyard deadStudents={deadStudents}></Graveyard>
    </div>
  );
}

export default App;
