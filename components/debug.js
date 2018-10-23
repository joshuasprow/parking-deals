import React from 'react';
import Link from 'next/link';

export default ({ code, mobile }) => (
  <React.Fragment>
    <div className="debug">
      <div className="link-box">
        <Link href="/">
          <a>mobile</a>
        </Link>
        <Link href="/scanner">
          <a>scanner</a>
        </Link>
      </div>
      <p>
        <strong>mobile: </strong>
        {mobile}
      </p>
      <p>
        <strong>code: </strong>
        {code || ''}
      </p>
    </div>
    <style scoped jsx>{`
      div,
      a {
        color: #ccc;
      }
      .link-box {
        padding: 0.25rem;
      }
      a {
        margin: 0.25rem;
      }
    `}</style>
  </React.Fragment>
);
