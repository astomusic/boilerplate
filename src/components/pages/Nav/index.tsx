import * as React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Nav = () => {
  return (
    <React.Fragment>
      <div className="navigation">
        <Link to={'/'}>home</Link>
        <Link to={'/test'}>test</Link>
      </div>
    </React.Fragment>
  );
};
export default Nav;