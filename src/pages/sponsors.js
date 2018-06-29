import React from 'react';
import Announcement from '../components/announcement';
import Link from 'gatsby-link';
import Sponsor from '../components/sponsor';
import { withPrefix } from 'gatsby-link';
import './sponsors.css';
import abletonLogo from '../sponsors/ableton.svg';
import ampedStudioLogo from '../sponsors/ampedstudio.png';

const sponsors = {
  silver: {
    link: 'https://ampedstudio.com',
    name: 'Amped Studio',
    image: {
      src: ampedStudioLogo,
      alt: 'Amped Studio logo'
    }
  },
  diversity: {
    link: "https://ableton.com",
    image: {
      src: abletonLogo,
      alt: 'Ableton logo',
      className: 'sponsors__ableton'
    }
  }
};

export default function Sponsors() {
  return (
    <div className="sponsors">
      <h1>Sponsors</h1>
      <Announcement>
        If you are interested in sponsoring, have a look at our <Link to={withPrefix('/sponsoring.pdf')}>sponsoring information</Link> and contact us at <Link to="mailto:chairs@webaudioconf.com">chairs@webaudioconf.com</Link>.
      </Announcement>

      <h3>Silver sponsor</h3>
      <div className="sponsors__list">
        <Sponsor {...sponsors.silver} type="silver" />
      </div>

      <h4>Diversity sponsor</h4>
      <Sponsor {...sponsors.diversity} type="diversity" />

    </div>
  )
}
