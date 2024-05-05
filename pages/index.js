import Head from 'next/head';
import Header from './Header';
import FullDescription from './FullDescription';
import Skills from './Skills';
import FindMe from './FindMe';
import NotableRoles from './NotableRoles';

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
          <NotableRoles />
          <Skills />
          <FindMe />
        </div>
      </div>
    </div>
  );
}
