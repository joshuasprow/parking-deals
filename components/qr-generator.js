import React from 'react';
import QRCode from 'qrcode';

export default class QRGenerator extends React.Component {
  componentDidMount() {
    this.generateCode();
  }

  generateCode = () => {
    const { code, onCodeChange } = this.props;

    QRCode.toCanvas(this.canvas, code, function(error) {
      if (error) console.error(error);

      onCodeChange(code);

      console.log('success!');
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
