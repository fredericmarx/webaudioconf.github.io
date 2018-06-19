import React from 'react';
import './schedule.css';

const schedule = {
  day1: {
    title: 'Wednesday, Sept 19th',
    entries: [
      {
        time: '08:00 - 09:00',
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        time: '09:00 - 10:00',
        title: 'Keynote',
        description: 'The opening keynote for WAC 2018'
      },
      {
        time: '10:00 - 10:30',
        title: 'Coffee & Tea break'
      },
      {
        time: '10:30 - 12:30',
        title: 'Presentations'
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch break'
      },
      {
        time: '14:00 - 16:00',
        title: 'Presentations'
      },
      {
        time: '16:00 - 18:00',
        title: 'Demos, Posters and Installations',
        description: `
          Check out a variety of demos, posters and installations in various locations on the campus.
          We will be serving refreshments and little snacks.
        `
      },
      {
        time: '20:00 - 23:00',
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
        time: '08:00 - 09:00',
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        time: '09:00 - 10:00',
        title: 'Keynote',
        description: 'The second keynote of WAC 2018'
      },
      {
        time: '10:00 - 10:30',
        title: 'Coffee & Tea break'
      },
      {
        time: '10:30 - 12:30',
        title: 'Presentations'
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch break'
      },
      {
        time: '14:00 - 16:00',
        title: 'Presentations'
      },
      {
        time: '16:00 - 18:00',
        title: 'Demos, Posters and Installations',
        description: `
          Check out a variety of demos, posters and installations in various locations on the campus.
          We will be serving refreshments and little snacks.
        `
      },
      {
        time: '20:00 - 23:00',
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
        time: '08:00 - 09:00',
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        time: '09:00 - 12:30',
        title: 'Workshops'
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch break'
      },
      {
        time: '14:00 - 18:00',
        title: 'Workshops'
      },
      {
        time: '18:00 - 18:15',
        title: 'End of the conference'
      }
    ]
  }
}

function renderDay(day) {
  return (
    <div className="schedule__day">
      <h2 className="schedule__headlineDay">{day.title}</h2>
      <div className="schedule__timeTable">
        {day.entries.map((entry) => (
          <div key={`${day.title}${entry.time}`} className="schedule__entry">
            <div className="schedule__entryTime">
              {entry.time}
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
        ))}

      </div>
    </div>
  );
}

const Schedule = () => (
  <div className="schedule">
    <h1>Schedule</h1>
    {renderDay(schedule.day1)}
    {renderDay(schedule.day2)}
    {renderDay(schedule.day3)}
  </div>
)

export default Schedule;