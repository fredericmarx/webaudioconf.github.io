import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './normalize.css';
import './skeleton.css';
import './index.css';

const Header = () => (
  <div
    style={{
      background: 'white',
      borderBottom: '2px solid black',
      padding: '2em 0',
      marginBottom: '1.45rem'
    }}
  >
    <div className="container" >
      <h1 style={{ margin: 0 }}>
        Web Audio Conf | Berlin
      </h1>
      <h4 style={{ margin: 0 }}>
        19th - 21st September 2018
      </h4>
    </div>
  </div>
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
    <Header />
    <div className="container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
