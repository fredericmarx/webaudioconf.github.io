import React from 'react';
import ExternalLink from '../components/link';
import { withPrefix } from 'gatsby-link'
import './info.css';

const infoItems = [
  {
    id: "conference-venue",
    title: 'Conference venue',
    content:
      <div>
        <p>
          The conference is taking place at the TU Berlin and you can reach it easily by public transport.
          Registrations are handled at the <ExternalLink href="https://www.google.com/maps/place/Hybrid+Lab/@52.5145607,13.3252937,19z/data=!4m8!1m2!3m1!2sHybrid+Lab!3m4!1s0x47a851033f0c3b8d:0xe62b282725f37e3c!8m2!3d52.5146478!4d13.3253995">Hybrid Lab</ExternalLink> in the middle of the campus.
          Registrations start every day from 8am.
        </p>
        <p>
          The closest train (S-Bahn) station is <strong>"S Tiergarten"</strong> (serviced by S3, S5, S75, S9). From there, exit the station from the southernmost exit and cross a street called Bachstrasse right in front of you. Continue walking along <strong>"Straße des 17. Juni"</strong> for around 800m and turn to your right onto a path leading between two TU buildings (which is on your right hand side). Follow this path north until you see WAC signs and then turn left to reach the <strong>Hybrid Lab</strong> (red marker).
        </p>
        <InfoImage
          src={withPrefix('/info/directions-tiergarten.jpg')}
          alt="Directions from S Tiergarten to the conference venue"
        />
        <p>
          The closest subway station is <strong>"U Ernst Reuter Platz"</strong> (serviced by the U2). From there, exit the station through the exit on the side directed to Ruhleben. At the roundabout follow the eastern most exit along the <strong>"Straße des 17. Juni"</strong> for 250m and then cross the street and follow a path leading between two TU buildings on your left hand side. Follow this path north until you see WAC signs and then turn left to reach the <strong>Hybrid Lab</strong> (red marker).
        </p>
        <InfoImage
          src={withPrefix('/info/directions-ernst.jpg')}
          alt="Directions from U Ernst-Reuter-Platz to the conference venue"
        />
      </div>
  },
  {
    id: "registration",
    title: "Registration",
    content:
      <p>You don't need to bring a printed ticket to the registration. A digital copy of your ticket and an ID are sufficient.</p>
  },
  {
    id: "vouchers",
    title: "Vouchers",
    content:
      <div>
        <p>You will get two vouchers for the <a href="#lunch">lunch</a> at the TU Mensa which include a starter, main + 2 side dishes, dessert and a non-alcoholic beverage. <emph>(voucher is not available for ticket level: "Free attendance for TU Berlin students")</emph></p>
        <p>You will get an additional voucher for the <a href="#dinner">dinner</a> at BRLO Brwhouse which includes the a welcome drink + snack and a 4-course meal. <emph>(voucher is not available for ticket levels: "Day ticket, Only conference (late bird), Press, Free attendance for TU Berlin students")</emph></p>
      </div>
  },
  {
    id: "lunch",
    title: "Lunch",
    content:
      <p>We will have lunch together on the first two days at the <ExternalLink href="https://goo.gl/maps/PK8zi41DgrK2">TU Mensa</ExternalLink> from roughly 12:30 each day. At the end of the first block of talks we will walk there together. Make sure to bring your voucher! There is no provided lunch on the third day of the conference.</p>
  },
  {
    id: "concert",
    title: "Concert",
    content:
      <div>
        <p>
          The concert is taking place in the basement of <ExternalLink href="https://www.google.com/maps/place/52%C2%B032'11.9%22N+13%C2%B023'42.2%22E/@52.536626,13.3945158,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d52.5366255!4d13.395063">Factory Berlin</ExternalLink> in the SoundCloud HQ. The closest station is <strong>"U Bernauer Str"</strong> (serviced by U8 and M10). From there, walk south on <strong>Brunnenstr.</strong> until you can turn right into <strong>Rheinsberger Str.</strong>. Follow that street until you see WAC signs. It's a side entry of the Factory that leads to their event basement.
        </p>
        <p>
          Doors open at 19:30 and the last admission is 20:00.
        </p>
        <emph>
          Please also make sure that your phone is fully charged as some of the performances will include particapatory elements.
        </emph>
        <InfoImage
          src={withPrefix('/info/directions-bernauer.jpg')}
          alt="Directions from U Bernauer Str to the concert"
        />
      </div>
  },
  {
    id: "dinner",
    title: "Dinner",
    content:
      <div>
        <p>
          The dinner this year is at <ExternalLink href="https://goo.gl/maps/DcaC59cZbnu">BRLO Brwhouse</ExternalLink> which is located right next to <strong>"U Gleisdreieck"</strong> (serviced by U1, U2 and U3). From the station, exit towards <strong>Gleisdreieck Park</strong> and you will find BRLO as the first building right after the entrance at your left hand side.
        </p>
        <p>
          Doors open from 19:00 with a welcome drink + snacks. Please don't arrive later than 19:30.
        </p>
        <emph>
          Please make sure to bring your name tag and dinner voucher that you get at the registration and check that your ticket includes the dinner.
        </emph>
        <emph>
          &nbsp;Please also make sure that your phone is fully charged as the dinner will include a distributed audio performance.
        </emph>
        <InfoImage
          src={withPrefix('/info/directions-gleisdreieck.jpg')}
          alt="Directions from U Gleisdreieck to the dinner venue"
        />
      </div>
  },
  {
    id: "slack",
    title: "Slack",
    content:
      <p>
        We are using the Web Audio Slack community during the conference for questions after the talks and general discussions about all things Web Audio. Make sure to join the slack here: <ExternalLink href="web-audio-slackin.herokuapp.com">web-audio-slackin.herokuapp.com</ExternalLink> and then join us in <strong>#wac2018</strong>.
      </p>
  },
  {
    id: "twitter",
    title: "Twitter",
    content:
      <p>
        We will be tweeting from <ExternalLink href="https://twitter.com/webaudioconf">@webaudioconf</ExternalLink> with the hash tag <strong>#wac2018</strong>.
      </p>
  },
  {
    id: "map",
    title: "Map",
    content:
      <p>You can find all conference-related locations on this map: <ExternalLink href="https://drive.google.com/open?id=1nS-IzqX7Ljb_MXgQxmH293YfaBC85iLy">https://drive.google.com/open?id=1nS-IzqX7Ljb_MXgQxmH293YfaBC85iLy</ExternalLink></p>
  }
]

const Info = () =>
  <div>
    <h1>Information</h1>
    <ul>
      {infoItems.map(({ id, title }) =>
        <li key={id}>
          <a href={`#${id}`}>{title}</a>
        </li>
      )}
    </ul>
    {infoItems.map(({ id, title, content }) =>
      <div key={`content-${id}`}>
        <h2>
          <a name={id} className="info__anchor">{title}</a>
        </h2>
        {content}
      </div>
    )}
  </div>

export default Info;

function InfoImage({ src, alt }) {
  return (
    <a href={src}>
      <img src={src} alt={alt} className="info__image" />
    </a>
  )
}
