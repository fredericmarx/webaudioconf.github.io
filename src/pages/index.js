import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <p style={{ fontSize: "2.1rem" }}>WAC is an international conference dedicated to web audio technologies and applications and addresses research, development, design, and standards concerned with emerging audio-related web technologies such as Web Audio API, Web MIDI and Web RTC.<br />
    The conference welcomes web developers, music technologists, computer musicians, application designers, researchers, and people involved in web standards.</p>
    <h4>Stay In The Loop</h4>
    <div className="row">
      <div className="six columns">
        <p>We are just getting started and will announce things soon 📣. The date is set so mark it in your calendar 📅.<br />
        In the meantime please subscribe to our newsletter to receive updates, or follow us on twitter: <a href="https://twitter.com/webaudioconf" target="_blank">@webaudioconference</a></p>
      </div>
      <div className="six columns">
        <div dangerouslySetInnerHTML={{
          __html: `
          <form action="https://webaudioconf.us17.list-manage.com/subscribe/post?u=786ac969cb6e9a620eda77728&amp;id=84c4ce8f63" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
            <input type="email" name="EMAIL" value="" id="mce-EMAIL" class="u-full-width" placeholder="E-mail address" />
            <input type="submit" value="Subscribe" name="subscribe" class="button-primary" id="mc-embedded-subscribe" />
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" value="" name="b_786ac969cb6e9a620eda77728_84c4ce8f63" tabindex="-1" />
            </div>
        </form>`
        }} />
      </div>
    </div>
  </div>
)

export default IndexPage
