import React from 'react';
import Link from 'next/link';

export default () => (
  <React.Fragment>
    <div>
      <Link href="/">
        <a>mobile</a>
      </Link>
      <Link href="/scanner">
        <a>scanner</a>
      </Link>
      <Link href="/confirm">
        <a>confirm</a>
      </Link>
    </div>
    <style jsx>
      {`
        a {
          color: #aaa;
          margin: 0.25rem;
        }
      `}
    </style>
  </React.Fragment>
);
