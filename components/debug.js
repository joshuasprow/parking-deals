import React from 'react';
import Link from 'next/link';

export default props => {
  let code = '';
  let mobile = '';

  if (props.code) {
    code = props.code;
  }

  if (props.mobile) {
    mobile = props.mobile;
  }

  return (
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
    </div>
  );
};
