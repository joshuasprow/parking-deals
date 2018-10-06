import React from 'react';
import QRCode from 'qrcode';

export default class QRGenerator extends React.Component {
  componentDidUpdate({ code: prevCode }) {
    const { code } = this.props;

    if (code && prevCode !== code && this.canvas) {
      this.generateCode(code);
    }
  }

  generateCode = code => {
    const { onCodeChange } = this.props;

    QRCode.toCanvas(this.canvas, code, function(error) {
      if (error) console.error(error);

      onCodeChange(code);

      console.log('success!');
    });
  };

  render() {
    return <canvas ref={ref => (this.canvas = ref)} />;
  }
}
