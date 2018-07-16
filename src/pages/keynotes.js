import React from 'react';
import Person from '../components/person';
import Twitter from '../components/twitter';
import Website from '../components/website';

const Keynotes = () => (
  <div className="keynotes">
    <h1>Keynotes</h1>
    <Person
      givenName='Ruth'
      familyName='John'
      imagePath='keynotes/ruth.jpg'
    >
      <p>Ruth is a web technologist and Google Developer Expert. She likes to educate people about new web technologies and inspire them to try them, coming up with exciting and engaging ways to use them. She’s a founding member of <span style={{ whiteSpace: 'nowrap' }}>{'{'} Live: JS {'}'}</span>, a collective of audio and visual artists that solely rely on JavaScript to create their performances. Her favourite things include hacking with hardware, evangelising about Web Audio and MIDI and taking her award nominated, hand coded, audio/visual software to the streets.</p>
      <p><Twitter account='Rumyra' /></p>
    </Person>
    <Person
      givenName='Chris'
      familyName='Rogers'
      imagePath='keynotes/chris.jpg'
    >
      <p>Chris Rogers is a software architect, specializing in audio production tools and music applications. Previously he worked at Google, where he developed the Web Audio API and other advanced web platform technologies. At Apple he was a principal designer of the Audio Units plugin architecture, and developed many of the ones shipping on Mac OS X and iOS, including the AUMatrixReverb, and the AUTimePitch time-stretching algorithm. He's also worked for Macromedia, Motorola, Wolfram Research, and IRCAM where he worked on SVP and developed the original AudioSculpt application.</p>
    </Person>
    <Person
      givenName='Paul'
      familyName='Adenot'
      imagePath='keynotes/paul.jpg'
    >
      <p>Paul Adenot is a platform engineer at Mozilla, working on the Firefox web browser. He is involved in Firefox Web Audio implementation, as well as the system audio code on all platforms, and occasionally helps on WebRTC. He also co-edits the Web Audio API specification at the W3C, and dabbles in music production.</p>
      <Website url='https://paul.cx/' />
    </Person>
  </div>
)

export default Keynotes;
