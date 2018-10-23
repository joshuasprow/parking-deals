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
        ? 'First, enter your mobile number so we can remember who you are.'
        : mode === 'scanner'
          ? 'Now, hold your ticket up to the camera so we can make it cheaper.'
          : "Your ticket has been stored and here's a nice, clean copy for you. Go ahead and click it to download the QR Code to your phone or you can have it texted to you.";

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
              width: 80%;
              margin: 0 auto;
              background-color: rgba(74,144,226,0.1);
              color: rgb(34,104,186);
              text-align: center;
              border: 1px solid rgb(34,104,186);
              border-radius: 3px;
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
              margin: 1rem 0;
            }
            section.jsx-2588165231 {
              margin: 30px 15px;
            }

          `}
        </style>
      </React.Fragment>
    );
  }
}
