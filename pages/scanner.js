import React from 'react';

import Meta from '../components/meta';

export default class Scanner extends React.PureComponent {
  state = { QrReader: null };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const QrReader = require('react-qr-reader');

      this.setState({ QrReader });
    }
  }

  handleError = error => {
    console.error(error);
  };

  submitCode = code => {
    if (code) {
      this.setState({ QrReader: null });

      console.log(code);
    }
  };

  render() {
    const { QrReader } = this.state;

    return (
      <Meta>
        <div className="reader-wrapper">
          {QrReader && (
            <QrReader
              onError={this.handleError}
              onScan={this.submitCode}
              style={{ margin: 0 }}
            />
          )}
        </div>

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
