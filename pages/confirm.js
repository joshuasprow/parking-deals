import React from 'react';
import Meta from '../components/meta';
import { withRouter } from 'next/router';
import Row from '../components/row';

class Confirm extends React.PureComponent {
  render() {
    return (
      <Meta>
        <article>
          <p>
            You have earned <strong>$5 off parking!</strong>
          </p>
          <p>Would you like to redeem your discount now?</p>
          <Row>
            <button>Yes</button>
            <button>No</button>
          </Row>
        </article>
        <div>
          <p>
            Total points earned <strong>680</strong>
          </p>

          <p>
            Points to earn Diamond status <strong>70</strong>
          </p>

          <em>
            (Diamond status members receive an exclusive 10% off Parking for the
            remainder of the year!)
          </em>
        </div>

        <style jsx>
          {`
            button { 
              margin 5px;
            }
            div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            em {
              width: 18rem;
            }
          `}
        </style>
      </Meta>
    );
  }
}

export default withRouter(Confirm);
