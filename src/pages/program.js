import React from 'react';
import acceptedSubmissions from '../data/accepted-submissions.json';

export default function Program() {
  return (
    <div className="program">
      <h2>Program</h2>
      {renderProgramTrack('Papers', acceptedSubmissions.papers)}
      {renderProgramTrack('Talks', acceptedSubmissions.talks)}
      {renderProgramTrack('Performances', acceptedSubmissions.performances)}
      {renderProgramTrack('Demos', acceptedSubmissions.demos)}
      {renderProgramTrack('Installations', acceptedSubmissions.installations)}
      {renderProgramTrack('Posters', acceptedSubmissions.posters)}
    </div>
  );
}

function renderProgramTrack(track, submissions) {
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
