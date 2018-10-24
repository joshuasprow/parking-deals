import React from 'react';
import Meta from '../components/meta';
import { withRouter } from 'next/router';
import Row from '../components/row';

class Confirm extends React.PureComponent {
  render() {
    return (
      <Meta>
        <p>
          You have earned <strong>$5 off parking!</strong>
        </p>
        <p>Would you like to redeem your discount now?</p>
        <Row>
          <button>Yes</button>
          <span> &nbsp; </span>
          <button>No</button>
        </Row>

        <Row>
          Total points earned
          <strong>680</strong>
        </Row>

        <Row>
          Points to earn Diamond status
          <strong>70</strong>
          <p>
            <em>
              (Diamond status memebers receive an exclusive earn 10% off Parking
              for the remainder of the year!)
            </em>
          </p>
        </Row>
      </Meta>
    );
  }
}

export default withRouter(Confirm);
