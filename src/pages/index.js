import React from 'react';
import Link from 'gatsby-link';
import Twitter from '../components/twitter';

import './index.css';

const IndexPage = () => (
  <div>
    <div className="index__splash">
      <h1 className="index__headline">
        Web Audio Conf | Berlin
      </h1>
      <h4 className="index__headline">
        19th - 21st September 2018
      </h4>
    </div>
    <div className="index__welcome">
      <p className="index__text">
        The Web Audio Conference is an international conference dedicated to emerging audio-related web technologies such as Web Audio API, Web MIDI and Web RTC / WebGL.
      </p>
      <p className="index__text">
        We welcome web developers, music technologists, computer musicians, application designers, researchers, and people involved in web standards.
      </p>
    </div>

    <div className="index__moreInfo">
      <h4>More info soon</h4>
      <p className="index__text">
        We are just getting started and will announce more information soon 📣.<br /> The date is set, so mark it in your calendar 📅✌️.
        <br />In the meantime, please subscribe to our newsletter to receive updates, or follow us on twitter: <Twitter />.
      </p>
    </div>

    <div className="index__newsletter">
      <div className="six columns">
        <form action="https://webaudioconf.us17.list-manage.com/subscribe/post?u=786ac969cb6e9a620eda77728&amp;id=84c4ce8f63" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
          <input type="email" name="EMAIL" id="mce-EMAIL" className="u-full-width" placeholder="E-mail address" />
          <input type="submit" value="Subscribe" name="subscribe" className="button-primary" id="mc-embedded-subscribe" />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" value="" name="b_786ac969cb6e9a620eda77728_84c4ce8f63" tabIndex="-1" />
          </div>
        </form>
      </div>
    </div>
  </div >
)

export default IndexPage
