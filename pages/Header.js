import { useEffect } from 'react';

const names = ['Mero', 'mstrv', 'merowo', "Mae"];
let currentIndex = 0;

export default function Header() {
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
        <h1 className="title text-3xl font-bold mb-2">Hi, I'm <span id="name"></span><span className="cursor">|</span></h1>
        <p className="description text-lg text-gray-600">I'm a developer passionate about coding and building things.</p>
        {/* Image */}
        <div className="image-container">
          <img src="https://cdn.discordapp.com/avatars/852891241125117962/a_92334f4061da634704a03ff8d4596b1d.gif?size=4096" alt="PFP" height="200" width="200" />
        </div>
      </div>
    </div>
  );
}
