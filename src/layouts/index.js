import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './normalize.css';
import './skeleton.css';
import './index.css';

const Header = () => (
  <section className="header">
    <span className="header__title">Web Audio Conf</span>
    <ul className="header__navigation">
      <li className="header__navigationItem">
        <a href="#" className="header__navigationLink m-active">Home</a>
      </li>
      <li className="header__navigationItem">
        <a href="#" className="header__navigationLink">Tickets</a>
      </li>
      <li className="header__navigationItem">
        <a href="#" className="header__navigationLink">Speakers</a>
      </li>
      <li className="header__navigationItem">
        <a href="#" className="header__navigationLink">Schedule</a>
      </li>
      <li className="header__navigationItem">
        <a href="#" className="header__navigationLink">Venue</a>
      </li>
    </ul>
  </section>
);

const HeaderSplash = () => (
  <section className="header__splash">
    <h1 className="header__headline">
      Web Audio Conf | Berlin
    </h1>
    <h4 className="header__headline">
      19th - 21st September 2018
    </h4>
  </section>
)

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
      <HeaderSplash />
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
