import React from 'react'
import PropTypes from 'prop-types'
import Link, { withPrefix } from 'gatsby-link'
import Helmet from 'react-helmet'

import './normalize.css';
import './skeleton.css';
import './skeleton-overwrite.css';
import './index.css';

const menuItems = [
  { link: '/', text: 'Home', exact: true },
  { link: '/schedule', text: 'Schedule' },
  { link: '/program', text: 'Program' },
  { link: '/speakers', text: 'Speakers' },
  { link: '/committee', text: 'Committee' },
  { link: '/sponsors', text: 'Sponsors', extraClassName: 'header__emph' }
];

class Header extends React.Component {
  state = {
    showMobileMenu: false
  };

  toggleMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  }

  hideMenu = () => {
    this.setState({
      showMobileMenu: false
    });
  }

  render() {
    const { showMobileMenu } = this.state;

    return (
      <section className="header">
        <Link to="/">
          <img src={withPrefix('/wac-logo.svg')} alt="Web Audio Conf logo" className="header__logo" />
        </Link>
        <nav>
          <button
            className="header__navigationTrigger"
            onClick={this.toggleMenu}
          >
            ☰
          </button>
          <ul
            className={`header__navigation ${showMobileMenu ? 'm-visible' : 'm-hidden'}`}
            onClick={this.hideMenu}
          >
            {menuItems.map((item) => (
              <li className="header__navigationItem" key={item.link}>
                <Link
                  to={item.link}
                  exact={item.exact}
                  className={`header__navigationLink ${item.extraClassName ? item.extraClassName : ''}`}
                  activeClassName="m-active"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
      link={[
        { rel: 'icon', href: '/favicon.ico' }
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
