import React from 'react';
import Row from './row';
import Column from './column';
import MobileInput from './mobile-input';
import Scanner from './scanner';
import QRGenerator from './qr-generator';

export default class Form extends React.PureComponent {
  state = {
    generatedCode: null,
    scannedCode: null,
    mobile: '',
    mode: 'generator',
  };

  handleMobile = mobile => this.setState({ mobile });

  submitMobile = () => {
    this.setState({ showScanner: true });
  };

  handleScannedCode = scannedCode => this.setState({ scannedCode });

  handleGeneratedCode = generatedCode => this.setState({ generatedCode });

  render() {
    const { generatedCode, scannedCode, mobile, mode } = this.state;

    return (
      <Row>
        <Column>
          {mode === 'mobile' ? (
            <>
              <MobileInput onMobileChange={this.handleMobile} />
              <button
                className="button"
                disabled={mobile.length < 10}
                onClick={this.submitMobile}>
                submit mobile
              </button>
            </>
          ) : mode === 'scanner' ? (
            <Scanner onCodeChange={this.handleScannedCode} />
          ) : (
            <QRGenerator
              code={scannedCode}
              onCodeChange={this.handleGeneratedCode}
            />
          )}
          <p>{`mobile: ${mobile}`}</p>
          <p>{`scanned-code: ${scannedCode || ''}`}</p>
          <p>{`generated-code: ${generatedCode || ''}`}</p>
        </Column>

        <style jsx>
          {`
            .button {
              appearance: none;
              font-size: 1rem;
              padding: 0.25rem;
              background-color: #fff;
              border: 1px solid black;
              margin: 0.5rem 0;
            }
            .button:disabled {
              color: #888;
              border-color: #888;
            }
            .button:active {
              background-color: #bbb;
            }
          `}
        </style>
      </Row>
    );
  }
}
