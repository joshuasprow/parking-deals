import React from 'react';
import Head from '../components/head';
import Form from '../components/form';

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
          <h1 className="title">welcome to fly lansing</h1>
          <h3 className="description">parking deals</h3>
        </div>

        <Form onMobileChange={this.handleMobile} />

        <style jsx global>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
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
          button {
            appearance: none;
            font-size: 1rem;
            padding: 0.5rem;
            background-color: #fff;
            border: none;
            margin: 0.5rem 0;
            transform: translateY(-1px);
            transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
            ${buttonShadow(null, true)}
          }
          button:disabled {
            color: #888;
            border-color: #888;
            transform: translateY(0);
            ${buttonShadow()}
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
