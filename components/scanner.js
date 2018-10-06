import React from 'react';

export default class Scanner extends React.PureComponent {
  state = { code: null };

  componentDidMount() {
    if (typeof window !== 'undefined' && this.video) {
      const Instascan = require('instascan');

      this.startCamera(Instascan);
    }
  }

  startCamera = async Instascan => {
    let scanner = new Instascan.Scanner({ video: this.video });

    scanner.addListener('scan', code => {
      this.setState({ code });

      this.props.onCodeChange(code);

      scanner.stop();
    });

    const cameras = await Instascan.Camera.getCameras();

    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  };

  render() {
    const { code } = this.state;

    return (
      <div className="scanner-container">
        <video ref={ref => (this.video = ref)} width={320} height={240} />
        <button className="button" disabled={!code}>
          submit code
        </button>
        <style jsx>
          {`
            .scanner-container {
              width: 320px;
            }
          `}
        </style>
      </div>
    );
  }
}
