import React from 'react';

import './Info.css';

const info = [
  'We prefer white and pink roses.',
  'Please, be reminded, that this is a wedding for adults only. Take an evening off and leave the babies home.',
  'The wedding ends at 12:30am .'];

const Info = () => (
  <div className="info tangerine size-x">
    <h2>Things to bare in mind:</h2>
    <nav>
      <ul>
        {info.map(el => <li key={`${el.slice(0, el.length / 2)}-${el.length}`}><h3>{el}</h3></li>)}
      </ul>
    </nav>
  </div>
);

export default Info;
