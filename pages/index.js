import React from 'react';
import Head from '../components/head';
import Scanner from '../components/scanner';
import Form from '../components/form';

class Home extends React.PureComponent {
  state = { mobile: '' };

  handleMobile = mobile => this.setState({ mobile });

  render() {
    return (
      <div>
        <Head title="Home" />

        <div className="hero">
          <h1 className="title">Welcome to Fly Lansing</h1>
          <h3 className="description">Parking Deals</h3>
        </div>

        <div className="container">
          <Form onMobileChange={this.handleMobile} />
        </div>

        <style jsx global>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
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
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
          .button {
            appearance: none;
            font-size: 1rem;
            padding: 0.25rem;
            background-color: #fff;
            border: 1px solid #444;
            box-shadow: 0 0 4px #444;
            margin: 0.5rem 0;
            transition: box-shadow 200ms ease-in-out;
          }
          .button:disabled {
            color: #888;
            border-color: #888;
            box-shadow: 0 0 4px transparent;
          }
          .button:active {
            background-color: #bbb;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
