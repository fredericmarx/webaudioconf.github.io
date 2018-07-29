import React from 'react';

export default function Program() {
  return (
    <div className="program">
      <h2>Program</h2>
      {renderProgramTrack('Papers', program.papers)}
      {renderProgramTrack('Talks', program.talks)}
      {renderProgramTrack('Performances', program.performances)}
      {renderProgramTrack('Demos', program.demos)}
      {renderProgramTrack('Installations', program.installations)}
      {renderProgramTrack('Posters', program.posters)}
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
    { authors: "Tate Carson", title: "A more perfect union" },
    { authors: "Max Horwich", title: "33 Null & Automatic Writing" }
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
