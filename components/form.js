import React from 'react';
import MobileInput from './mobile-input';
import Scanner from './scanner';
import QRGenerator from './qr-generator';

const modes = ['mobile', 'scanner', 'generator'];

export default class Form extends React.PureComponent {
  state = {
    generatedCode: null,
    scannedCode: null,
    mobile: '',
    mode: modes[0],
  };

  handleMobile = mobile => this.setState({ mobile });

  submitMobile = () => this.setState({ mode: modes[1] });

  handleScannedCode = scannedCode => this.setState({ scannedCode });

  submitScannedCode = () => {
    this.setState({ mode: modes[2] });
  };

  handleGeneratedCode = generatedCode => this.setState({ generatedCode });

  render() {
    const { generatedCode, scannedCode, mobile, mode } = this.state;
    const headerText =
      mode === 'mobile'
        ? 'first, enter your mobile so we can remember who you are'
        : mode === 'scanner'
          ? 'now, hold your ticket up to the camera so we can make it cheaper'
          : "your ticket has been stored. here's a nice, clean copy for ya";

    return (
      <React.Fragment>
        <div className="form-header">
          <p>{headerText}</p>
        </div>
        <div className="form">
          {mode === 'mobile' ? (
            <MobileInput
              mobile={mobile}
              onMobileChange={this.handleMobile}
              onSubmitMobile={this.submitMobile}
            />
          ) : mode === 'scanner' ? (
            <Scanner
              onCodeChange={this.handleScannedCode}
              onSubmitCode={this.submitScannedCode}
            />
          ) : (
            <QRGenerator
              code={scannedCode}
              onCodeChange={this.handleGeneratedCode}
            />
          )}
          <p>{`mobile: ${mobile}`}</p>
          <p>{`scanned-code: ${scannedCode || ''}`}</p>
          <p>{`generated-code: ${generatedCode || ''}`}</p>
        </div>

        <style jsx>
          {`
            .form-header {
              width: 460px;
              margin: 0 auto;
              padding: 10px;
              background-color: rgba(74, 144, 226, 0.1);
              color: rgb(74, 144, 226);
            }
            .form {
              width: 480px;
              height: 480px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            :global(.field-wrapper) {
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 320px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
