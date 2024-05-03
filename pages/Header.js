import { useEffect } from 'react';

const names = ['Mero', 'mstrv', '4D 65 72 6F', 'merowo', 'mewo'];
let currentIndex = 0;

export default function Header() {
  useEffect(() => {
    const textElement = document.getElementById('name-placeholder');

    const animateText = () => {
      const currentName = names[currentIndex % names.length];
      let text = '';

      // Delete previous name letter by letter
      for (let i = 0; i < textElement.textContent.length; i++) {
        setTimeout(() => {
          text = textElement.textContent.slice(0, -1); // Remove the last character
          textElement.textContent = text;
        }, i * 150); // Delete one letter every 50 milliseconds
      }

      // Add new name letter by letter
      for (let i = 0; i < currentName.length; i++) {
        setTimeout(() => {
          text += currentName[i];
          textElement.textContent = text;
        }, (textElement.textContent.length + i) * 150); // Add one letter every 50 milliseconds after deleting previous name
      }

      currentIndex++; // Move to the next name
    };

    const interval = setInterval(animateText, 3600); // Change text every 1.3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <div className="header text-center mb-8">
        <h1 className="title text-3xl font-bold mb-2">Hi, I'm <span id="name-placeholder"></span><span className="cursor">|</span></h1>
        <p className="description text-lg text-gray-600">I'm a developer passionate about coding and building things.</p>
        {/* Image */}
        <div className="image-container">
          <img src="https://cdn.discordapp.com/avatars/852891241125117962/a95e72456472b22d3b08c502fa4bd4bb.webp?size=512&format=webp&width=0&height=128" alt="Your Image" height="200" width="200" />
        </div>
      </div>
    </div>
  );
}
