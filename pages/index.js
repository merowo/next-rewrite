import Head from 'next/head';
import Header from './Header';
import FullDescription from './FullDescription';
import Skills from './Skills';
import FindMe from './FindMe';
import NotableRoles from './NotableRoles';
import Verification from './verification';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>mstrv - happy pride month!</title>
        <meta name="description" content="a silly site :3" />
        <meta name="author" content="mstrv" />
      </Head>
      <div className="wrapper">
        <div className="content max-w-4xl mx-auto py-8 px-4">
          <Header />
          <FullDescription />
          <NotableRoles />
          <Skills />
          <FindMe />
          <Verification />
          <Footer />
          
        </div>
      </div>
    </div>
  );
}