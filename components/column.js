import React from 'react';

export default props => (
  <React.Fragment>
    <div className="column" {...props} />
    <style jsx>{`
      .column {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </React.Fragment>
);
