import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './time.svg';
 
const Time = () => (
  <ReactVivus
    id="time"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '100px', width: '100px' }}
    callback={console.log}
  />
);
export default Time;