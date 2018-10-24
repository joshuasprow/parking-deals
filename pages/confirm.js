import React from 'react';
import Meta from '../components/meta';
import { withRouter } from 'next/router';
import Row from '../components/row';

class Confirm extends React.PureComponent {
  render() {
    return (
      <Meta>
        <p>
          You have <strong>70</strong> loyalty points!
        </p>
        <p>Would you like to apply these points to your parking pass?</p>
        <Row>
          <button>Yes</button>
          <button>No</button>
        </Row>
      </Meta>
    );
  }
}

export default withRouter(Confirm);
