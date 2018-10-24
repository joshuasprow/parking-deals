import React from 'react';
import Meta from '../components/meta';
import { withRouter } from 'next/router';

class Confirm extends React.PureComponent {
  render() {
    return <Meta>confirm</Meta>;
  }
}

export default withRouter(Confirm);
