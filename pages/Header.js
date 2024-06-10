import React, { useEffect, useState } from 'react';

const names = ['Mero', 'mstrv', 'merowo', "Mae"];
let currentIndex = 0;

export default function Header() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const textElement = document.getElementById('name');

    const animateText = () => {
      const currentName = names[currentIndex % names.length];
      let text = '';

      // Delete previous name letter by letter
      for (let i = 0; i < textElement.textContent.length; i++) {
        setTimeout(() => {
          text = textElement.textContent.slice(0, -1); // Remove the last character
          textElement.textContent = text;
        }, i * 150); // Delete one letter every 150 milliseconds
      }

      // Add new name letter by letter
      for (let i = 0; i < currentName.length; i++) {
        setTimeout(() => {
          text += currentName[i];
          setDisplayedText(text);
        }, (textElement.textContent.length + i) * 150); // Add one letter every 150 milliseconds after deleting previous name
      }

      currentIndex++; // Move to the next name
    };

    const interval = setInterval(animateText, 3600); // Change name every 3.6 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const prideElement = document.getElementById('pride');

    const message = "Happy Pride Month!";
    let coloredText = '';

    // Define pride flag colors with a softer outline
    const colors = ['#FF3E75', '#FFC751', '#FFF882', '#4ADEAB', '#00A4FF', '#E835FF'];
    const outline = 'text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5), 1px -1px 2px rgba(0, 0, 0, 0.5), -1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5);';

    // Display message character by character with colors and softer outline
    for (let i = 0; i < message.length; i++) {
      const color = colors[i % colors.length];
      setTimeout(() => {
        coloredText += `<span style="color: ${color};${outline}">${message[i]}</span>`;
        prideElement.innerHTML = coloredText;
      }, i * 150); // Add one letter every 150 milliseconds
    }
  }, []);

  return (
    <div className="header-container">
      <div className="header text-center mb-8">
        <h1 className="title text-3xl font-bold mb-2">Hi, I'm <span id="name">{displayedText}</span><span className="cursor">|</span></h1>
        <p id="pride"></p>
        <p className="description text-lg text-gray-600">Me engineer software & me make sites</p>
        {/* Image */}
        <div className="image-container">
          <img src="https://cdn.discordapp.com/avatars/852891241125117962/37d5f894e1f4b157448c1b710ef61c26.webp?size=4096" alt="PFP" height="200" width="200" />
        </div>
      </div>
    </div>
  );
}
