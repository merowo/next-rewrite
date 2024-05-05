import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="wrapper flex flex-col items-center justify-center min-h-screen">
      <div className="content text-center">
      <center><h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1></center>
      <center><p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p></center>
        <Link href="/" passHref>
        <div className="text-blue-500 hover:underline cursor-pointer">$ cd ~code</div>
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
