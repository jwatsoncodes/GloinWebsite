// AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AboutPage.css'; // Import the CSS file

// Define your AboutPage component
function AboutPage() {
  return (
    <div>
      {/* Image */}
      <img src="https://images.squarespace-cdn.com/content/v1/5b326c5bb40b9df04392b913/d2544fd0-1c7a-473a-ad29-801834dc25f0/Gloin+1+-+Credit+1upcloud+%28Alex+Carre%29.jpg?format=2500w" alt="Gloinband" className="about-image" />

      {/* Header */}
      <h2 className="about-heading">ABOUT</h2>

      {/* Paragraph */}
      <p className="about-paragraph">
        Gloin is a four-piece noise rock group from Toronto, Canada, known for their cathartic live sets and eclectic songwriting. Through bombastic rhythmic constructs, savvy arrangements and fervid melodies, their music spreads much like a tidal wave, positively and thoroughly flooding bystanding eardrums, the result of sheer entropic force harnessed through a “wall-of-sound Maelstrom” (Exclaim!) that is all at once jagged and sinuous. This sonic raz-de-marée reached new dizzying heights on debut album, We Found This, released on October 21st, 2022 via Mothland.

        For their first full-length, Gloin elected to print their waves at Soleil Sound and Palace Recording, working alongside up-and-coming studio wizard Dylan Frankland of Tallies, later turning to Canadian music visionary Graham Walsh (Holy Fuck, METZ, Alvvays, etc.) for the mix. Mastering duties were the affair of Gavin Gardiner at All Day Coconut. Firmly entrenched within Toronto’s effervescent alternative music scene, both the process and the result speak volumes as to the city’s knack for bringing innovative leftfield music to new shores. Along its deep fluid grooves and patented “noise pop” envolées, the record tackles bewilderment, dread and anger, while also overflowing with a punk-like sense of self-determination. Moreso, it celebrates the quartet’s genuine love for beautifully dissident art.

        Formed in 2018 by John Watson (Guitar, Vocals), Vic Byers (Bass, Vocals), Simon Kou (Drums) and Richard Garnham (Synthesizers), Gloin was at the onset a means to convey their shared passion for engaging and visceral live performance. After honing their craft amidst the underground scene, the longtime friends recorded and released Soft Monster, a debut EP that paved the way for invitations to music festivals like SXSW, Sled Island and New Colossus, opening slots for international acts such as The Brian Jonestown Massacre, A Place To Bury Strangers, Moon Duo and Bodega, and a handful of North American tours. Through and through, the energetic outfit has put precedence on delivering an unforgettable live experience, rife with improvisation and experimentation, the musicians always trusting their instincts that louder is certainly always better.

        Following a slew of dates as the main support for Snapped Ankles, Gloin are back with We Found This (October 21st, 2022 via Mothland). Described by the band as “Talking Heads and Black Flag joining up to write an aggressive video game soundtrack”, this clever rawkus of a debut album is highly recommended for fans of Sonic Youth, Pixies and Iceage
      </p>

      {/* Back button */}
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default AboutPage;
