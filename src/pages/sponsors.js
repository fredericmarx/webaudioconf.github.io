import React from 'react';
import Sponsor from '../components/sponsor';

import './sponsors.css';
import abletonLogo from '../sponsors/ableton.svg';
import ampedStudioLogo from '../sponsors/ampedstudio.png';
import mozillaLogo from '../sponsors/mozilla.svg';

const sponsors = {
  banquet: {
    link: 'https://novationmusic.com',
    name: 'Novation',
    image: {
      src: ampedStudioLogo,
      alt: 'Novation logo'
    }
  },
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
  },
  bronze: {
    link: "https://mozilla.com",
    image: {
      src: mozillaLogo,
      alt: 'Mozilla logo',
      className: 'sponsors__mozilla'
    }
  }
};

export default function Sponsors() {
  return (
    <div className="sponsors">
      <h1>Sponsors</h1>

      <h2>Banquet sponsor</h2>
      <div className="sponsors__list">
        <Sponsor {...sponsors.banquet} type="banquet" />
      </div>

      <h3>Silver sponsor</h3>
      <div className="sponsors__list">
        <Sponsor {...sponsors.silver} type="silver" />
      </div>

      <h3>Diversity sponsor</h3>
      <div className="sponsors__list">
        <Sponsor {...sponsors.diversity} type="diversity" />
      </div>

      <h3>Bronze sponsor</h3>
      <Sponsor {...sponsors.bronze} type="bronze" />

    </div>
  )
}
