import React, { useEffect, useState } from 'react';

const names = [
  'Mero',
  'mstrv',
  'merowo',
  "Mae"
];
let currentIndex = 0;

export default function Header() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const prideElement = document.getElementById('pride');
    const message = "Happy Pride Month!";
    let coloredText = '';
    const colors = [
      '#FF3E75',
      '#FFC751',
      '#FFF882',
      '#4ADEAB',
      '#00A4FF',
      '#E835FF'
    ];
    const outline = 'text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5), 1px -1px 2px rgba(0, 0, 0, 0.5), -1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5);';

    if (prideElement) {
      for (let i = 0; i < message.length; i++) {
        const color = colors[i % colors.length];
        setTimeout(() => {
          coloredText += `<span style="color: ${color};${outline}">${message[i]}</span>`;
          if (prideElement) {
            prideElement.innerHTML = coloredText;
          }
        }, i * 150);
      }
    }
  }, []);

  return (
    <div className="header-container">
      <div className="header text-center mb-8">
        <h1 className="title text-3xl font-bold mb-2">
          Hi, I'm <span id="name">{displayedText}</span>
          <span className="cursor">|</span>
        </h1>
        <p id="pride"></p>
        <div className="flex items-center">
          <p className="description text-lg text-gray-600 mr-2">any/all, bisexual</p>
        </div>

        {/* Image */}
        <div className="image-container">
          <img
            src="https://cdn.discordapp.com/avatars/852891241125117962/37d5f894e1f4b157448c1b710ef61c26.webp?size=4096"
            alt="PFP"
            height="200"
            width="200"
          />
        </div>
      </div>
    </div>
  );
}

