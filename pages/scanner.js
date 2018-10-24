import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Meta from '../components/meta';

class Scanner extends React.PureComponent {
  state = { code: null, mobile: null, QrReader: null };

  componentDidMount() {
    const { router } = this.props;

    if (typeof window !== 'undefined') {
      const QrReader = require('react-qr-reader');

      this.setState({ QrReader });
    }

    if (router && router.query && router.query.mobile) {
      this.setState({ mobile: router.query.mobile }, () =>
        console.log(this.state),
      );
    }
  }

  handleError = error => {
    console.error(error);
  };

  submitCode = code => {
    if (code) {
      this.setState({ code, QrReader: null });
    }
  };

  render() {
    const { code, mobile, QrReader } = this.state;

    return (
      <Meta code={code} mobile={mobile}>
        <div className="reader-wrapper">
          {QrReader && (
            <QrReader
              onError={this.handleError}
              onScan={this.submitCode}
              style={{ margin: 0 }}
            />
          )}
        </div>

        <Link href={{ pathname: '/confirm', query: { code, mobile } }}>
          <button disabled={!code || !mobile}>next</button>
        </Link>

        <style jsx>{`
          .reader-wrapper {
            width: 300px;
            max-width: 90vw;
            height: 300px;
            max-height: 70vh;
          }
        `}</style>
      </Meta>
    );
  }
}

export default withRouter(Scanner);
