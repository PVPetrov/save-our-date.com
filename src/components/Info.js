import React from 'react';

import './Info.css';

const info = [
  'We prefer white and pink roses.',
  'Please, be reminded, that this is a wedding for adults onl. Take an evening off and leave the babies home.',
'The wedding ends at 1 2:30.'];

const Info = () => (
  <div className="info tangerine">
    <h3>Things to bare in mind:</h3>
    <nav>
      <ul>
        {info.map((el, i) => <li key={`${el.slice(0, el.length / 2)}-${el.length}`}>{el}</li>)}
      </ul>
    </nav>
  </div>
);

export default Info;
