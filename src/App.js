import React, { useState } from 'react';
import './App.css';
import Image from './components/Image'
import MerryXmas from './components/MerryXmas';
function App() {
 
  const [count, setCount] = useState(0);

  return (
    <div className='main'>
     <p>{count} of 5 pics</p>
      <button onClick={() => {
        setCount(count + 1);
        if(count === 5){
          setCount(1)
        }
        }}>
        Push me
      </button>
        {count === 0? <MerryXmas />: <Image id={count} />}
        
    </div>
  );
}

export default App;
