"use client";

import IntroSection from './_components/intro-section';
import AboutSection from './_components/about-section';
import OpenCode from './_components/opencode-section';
import FaqSection from './_components/faq-section';
import PostMyCode from './_components/postmycode';
import { Footer } from './_components/footer';




const Home: React.FC = () => {


  return (
    <main>
      <IntroSection />
      <AboutSection />
      <OpenCode />
      <PostMyCode />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Home;
