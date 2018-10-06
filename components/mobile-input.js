import React from 'react';
import maskInput from 'vanilla-text-mask';
import classNames from 'classnames';

const mobileMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export default class MobileInput extends React.PureComponent {
  state = { mobileTouched: false, mobileValid: false, scanner: false };

  componentDidMount() {
    if (this.input && this.handleMasked) {
      maskInput({
        inputElement: this.input,
        mask: mobileMask,
        pipe: this.handleMasked,
        placeholderChar: '\u2000',
      });
    }
  }

  handleMasked = conformedMobile => {
    const mobile = conformedMobile.replace(/\D/g, '');

    this.validateMobile(mobile);
    this.props.onMobileChange(mobile);

    return conformedMobile;
  };

  touchMobile = () => this.setState({ mobileTouched: true });

  validateMobile = mobile =>
    this.setState({ mobileValid: mobile.match(/\d{10}/g) });

  render() {
    const { mobileTouched, mobileValid } = this.state;

    return (
      <React.Fragment>
        <label htmlFor="mobile" className="label">
          Mobile
          <input
            className={classNames(
              'input',
              { valid: mobileValid },
              { error: mobileTouched && !mobileValid },
            )}
            id="mobile"
            ref={ref => (this.input = ref)}
            onBlur={this.touchMobile}
            type="tel"
          />
        </label>
        <style jsx>
          {`
            .input {
              display: block;
              position: relative;
              font-size: 1rem;
              font-family: monospace;
              padding: 0.25rem;
            }
            .input.valid {
              color: green;
            }
            .input.error {
              color: red;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
