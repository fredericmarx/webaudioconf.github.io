import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

import './call-for-submissions.css';

const CallForSubmissions = () => (
  <div className="cfs">
    <h1>Call for Submissions</h1>
    <p>The 4th Web Audio Conference (WAC 2018) will be held <strong>September 19th-21st, 2018</strong> at the Technical University and at SoundCloud in Berlin.
    <br />The WAC is an international conference dedicated to web-based audio technologies and applications. The conference addresses research, development, design, artworks, and standards concerned with emerging audio-related web technologies.</p>
    <p>The conference includes two days of talks, poster presentations, demos, installations and performances and a third day with workshops and tutorials. The attendees are invited to a banquet in the evening on the second day.</p>

    <h3>Topics</h3>
    <p>Emerging web standards such as <em>Web Audio and MIDI, WebRTC, Media Capture and Streams, Media Source Extensions, Timing Object</em> and many others open a multidisciplinary field of innovation that connects state-of-the-art audio techniques with the unique opportunities afforded by the web in areas such as social collaboration, user experience, cloud computing, and portability.</p>
    <p>The Web Audio Conference focuses on innovative work by <em>artists, researchers, and engineers in industry and academia</em>, highlighting new standards, tools, APIs, and practices as well as innovative design and applications.</p>
    <p className="cfs__scopeListIntro">The scope of the conference encompasses, but is not restricted to, the following areas:</p>
    <ul className="cfs__scopeList">
      <li>Web Audio API and other existing or emerging web standards for audio and music</li>
      <li>Tools, practices, and strategies for web-based audio application development</li>
      <li>Innovative web-based audio and music applications</li>
      <li>Web-based audio production, delivery, and experience</li>
      <li>Audio processing and rendering techniques</li>
      <li>Frameworks for audio synthesis, processing, and transformation</li>
      <li>Audio data and metadata formats and network delivery</li>
      <li>Cloud/HPC for audio production</li>
      <li>Audio visualization and/or sonification</li>
      <li>Multimedia integration</li>
      <li>Web-based live coding and collaborative environments for audio and music generation</li>
      <li>Web standards and use of standards within web-based audio projects</li>
      <li>Hardware and tangible interfaces in web applications</li>
      <li>Codecs and standards for remote audio transmission</li>
    </ul>
    <p>For any further questions please contact us via Twitter (<a href="https://twitter.com/webaudioconf">@webaudioconf</a>) or email (<a href="mailto:webaudioconf@gmail.com">webaudioconf@gmail.com</a>).</p>

    <h3>Keynote Speakers</h3>
    <p>The WAC 2018 features two keynotes by Chris Rogers (inventor of the Web Audio API) and Ruth John (web developer and creative technologist).</p>

    <h3>Submission Types</h3>
    <p>We welcome submissions in the following tracks: papers, talks, posters, demos, performances, and installations. All submissions will be single-blind peer reviewed. The conference proceedings, which will include both papers (for papers and posters) and extended abstracts (for talks, demos, performances, and artworks), will be published open-access online.</p>

    <p><strong>Paper:</strong> Submit a 4-6 page paper to be given as a plenary presentation.</p>
    <p><strong>Talk:</strong> Submit a 1-2 page abstract to be given as a plenary presentation.</p>
    <p><strong>Poster:</strong> Submit a 2-4 page paper to be presented at one of the poster sessions.</p>
    <p><strong>Demo:</strong> Submit a work to be presented at a hands-on demo session. Demo submissions should consist of a 1-2 page extended abstract including diagrams or images, and a list of technical requirements (including anything expected to be provided by the conference organizers).</p>
    <p><strong>Performance</strong> or <strong>Installation:</strong> Submit a performance or installation making creative use of web audio standards. Works can include elements such as audience device participation and collaboration, web-based interfaces, and/or other imaginative approaches to web technology. Submissions must include a title, a 1-2 page description of the work, links to audio/video/image documentation, a complete list of technical requirements (including anything expected to be provided by conference organizers), and names and one-paragraph biographies of the artists</p>

    <h3>Tutorials and Workshops</h3>
    <p>The third day of the conference (September 21st) is dedicated to tutorials and workshops. It’s the perfect time to dive deeper into topics learned at the conference with a more hands-on approach. If you are interested in running a tutorial session or a workshop at the conference, please contact the organizers directly via email (<a href="mailto:webaudioconf@gmail.com">webaudioconf@gmail.com</a>) with a short description of your tutorial or workshop.</p>

    <h3>Presenter Tickets and Travel Support</h3>
    <p>The WAC is a community-run conference with a very limited budget. Nevertheless, this year we would like to provide free tickets to speakers and artists presenting a performance or installation as well as reduced-price tickets to presenters of posters and demos (free and reduced tickets are limited to a single ticket per submission).</p>
    <p>If you are from an underrepresented group and need financial assistance to present your work at the conference, you can apply for financial aid at <a href="mailto:webaudioconf@gmail.com">webaudioconf@gmail.com</a>.</p>
    <p>Companies and institutions covering travel expenses and tickets for presenters without being involved in the presented work will be included on the sponsors page of the conference website.</p>

    <h3>Important Dates</h3>
    <ul>
      <li><strong>February 12th, 2018</strong>: submission system opens</li>
      <li><strong>April 13th, 2018</strong>: submission deadline (updates possible until April 20, 2018)</li>
      <li><strong>June 15th, 2018</strong>: author notification</li>
      <li><strong>August 17th, 2018</strong>: final versions of papers and abstracts</li>
      <li><strong>September 19th-21st, 2018</strong>: conference</li>
    </ul>

    <h3>Templates and Submission System</h3>
    <p>The submissions for WAC are handled through the EasyChair conference management system. In case you need assistance with your submission, please contact us via Twitter (<a href="https://twitter.com/webaudioconf">@webaudioconf</a>) or email (<a href="mailto:webaudioconf@gmail.com">webaudioconf@gmail.com</a>)</p>
    <p>All submissions of papers and abstracts to be published in the conference proceedings have to use the <a href={withPrefix('/wac-templates-2018-01-30.zip')}>WAC 2018 templates for Word or LaTex</a>.</p>

    <h3>Code of Conduct</h3>
    <p>By submitting your work to the WAC, you agree to abide by our code of conduct that can be found on <a href="http://berlincodeofconduct.org">berlincodeofconduct.org</a>. Violations against the code of conduct will result in exclusion from the conference.</p>

    <p>Best wishes,<br />The WAC 2018 Committee</p>
  </div>
)

export default CallForSubmissions;