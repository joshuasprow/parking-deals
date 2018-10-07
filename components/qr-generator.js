import React from 'react';
import QRCode from 'qrcode';

export default class QRGenerator extends React.Component {
  componentDidMount() {
    this.generateCode();
  }

  generateCode = () => {
    const { code, mobile, onCodeChange } = this.props;
    const generated = code.concat(mobile);

    console.log(generated);

    QRCode.toCanvas(
      this.canvas,
      generated,
      { width: 320, height: 320 },
      error => {
        if (error) {
          throw error;
        }

        onCodeChange(generated);
      },
    );
  };

  render() {
    return (
      <div className="field-wrapper">
        <canvas ref={ref => (this.canvas = ref)} />
      </div>
    );
  }
}
