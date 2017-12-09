import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <ul>
      <li>Testing lists</li>
    </ul>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div dangerouslySetInnerHTML={{
      __html: `
      <form action="https://webaudioconf.us17.list-manage.com/subscribe/post?u=786ac969cb6e9a620eda77728&amp;id=84c4ce8f63" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
        <label for="mce-EMAIL">Email Address</label>
        <input type="email" name="EMAIL" value="" id="mce-EMAIL" />
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" value="" name="b_786ac969cb6e9a620eda77728_84c4ce8f63" tabindex="-1" />
        </div>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
      </form>
      `
    }} />

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
