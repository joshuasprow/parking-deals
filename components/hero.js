import React from 'react';

export default () => (
  <React.Fragment>
    <div>
      <h1>Welcome to Fly Lansing</h1>
      <h3>Parking Rewards</h3>
    </div>
    <style scoped jsx>{`
      div {
        width: 100%;
        color: #333;
      }
      h1 {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 36px;
      }
      h1,
      h3 {
        text-align: center;
      }
      h3 {
        color: #888;
      }
    `}</style>
  </React.Fragment>
);
