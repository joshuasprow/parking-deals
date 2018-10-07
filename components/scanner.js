import React from 'react';
import classNames from 'classnames';

export default class Scanner extends React.PureComponent {
  state = { code: null };

  componentDidMount() {
    if (typeof window !== 'undefined' && this.video) {
      const Instascan = require('instascan');

      this.startCamera(Instascan);
    }
  }

  startCamera = async Instascan => {
    this.scanner = new Instascan.Scanner({ video: this.video });

    this.scanner.addListener('scan', code => {
      this.setState({ code });

      this.props.onCodeChange(code);
    });

    const cameras = await Instascan.Camera.getCameras();

    if (cameras.length > 0) {
      this.scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  };

  submitCode = () => {
    const { onSubmitCode } = this.props;
    const { code } = this.state;

    if (this.scanner) {
      this.scanner.stop();

      onSubmitCode(code);
    }
  };

  render() {
    const { className, onSubmitCode } = this.props;
    const { code } = this.state;

    return (
      <React.Fragment>
        <section>
          <video
            className={classNames(className, { captured: code })}
            ref={ref => (this.video = ref)}
            width={320}
            height={240}
          />
        </section>
        <button className="button" disabled={!code} onClick={this.submitCode}>
          submit code
        </button>

        <style jsx>
          {`
            video {
              border: 2px solid black;
            }
            video.active {
              border-color: blue;
            }
            video.captured {
              border-color: lightgreen;
            }
            video.error {
              border-color: red;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
