// NotableRoles.js
import React from 'react';

export default function NotableRoles() {
  return (
    <div className="notable-stuff mb-8">
      <h2 className="text-2xl font-bold mb-4">Notable Roles</h2>
      <ul>
      <a className='server' href="https://discord.gg/ntts"><img width="32" height="32" src="https://cdn.discordapp.com/icons/820745488231301210/3540d6e85be460d374cd3e5bb3787c36.webp?size=1024&format=webp&width=0&height=230"></img><span className="server-tooltip">Mod @ NTTS (100k)</span> </a>
      <a className='server' href="https://discord.gg/kuromicord"> <img width="32" height="32" src="https://cdn.discordapp.com/icons/1033955294193123338/a_7aac15c4ea9a299ed56c66b48c1604e5.gif?size=1024&width=0&height=230"></img><span className="server-tooltip">Mod @ Kuromicord (5k)</span> </a>
      </ul>
    </div>
  );
}
