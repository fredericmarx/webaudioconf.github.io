import React from 'react';
import Announcement from '../components/announcement';
import Link from 'gatsby-link';
import ExternalLink from '../components/link';
import { withPrefix } from 'gatsby-link';
import './sponsors.css';
import abletonLogo from '../sponsors/ableton.svg';

export default function Sponsors() {
  return (
    <div className="sponsors">
      <h1>Sponsors</h1>
      <Announcement>
        We are still looking for sponsors! If you are interested in sponsoring, have a look at our <Link to={withPrefix('/sponsoring.pdf')}>sponsoring information</Link> and contact us at <Link to="mailto:chairs@webaudioconf.com">chairs@webaudioconf.com</Link>.
      </Announcement>
      <h3>Diversity sponsor</h3>
      <ExternalLink href="https://ableton.com">
        <img className="sponsors__ableton" src={abletonLogo} alt="Ableton logo" />
      </ExternalLink>
    </div>
  )
}