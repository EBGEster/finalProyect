import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './comment.svg';
 
const Comment = () => (
  <ReactVivus
    id="comment"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      duration: 25,
      onReady: console.log
    }}
    style={{ height: '100px', width: '100px' }}
    callback={console.log}
  />
);
export default Comment;