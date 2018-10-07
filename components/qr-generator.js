import React from 'react';
import QRCode from 'qrcode';

export default class QRGenerator extends React.Component {
  componentDidMount() {
    this.generateCode();
  }

  generateCode = () => {
    const { onCodeChange } = this.props;
    const code = '641C2M2TITO2DWVN4XZ0';

    QRCode.toCanvas(this.canvas, code, { width: 320, height: 320 }, error => {
      if (error) {
        throw error;
      }

      onCodeChange(code);
    });
  };

  render() {
    return (
      <div className="field-wrapper">
        <canvas ref={ref => (this.canvas = ref)} />
      </div>
    );
  }
}
