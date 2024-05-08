import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="wrapper flex flex-col items-center justify-center min-h-screen">
      <div className="content text-center">
        <img src="https://http.cat/images/404.jpg"/>
        <Link href="/" passHref>
        <center><div className="text-blue-500 hover:underline cursor-pointer">$ cd ~</div></center>
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
