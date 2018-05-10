import React from 'react';
import Person from '../components/person';
import GitHub from '../components/github';
import Website from '../components/website';
import LinkedIn from '../components/linked-in';
import Twitter from '../components/twitter';
import Icon from '../components/icon';

const Committee = () => (
  <div className="committee">
    <h1>Committee</h1>
    <Person
      givenName='Jan'
      familyName='Monschke'
      imagePath='committee/jan.jpg'
      >
      <p>TODO</p>
    </Person>
    <Person
      givenName='Christoph'
      familyName='Guttandin'
      imagePath='committee/christoph.jpg'
      >
      <p>TODO</p>
    </Person>
    <Person
      givenName='Frederic'
      familyName='Marx'
      imagePath='committee/frederic.jpg'
      >
      <p>TODO</p>
    </Person>
    <Person
      givenName='Stefan'
      familyName='Weinzierl'
      imagePath='committee/stefan.jpg'
      >
      <p>Stefan Weinzierl is head of the Audio Communication Group at the Technische Universität Berlin. His activities in research are focused on audio technology, virtual acoustics, room acoustics, and musical acoustics.</p>
      <p>He is coordinator of a master program in Audio Communication and Technology at TU Berlin.</p>
      <p>With a diploma in physics and sound engineering, he received his Ph.D. in Musical Acoustics from TU Berlin. He is currently coordinating research consortia in the field of virtual acoustics (SEACEN, DFG) and music information retrieval (ABC_DJ, H2020).</p>
      <p><Website url='http://www.ak.tu-berlin.de/menue/team/leitung/prof_dr_stefan_weinzierl/' /></p>
    </Person>
    <Person
      givenName='Athanasios'
      familyName='Lykartsis'
      imagePath='committee/athanasios.jpg'
      >
      <p>Athanasios Lykartsis received his Diploma in Electrical and Computer Engineering at the Aristoteles University of Thessaloniki in 2009. He then completed a Master's degree in Audio Technology at the TU Berlin in 2014, with further specialization in audio signal processing.</p>
      <p>Now he is a research associate and PhD candidate at the Audio Communication Group, as well as a freelance consultant for audio-based projects.</p>
      <p>Special interests include rhythm feature design for as language identification and machine learning for audio data analysis.</p>
      <p>
        <LinkedIn account='athanasios-lykartsis-15a888a'/><br />
        <Website url='http://www.ak.tu-berlin.de/menue/team/wissenschaftliche_mitarbeiter/athanasios_lykartsis/parameter/en/' />
      </p>
    </Person>
    <Person
      givenName='Norbert'
      familyName='Schnell'
      imagePath='committee/norbert.jpg'
      >
      <p>Norbert Schnell is professor of Music Design at the Digital Media Faculty at the Furtwangen University. He studied Music Technology in Graz before entering the Ircam in Paris as researcher and developer in the field of interactive digital audio processing and interaction design.</p>
      <p>He chaired the 6th International Conference on New Interfaces for Musical Expression (NIME 2006) and the first Web Audio Conference (WAC 2015).</p>
      <p>In 2013 he obtained his doctorate on key aspects of sound and interaction design with recorded sounds.</p>
      <p>Over the past years, he coordinated the CoSiMa project exploring collective interactions in the context of participative art and music projects, collaborative digital media, and music pedagogy based on mobile and web technologies.</p>
    </Person>
    <Person
      givenName='Tom'
      familyName='Jenkinson'
      imagePath='committee/tom.jpg'
      >
      <p>Tom is a web streaming engineer at SoundCloud. He works on the playback library for the web applications, which uses <code>{"<audio />"}</code>, Media Source Extensions, and WebAudio.</p>
      <p>He previously studied software engineering at Lancaster University in the UK, and was an active member of the student TV station.</p>
      <p>In his free time he enjoys playing trumpet and drums in a few bands in Berlin, and contributes to the open source HLS client HLS.JS.</p>
      <p><GitHub account='tjenkinson' /></p>
    </Person>
    <Person
      givenName='Jack'
      familyName='Schaedler'
      imagePath='committee/jack.jpg'
      >
      <p>Jack Schaedler is a software developer at Ableton. He has worked on Ableton Live, and most recently, Ableton's microsite for learning music fundamentals.</p>
      <p>His personal work explores the use of interactive media to explain difficult concepts like Fourier analysis, handwriting recognition, and music theory.</p>
      <p>He holds a master's degree in Digital Music Processing from the Centre for Digital Music at Queen Mary, University of London.</p>
      <p>
        <Website url='https://jackschaedler.github.io/' /><br />
        <GitHub account='jackschaedler' /><br />
        <Twitter account='jackschaedler' />
      </p>
    </Person>
  </div>
)

export default Committee;
