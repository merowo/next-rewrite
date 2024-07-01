import React, { useEffect, useState } from 'react';

const names = ['Mero', 'mstrv', 'merowo', "Mae"];

export default function Header() {
  const [displayedText, setDisplayedText] = useState('');
  let currentIndex = 0;

  useEffect(() => {
    const textElement = document.getElementById('name');

    if (!textElement) return; // Check if element is not null

    const animateText = () => {
      const currentName = names[currentIndex % names.length];
      let text = textElement.textContent || '';

      // Delete previous name letter by letter
      for (let i = text.length; i >= 0; i--) {
        setTimeout(() => {
          text = textElement.textContent?.slice(0, -1) || ''; // Remove the last character safely
          if (textElement) {
            textElement.textContent = text;
          }
        }, (text.length - i) * 150); // Delete one letter every 50 milliseconds
      }

      // Add new name letter by letter
      for (let i = 0; i < currentName.length; i++) {
        setTimeout(() => {
          text += currentName[i];
          if (textElement) {
            textElement.textContent = text;
            setDisplayedText(text);
          }
        }, (text.length + i) * 150); // Add one letter every 50 milliseconds after deleting previous name
      }

      currentIndex++; // Move to the next name
    };

    const interval = setInterval(animateText, 3600); // Change name every 3.6 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <div className="header text-center mb-8">
        <h1 className="title text-3xl font-bold mb-2">
          Hi, I'm <span id="name"></span>
          <span className="cursor">|</span>
        </h1>
        <div className="flex items-center">
          <p className="description text-lg text-gray-600 mr-2">any/all, bisexual</p>
        </div>
        {/* Image */}
        <div className="image-container">
          <img src="https://cdn.discordapp.com/guilds/820745488231301210/users/852891241125117962/avatars/a_ae1406c6d256b964b747fd4115944b3f.gif?size=1024&width=0&height=320" alt="PFP" height="200" width="200" />
        </div>
      </div>
    </div>
  );
}
