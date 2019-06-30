import * as React from 'react';
import { useState }  from 'react';

import './index.scss';

const Test = () => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue(value);
  }
  return (
    <React.Fragment>
      <div className="test">
        <h1>Test</h1>
        <div>
          <input
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Test;