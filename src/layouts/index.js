import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './normalize.css';
import './skeleton.css';
import './index.css';

class Header extends React.Component {
  state = {
    showMobileMenu: false
  };

  toggleMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  }

  render() {
    const { showMobileMenu } = this.state;
    console.log(showMobileMenu)
    return (
      <section className="header">
        {!showMobileMenu && <span className="header__title">Web Audio Conf Logo</span>}
        <button
          className="header__navigationTrigger"
          onClick={this.toggleMenu}
        >
          Menu
        </button>
        <ul className={`header__navigation ${showMobileMenu ? 'm-visible' : 'm-hidden'}`}>
          <li className="header__navigationItem">
            <Link
              to="#"
              className="header__navigationLink m-active"
              onClick={this.toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="header__navigationItem">
            <Link
              to="#"
              className="header__navigationLink"
              onClick={this.toggleMenu}
            >
              Tickets
            </Link>
          </li>
          <li className="header__navigationItem">
            <Link
              to="#"
              className="header__navigationLink"
              onClick={this.toggleMenu}
            >
              Speakers
            </Link>
          </li>
          <li className="header__navigationItem">
            <Link
              to="#"
              className="header__navigationLink"
              onClick={this.toggleMenu}
            >
              Schedule
            </Link>
          </li>
          <li className="header__navigationItem">
            <Link
              to="#"
              className="header__navigationLink"
              onClick={this.toggleMenu}
            >
              Venue
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Web Audio Conference 2018 | Berlin"
      meta={[
        { name: 'description', content: '4th annual web audio conference at the technical university of Berlin.' },
        { name: 'keywords', content: 'wac, web audio conference, conference, berlin, javascript, web, audio, web audio' },
      ]}
    />
    <div className="container">
      <Header />
    </div>
    <div className="container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
