import React from 'react';
import classNames from 'classnames';
import { buttonShadow } from '../pages';

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
    const { className } = this.props;
    const { code } = this.state;

    return (
      <React.Fragment>
        <section>
          <video
            className={classNames(className, { captured: code })}
            ref={ref => (this.video = ref)}
            height={240}
          />
        </section>
        <button disabled={!code} onClick={this.submitCode}>
          Next
        </button>

        <style jsx>
          {`
            video {
              width: 320px;
              height: 240px;
              ${buttonShadow()};
            }
            video.active {
              ${buttonShadow()};
            }
            video.captured {
              ${buttonShadow('lightgreen', true)};
            }
            video.error {
              ${buttonShadow('red', true)};
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
