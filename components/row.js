import React from 'react';

export default props => (
  <React.Fragment>
    <div className="row" {...props} />
    <style jsx>{`
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </React.Fragment>
);
