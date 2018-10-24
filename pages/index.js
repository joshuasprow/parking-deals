import React from 'react';
import Link from 'next/link';
import MobileInput from '../components/mobile-input';
import Meta from '../components/meta';

export const blue = 'rgb(74, 144, 226)';

class Home extends React.PureComponent {
  state = { mobile: '' };

  handleMobile = mobile => this.setState({ mobile });

  render() {
    const { mobile } = this.state;

    return (
      <Meta>
        <MobileInput mobile={mobile} onMobileChange={this.handleMobile} />

        {/* Don't worry about styling Links. They don't render. */}
        <Link href={{ pathname: '/scanner', query: { mobile } }}>
          <button disabled={mobile.length < 10}>next</button>
        </Link>
      </Meta>
    );
  }
}

export default Home;
