import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type = 'spin', color = 'black', height = 100, width = 100 }) => (
  <div className="loading">
    <ReactLoading type={type} color={color} height={height} width={width} />
  </div>
);

export default Loading;
