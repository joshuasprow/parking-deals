import React from 'react';
import QRCode from 'qrcode';
import { buttonShadow } from '../pages';

const DownloadLink = ({ url, ...props }) => (
  <a
    download="fly-lansing-qr-code.png"
    className="download-link"
    href={url}
    {...props}
  />
);

export default class QRGenerator extends React.Component {
  state = { url: null };

  componentDidMount() {
    this.generateCode();
  }

  generateCode = () => {
    const { code, mobile, onCodeChange } = this.props;
    const generated = code ? code.concat(mobile) : 'no-code';

    QRCode.toDataURL(generated, { width: 512, height: 512 }, (error, url) => {
      if (error) {
        throw error;
      }

      onCodeChange(generated);

      this.setState({ url });
    });
  };

  render() {
    const { url } = this.state;

    return (
      <React.Fragment>
        <section>
          {url && (
            <DownloadLink url={url}>
              <img src={url} alt="qr-code" />
            </DownloadLink>
          )}
        </section>
        <div className="button-group">
          <DownloadLink url={url}>
            <button>save it</button>
          </DownloadLink>
          <button>send it to me</button>
        </div>
        <style jsx>
          {`
            .button-group {
              display: flex;
              margin-top: 4px;
              ${buttonShadow(false)};
            }
            .button-group button {
              display: inline;
              margin: 0;
              width: 12rem;
              ${buttonShadow(true)};
            }
            img {
              width: 320px;
              height: 320px;
              max-width: 100vw;
              max-height: 100vw;
              margin: 1rem 0;
            }
            .download-link {
              text-decoration: none;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
