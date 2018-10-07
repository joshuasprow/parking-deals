import React from 'react';
import maskInput from 'vanilla-text-mask';
import classNames from 'classnames';

const mobileMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
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

  submitMobile = () => this.props.onSubmitMobile();

  render() {
    const { mobile } = this.props;
    const { mobileTouched, mobileValid } = this.state;

    return (
      <React.Fragment>
        <section role="form">
          <label htmlFor="mobile" className="label">
            mobile number
          </label>
          <input
            className={classNames(
              'input',
              { valid: mobileValid },
              { error: mobileTouched && !mobileValid },
            )}
            id="mobile"
            ref={ref => (this.input = ref)}
            onBlur={this.touchMobile}
            placeholder="(   )   -"
            type="tel"
          />
        </section>
        <button
          className="button"
          disabled={mobile.length < 10}
          onClick={this.submitMobile}>
          submit mobile
        </button>

        <style jsx>
          {`
            .label {
              margin-bottom: 0.5rem;
            }
            .input {
              display: block;
              position: relative;
              font-size: 1.5rem;
              font-family: monospace;
              padding: 0.25em 0.5em;
              margin-bottom: 0.5rem;
              appearence: none;
              border: 1px solid #444;
              box-shadow: 0 0 4px transparent;
              outline: none;
              transition: box-shadow 100ms ease-in-out;
            }
            .input:focus {
              box-shadow: 0 0 4px blue;
            }
            .input.valid {
              color: green;
              box-shadow: 0 0 4px green;
            }
            .input.error {
              color: red;
              box-shadow: 0 0 4px red;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
