import React from 'react';
import Head from '../components/head';
import Form from '../components/form';
import fetch from 'isomorphic-unfetch';

export const blue = 'rgb(74, 144, 226)';
export const buttonShadow = (color, hasShadow) =>
  hasShadow
    ? `box-shadow: 0 0 0 2px ${color || blue}, 0 0 32px #bbb;`
    : `box-shadow: 0 0 0 2px ${color || blue};`;

class Home extends React.PureComponent {
  state = { mobile: '' };

  handleMobile = mobile => this.setState({ mobile });

  render() {
    return (
      <main>
        <Head title="home" />

        <div className="hero">
          <h1 className="title">Welcome to Fly Lansing Air Deals</h1>
          <h3 className="description">Introducing <strong>Parking Rewards</strong></h3>
        </div>

        <Form onMobileChange={this.handleMobile} />

        <style jsx global>{`
          :global(body) {
            margin: 0;
            font-family: Open Sans, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          main {
            width: 100vw;
            max-width 480px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          h3 {
            margin: 30px 0;
          }
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 36px;
          }
          .title,
          .description {
            text-align: center;
          }
          .description {
            color: #777;
          }
          button {
            appearance: none;
            font-size: 1rem;
            transform: translateY(-1px);
            transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
            /* buttonShadow(null, true) */
            padding: 10px 25px;
            margin: 0 auto;
            background-color: rgba(74,144,226,0.1);
            color: rgb(34,104,186);
            text-align: center;
            border: 1px solid rgb(34,104,186);
            border-radius: 3px;
            cursor: pointer;
            font-family: 'Open Sans',Helvetica,Arial,sans-serif;
          }
          button:disabled {
            color: #888;
            border-color: #888;
            transform: translateY(0);
            ${buttonShadow('#ddd')}
          }
          button:active {
            background-color: #bbb;
            transform: translateY(0);
            transition: box-shadow 50ms ease-in-out, transform 50ms ease-in-out;
          }
        `}</style>
      </main>
    );
  }
}

export default Home;
