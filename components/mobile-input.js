import React from 'react';
import maskInput from 'vanilla-text-mask';
import classNames from 'classnames';
import { buttonShadow } from '../pages';

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

  render() {
    const { mobileTouched, mobileValid } = this.state;

    return (
      <React.Fragment>
        <article role="form">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            className={classNames(
              { valid: mobileValid },
              { error: mobileTouched && !mobileValid },
            )}
            id="mobile"
            ref={ref => (this.input = ref)}
            onBlur={this.touchMobile}
            placeholder="(   )   -"
            type="tel"
          />
        </article>

        <style jsx>
          {`
            label {
              margin-bottom: 0.5rem;
            }
            input {
              display: block;
              position: relative;
              max-width: 8em;
              font-size: 1.5rem;
              font-family: monospace;
              padding: 0.25em 0.5em;
              margin-bottom: 0.5rem;
              appearence: none;
              border: 1px solid rgb(34, 104, 186);
              border-radius: 3px;
              outline: none;
              transform: translateY(1px);
              transition: transform 200ms ease-in-out,
                box-shadow 200ms ease-in-out;
            }
            input:focus {
              transform: translateY(0);
            }
            input.valid {
              transform: translateY(0);
              color: green;
            }
            input.error {
              transform: translateY(0);
              color: red;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
