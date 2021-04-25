import { useState, useEffect } from 'react'
import Bounty from './components/Bounty'
import BountyForm from './components/BountyForm';
import './App.css';


function App() {
  const [bountys,setBountys] =useState([]);

  useEffect(() =>{
    fetch("http://localhost:5000")
   .then(res => res.json())
    .then(res => setBountys(res))
    .catch(err => console.log(err))
  }, []);

  

  const bountyList = bountys.map(bounty => <Bounty bounty={bounty} key={bounty.lastName} />)

  return (
    <div className='bountys'>
      <BountyForm />
    {bountyList}
    </div>
  );
}

export default App;