import React from 'react';
import Debug from './debug';
import Head from './head';
import Hero from './hero';

const isDevEnvironment = process.env.NODE_ENV === 'development';

export default ({ children, code, mobile }) => (
  <React.Fragment>
    <main>
      <Head />
      <Hero />
      {children}
      {isDevEnvironment && <Debug code={code} mobile={mobile} />}
    </main>

    <style jsx global>{`
      body {
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
      article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        margin-bottom: 25px;
      }
      button {
        appearance: none;
        font-size: 1rem;
        transform: translateY(-1px);
        transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
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
      }
      button:active {
        background-color: #bbb;
        transform: translateY(0);
        transition: box-shadow 50ms ease-in-out, transform 50ms ease-in-out;
      }
    `}</style>
  </React.Fragment>
);
