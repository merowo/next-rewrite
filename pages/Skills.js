import React from 'react';

export default function Skills() {
  return (
    <div className="notable-stuff mb-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <h3>Programming languages</h3>
      <ul>
        <a className='language' href="https://en.wikipedia.org/wiki/C%2B%2B"><img width="32" height="32" src="/img/todo-categorize-this-folder/cpp_logo.svg"></img><span className="language-tooltip">C++</span> </a>
        <a className='language' href="https://www.python.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/python.svg"></img><span className="language-tooltip">Python</span> </a>
        <a className='language' href="https://www.javascript.com/"><img width="32" height="32" src="/img/todo-categorize-this-folder/js.svg"></img><span className="language-tooltip">JavaScript</span> </a>
        <a className='language' href="https://www.rust-lang.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/rust.svg"></img><span className="language-tooltip">Rust</span> </a>
        <a className='language' href="https://en.wikipedia.org/wiki/X86_assembly_language"><img width="32" height="32" src="/img/todo-categorize-this-folder/asm.svg"></img><span className="language-tooltip">Assembly</span> </a>
        <a className='language' href="https://en.wikipedia.org/wiki/C_(programming_language)"><img width="32" height="32" src="/img/todo-categorize-this-folder/c.svg"></img><span className="language-tooltip">C</span> </a>
      </ul>

      <h3>Frameworks and Libraries</h3>
      <ul>
        <a className='language' href="https://flask.palletsprojects.com/"><img width="32" height="32" src="/img/todo-categorize-this-folder/flask.svg"></img><span className="language-tooltip">Flask</span> </a>
        <a className='language' href="https://tauri.app/"><img width="32" height="32" src="/img/todo-categorize-this-folder/tauri.svg"></img><span className="language-tooltip">Tauri</span> </a>
        <a className='language' href="https://electronjs.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/electron.svg"></img><span className="language-tooltip">Electron</span> </a>
        <a className='language' href="https://nextjs.org/"><img width="32" height="32" src="/img/todo-categorize-this-folder/nextjs.svg"></img><span className="language-tooltip">Next.JS</span> </a>
        <a className='language' href="https://discordpy.readthedocs.io/en/stable/"><img width="32" height="32" src="/img/platforms/discord.svg"></img><span className="language-tooltip">discord.py</span> </a>
        <a className='language' href="https://react.dev"><img width="32" height="32" src="/img/todo-categorize-this-folder/react.svg"></img><span className="language-tooltip">React</span> </a>
      </ul>

      <h3>Tools and Technologies</h3>
      <ul>
        <li>Hyper-V</li>
        <li>Oracle VirtualBox & VMWare Workstation</li>
        <li>VMWARE EXSI & ProxMox</li>
        <li>Docker</li>
        <li>KVM/QEMU</li>
      </ul>
      <h3>IDE'S/Editors</h3>
      <ul>
        <h4>Jetbrains</h4>
        <li>InteliJ Idea</li>
        <li>RustRover</li>
        <h4>Microsoft</h4>
        <li>Visual Studio 2019 & 2022</li>
        <li>Visual Studio Code</li>
        <h4>Misc editors</h4>
        <li>Vim/NeoVim</li>
        <li>Codium</li>
        <li>Adobe Dreamwaver</li>
        <li>NANO</li>
        <li>Sublime text</li>
       </ul>
    </div>
  );
}
