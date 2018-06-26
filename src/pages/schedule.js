import React from 'react';
const moment = require('moment-timezone');
import Announcement from '../components/announcement';

import './schedule.css';

export default class Schedule extends React.Component {
  state = {}

  componentDidMount() {
    this.updateHandle = setInterval(this.updateTime, 1000 * 60)
  }

  componentWillUnmount() {
    clearInterval(this.updateHandle);
  }

  updateTime = () => {
    this.setState({
      currentTime: nowInUTC()
    });
  }

  renderDay = (day) => {
    const currentTime = this.state.currentTime || nowInUTC();
    return (
      <div className="schedule__day">
        <h2 className="schedule__headlineDay">{day.title}</h2>
        <div className="schedule__timeTable">
          {day.entries.map((entry) => {
            const isCurrent = currentTime >= entry.startTime && currentTime <= entry.endTime;
            const entryStart = utcTSToBerlinTZ(entry.startTime);
            const entryEnd = utcTSToBerlinTZ(entry.endTime);

            const time = `
              ${zeroPad(entryStart.hours())}:${zeroPad(entryStart.minutes())}
               -
              ${zeroPad(entryEnd.hours())}:${zeroPad(entryEnd.minutes())}
              `;

            return (
              <div
                key={`${day.title}${time}`}
                id={`${isCurrent ? 'current' : ''}`}
                className={`schedule__entry ${isCurrent ? 'm-current' : ''}`}
              >
                <div className="schedule__entryTime">
                  {time}
                </div>
                <div className="schedule__entryInfo">
                  <div className="schedule__entryTitle">
                    {entry.title}
                    {entry.location && (
                      <span className="schedule__entryLocation">
                        (<a href={entry.location.link} target="_blank">{entry.location.name}</a>)
                      </span>
                    )}
                  </div>
                  {entry.description && (
                    <div className="schedule__entryDescription">{entry.description}</div>
                  )}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    );
  }

  renderProgramTrack(track, submissions) {
    return (
      <div className="schedule__track">
        <h3>{track}</h3>
        <table className="u-full-width">
          <tbody>
            {submissions.map((submission, i) =>
              <tr key={`submission${track}${submission.title}`} className="schedule__submission">
                <td className="schedule__submissionTitle">{submission.title}</td>
                <td className="schedule__submissionAuthor">{submission.authors}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="schedule">
        <h1>Schedule</h1>
        <Announcement>
          We are still finalizing the schedule but you can check out all accepted submissions <a href="#program">here</a>.
        </Announcement>
        {this.renderDay(schedule.day1)}
        {this.renderDay(schedule.day2)}
        {this.renderDay(schedule.day3)}
        <h2 id="program">Program</h2>
        {this.renderProgramTrack('Papers', program.papers)}
        {this.renderProgramTrack('Talks', program.talks)}
        {this.renderProgramTrack('Performances', program.performances)}
        {this.renderProgramTrack('Demos', program.demos)}
        {this.renderProgramTrack('Installations', program.installations)}
        {this.renderProgramTrack('Posters', program.posters)}
      </div>
    );
  }
}

const schedule = {
  day1: {
    title: 'Wednesday, Sept 19th',
    entries: [
      {
        startTime: Date.UTC(2018, 8, 19, 6, 0),
        endTime: Date.UTC(2018, 9, 19, 7, 0),
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        startTime: Date.UTC(2018, 8, 19, 7, 0),
        endTime: Date.UTC(2018, 8, 19, 8, 0),
        title: 'Keynote',
        description: 'The opening keynote for WAC 2018'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 8, 0),
        endTime: Date.UTC(2018, 8, 19, 8, 30),
        title: 'Coffee & Tea break'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 8, 30),
        endTime: Date.UTC(2018, 8, 19, 10, 30),
        title: 'Presentations'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 10, 30),
        endTime: Date.UTC(2018, 8, 19, 12, 0),
        title: 'Lunch break'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 12, 0),
        endTime: Date.UTC(2018, 8, 19, 14, 0),
        title: 'Presentations'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 14, 0),
        endTime: Date.UTC(2018, 8, 19, 16, 0),
        title: 'Demos, Posters and Installations',
        description: `
          Check out a variety of demos, posters and installations in various locations on the campus.
          We will be serving refreshments and little snacks.
        `
      },
      {
        startTime: Date.UTC(2018, 8, 19, 18, 0),
        endTime: Date.UTC(2018, 8, 19, 21, 0),
        title: 'Concert',
        location: {
          name: 'SoundCloud',
          link: 'https://goo.gl/maps/TgYuyZ2cKpr'
        }
      }
    ]
  },
  day2: {
    title: 'Thursday, Sept 20th',
    entries: [
      {
        startTime: Date.UTC(2018, 8, 19, 6, 0),
        endTime: Date.UTC(2018, 9, 19, 7, 0),
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        startTime: Date.UTC(2018, 8, 19, 7, 0),
        endTime: Date.UTC(2018, 8, 19, 8, 0),
        title: 'Keynote',
        description: 'The second keynote of WAC 2018'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 8, 0),
        endTime: Date.UTC(2018, 8, 19, 8, 30),
        title: 'Coffee & Tea break'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 8, 30),
        endTime: Date.UTC(2018, 8, 19, 10, 30),
        title: 'Presentations'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 10, 30),
        endTime: Date.UTC(2018, 8, 19, 12, 0),
        title: 'Lunch break'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 12, 0),
        endTime: Date.UTC(2018, 8, 19, 14, 0),
        title: 'Presentations'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 14, 0),
        endTime: Date.UTC(2018, 8, 19, 16, 0),
        title: 'Demos, Posters and Installations',
        description: `
          Check out a variety of demos, posters and installations in various locations on the campus.
          We will be serving refreshments and little snacks.
        `
      },
      {
        startTime: Date.UTC(2018, 8, 19, 18, 0),
        endTime: Date.UTC(2018, 8, 19, 21, 0),
        title: 'Dinner',
        description: 'We are preparing a very special audio-enhanced dinner together with Ben Houge and Brlo',
        location: {
          name: 'Brlo Brwhouse',
          link: 'https://goo.gl/maps/9ASZSQ6GZpw'
        }
      }
    ]
  },
  day3: {
    title: 'Friday, Sept 21st',
    entries: [
      {
        startTime: Date.UTC(2018, 8, 21, 6, 0),
        endTime: Date.UTC(2018, 8, 21, 7, 0),
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        startTime: Date.UTC(2018, 8, 21, 7, 0),
        endTime: Date.UTC(2018, 8, 21, 10, 30),
        title: 'Workshops'
      },
      {
        startTime: Date.UTC(2018, 8, 21, 10, 30),
        endTime: Date.UTC(2018, 8, 21, 12, 0),
        title: 'Lunch break'
      },
      {
        startTime: Date.UTC(2018, 8, 21, 12, 0),
        endTime: Date.UTC(2018, 8, 21, 16, 0),
        title: 'Workshops'
      },
      {
        startTime: Date.UTC(2018, 8, 21, 16, 0),
        endTime: Date.UTC(2018, 8, 21, 16, 15),
        title: 'End of the conference'
      }
    ]
  }
}

const program = {
  papers: [
    { authors: "Thomas Dodds", title: "dspNode: Real-time remote audio rendering" },
    { authors: "Oliver Larkin, Alex Harker and Jari Kleimola", title: "iPlug2: Desktop Plug-in Framework Meets Web Audio Modules" },
    { authors: "Michel Buffa, Jerome Lebrun, Jari Kleimola, Oliver Larkin, Stéphane Letz and Guillaume Pellerin", title: "WAP: Ideas for a Web Audio Plug-in Standard" },
    { authors: "Steven Yi, Victor Lazzarini and Edward Costello", title: "WAAW Csound" },
    { authors: "Jakub Fiala", title: "r-audio: Declarative, reactive and flexible Web Audio graphs in React" },
    { authors: "Ariane Stolfi, Alessia Milo, Miguel Ceriani and Mathieu Barthet", title: "Participatory musical improvisations with Playsound.space" },
    { authors: "Avneesh Sarwate, Takahiko Tsuchiya and Jason Freeman", title: "Collaborative Coding with Music: Two Case Studies with EarSketch" },
    { authors: "Charles Roberts", title: "Metaprogramming Strategies for AudioWorklets" },
    { authors: "Oliver Major", title: "DSP2JS - A C++ framework for the development of in-browser DSPs" },
    { authors: "Gerard Roma, Anna Xambó, Owen Green and Pierre Alexandre Tremblay", title: "A Javascript Library for Flexible Visualization of Audio Descriptors" },
    { authors: "Jari Kleimola and Owen Campbell", title: "native Web Audio API plugins" },
    { authors: "Johan Pauwels, Anna Xambó, Gerard Roma, Mathieu Barthet and György Fazekas", title: "Exploring Real-time Visualisations to Support Chord Learning with a Large Music Collection" },
  ],
  talks: [
    { authors: "Lisa Passing", title: "Generative music, playful visualizations and where to find them" },
    { authors: "Mathieu Henri", title: "AMBIENT HTML5: Music for tiny airports in 256 bytes" },
    { authors: "Nicholas Violi", title: "Auralization: Ambient aural display of real-time data" },
    { authors: "Vladimir Smirnov", title: "KiteAudio: Building a Web Audio Module and UI Library" },
    { authors: "Eduardo Shiota Yasuda", title: "RetroJS: Writing and playing 8-bit songs using JSON and the Web Audio API" },
    { authors: "Hilke Ros", title: "From artist to software developer and back. A celloist’s perspective on Web Audio" },
    { authors: "Ben Langham", title: "Web Audio meets the London Underground - a creative journey" },
    { authors: "Tim Pulver and Thomas Kombüchen", title: "cables—a web based visual programming language for WebGL and Web Audio" },
    { authors: "Naomi Aro", title: "Orchestrate Your Web!" },
    { authors: "Boris Smus", title: "Audio features for web-based ML, and simple in-browser voice command recognition" },
    { authors: "Tero Parviainen", title: "Musical Deep Neural Networks in the Browser" },
    { authors: "Walker Henderson", title: "Timing Is Everything: Latency and Performance" },
    { authors: "Christoph Guttandin", title: "The Timing Object - A Pacemaker for the Web" }
  ],
  demos: [
    { authors: "Karim Ratib", title: "Music software localization for cultural preservation" },
    { authors: "Jason Gwartz and Nicolas Gold", title: "Loop-Based Graphical Live-Coded Music in the Browser" },
    { authors: "Martin Guder", title: "The sound of Bitcoin - Sound synthesis with cryptocurrency trade data" },
    { authors: "Tim Pulver", title: "Fugue Step—a multi playhead sequencer" },
    { authors: "Anthony T. Marasco and Jesse Allison", title: "SoundSling: A Multi-Platform Tool for Using Motion Data to Pan Audio Across a Mobile Device Speaker Array" },
    { authors: "Boris Smus", title: "DSP Filter playground" },
    { authors: "Jan Misker and Jacques van de Veerdonk", title: "Audio Pipes: Connecting Web Audio Between Any Page" },
    { authors: "Ariane Stolfi, Alessia Milo, Miguel Ceriani and Mathieu Barthet", title: "Playsound.space Demo" },
    { authors: "Tony Wallace", title: "Live Coding Drum Machine" },
    { authors: "Michel Buffa and Jerome Lebrun", title: "Guitarists will be happy: guitar tube amp simulators and FX pedal in a virtual pedal board, and more!" },
    { authors: "Oscar Mayor, Jordi Janer, Hector Parra and Álvaro Sarasúa", title: "Voiceful: Web tools for voice analysis, transformation and synthesis." },
    { authors: "Jesse Allison and Tate Carson", title: "Utilizing NexusHUB and Docker for Distributed Performance" },
    { authors: "Joe Todd, Adib Mehrabi and Daniel Jones", title: "Transmitting Data Over The Air Using the Web Audio API" },
    { authors: "Francesco Cretti, Luca Morino, Marco Liuni, Stefano Gervasoni, Andrea Agostini and Antonio Servetti", title: "Web Wall Whispers" },
  ],
  performances: [
    { authors: "Jasmine Guffond", title: "Listening Back - The Web Never Forgets" },
    { authors: "Andrey Bundin", title: "Concert for Smartphones and Orchestra" },
    { authors: "Ariane Stolfi, Alessia Milo and Mathieu Barthet", title: "Tender Buttons | Sound | Space" },
    { authors: "Anna Xambó", title: "Imaginary Berlin" },
    { authors: "Charles Roberts", title: "Improvisation" },
    { authors: "Gerard Roma", title: "No merge conflicts" }
  ],
  installations: [
    { authors: "Arthur Carabott and Jack Armitage", title: "Web Audio And Paper Interfaces" },
    { authors: "Patrick Schmid, Kathrin Fuhrer, Johannes Schiel, Lukas Scheuerle, Sandra Kleß and Norbert Schnell", title: "Kom[bp]o" },
    { authors: "Tate Carson", title: "A more perfect union: Composition with audience-controlled smartphone speaker array and evolutionary computer music" },
    { authors: "Max Horwich", title: "33 Null (2018) & Automatic Writing (2018)" },
    { authors: "Eliza Struthers-Jobin", title: "Seeing Sound - How Do You Listen" }
  ],
  posters: [
    { authors: "Chase Mitchusson", title: "Lost In Space" },
    { authors: "Tate Carson", title: "A more perfect union: Composition with audience-controlled smartphone speaker array and evolutionary computer music" },
    { authors: "Nuno Hespanhol, Óscar Rodrigues and José Alberto Gomes", title: "0+1=SOM:  Bringing Computing Closer to Children Through Music" },
    { authors: "Anthony T. Marasco and Jesse Allison", title: "SoundSling: A Multi-Platform Tool for Using Motion Data to Pan Audio Across a Mobile Device Speaker Array" },
    { authors: "Michel Buffa and Jerome Lebrun", title: "WebAudio Virtual Tube Guitar Amps  and  Pedal Board Design" },
    { authors: "Lawrence Fyfe, Olivier Gladin, Cédric Fleury and Michel Beaudouin-Lafon", title: "Combining Web Audio Streaming, Motion Capture, and Binaural Audio in a Telepresence System" },
    { authors: "Johan Pauwels and Mark Sandler", title: "pywebaudioplayer: Bridging the gap between audio processing code and attractive visualisations based on web technology" },
    { authors: "Ben Houge", title: "Cena concertante alla maniera di Vivaldi:  Considering the Restaurant as a Musical Interface" },
    { authors: "Xavier Favory and Xavier Serra", title: "Multi Web Audio Sequencer: Collaborative Music Making" },
    { authors: "Benjamin Matuszewski, Joseph Larralde and Frederic Bevilacqua", title: "Designing Movement Driven Audio Applications Using a Web-Based Interactive Machine Learning Toolkit" },
    { authors: "Christian Baumann, Jan-Torsten Milde and Johanna Friederike Baarlink", title: "Body Movement Sonification using the Web Audio API" },
    { authors: "Florian Thalmann, Lucas Thompson and Mark B. Sandler", title: "A User-Adaptive Automated DJ Web App with Object-Based Audio and Crowd-Sourced Decision Trees" },
  ]
}

function zeroPad(number) {
  return number <= 9 ? `0${number}` : `${number}`;
}

function nowInUTC() {
  const now = new Date();

  return Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes()
  );
}

function utcTSToBerlinTZ(utcTimestamp) {
  return moment.tz(utcTimestamp, 'Europe/Berlin');
}