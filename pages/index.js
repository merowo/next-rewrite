import Head from 'next/head';
import Header from './Header';
import FullDescription from './FullDescription';
import Skills from './Skills';
import FindMe from './FindMe';
import NotableStuff from './NotableStuff';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>mstrv - portfolio</title>
      </Head>
      <div className="wrapper">
        <div className="content max-w-4xl mx-auto py-8 px-4">
          <Header />
          <FullDescription />
          <NotableStuff />
          <Skills />
          <FindMe />
        </div>
      </div>
    </div>
  );
}
