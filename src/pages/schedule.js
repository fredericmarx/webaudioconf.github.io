import React from 'react';
import './schedule.css';
const moment = require('moment-timezone');

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

export default class Schedule extends React.Component {
  state = {}

  componentDidMount() {
    this.updateHandle = setInterval(this.updateTime, 1000 * 60)
    this.updateTime();
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

            const time = "" +
              zeroPad(entryStart.hours()) + ":" + zeroPad(entryStart.minutes()) +
              " - " +
              zeroPad(entryEnd.hours()) +
              ":" + zeroPad(entryEnd.minutes())
              ;

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

  render() {
    return (
      <div className="schedule">
        <h1>Schedule</h1>
        {this.renderDay(schedule.day1)}
        {this.renderDay(schedule.day2)}
        {this.renderDay(schedule.day3)}
      </div>
    );
  }
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