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
    mode: modes[2],
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
        ? 'first, enter your mobile number so we can remember who you are.'
        : mode === 'scanner'
          ? 'now, hold your ticket up to the camera so we can make it cheaper.'
          : "your ticket has been stored and here's a nice, clean copy for you. go ahead and take a screenshot!";

    return (
      <React.Fragment>
        <header>
          <p>{headerText}</p>
        </header>
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
            mobile={mobile}
            onCodeChange={this.handleGeneratedCode}
          />
        )}
        <div className="debug">
          <p>
            <strong>mobile: </strong>
            {mobile}
          </p>
          <p>
            <strong>scanned-code: </strong>
            {scannedCode || ''}
          </p>
          <p>
            <strong>generated-code: </strong>
            {generatedCode || ''}
          </p>
        </div>

        <style jsx>
          {`
            header {
              width: 100%;
              margin: 0 auto;
              background-color: rgba(74, 144, 226, 0.1);
              color: rgb(34, 104, 186);
              text-align: center;
            }
            header p {
              margin: 1rem 0.5rem;
            }
            .debug {
              color: #ccc;
            }
            :global(section) {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
