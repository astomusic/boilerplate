import * as React from 'react';
import { useState }  from 'react';

import './index.scss';

const Home = () => {
  const [counter, setCounter] =  useState(0);
  const [startTime, setStartTime] = useState('');
  const handleCounter = () => {
    if (counter === 0) {
      setStartTime(Date.now());
      setCounter(counter + 1);
    } else if (counter === 9) {
      alert(`${(Date.now() - startTime) / 1000}s`);
      setCounter(0);
    } else  {
      setCounter(counter + 1);
    }
  }
  return (
    <React.Fragment>
      <div className="home">
        <h1>
          홈입니다
        </h1>
        <div
          className="empty"
          onClick={handleCounter}
        >
          {counter ? counter : 'empty'}
        </div>
      </div>
      
    </React.Fragment>
  );
};
export default Home;