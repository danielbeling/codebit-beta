"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import { ModeToggle } from './mode-toggle';
import LogoDark from '../../../public/images/logo-light.png';
import LogoLight from '../../../public/images/logo-dark.png';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import NavBar from './NavBar';

function IntroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures that the component is mounted before checking the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <NavBar />
      <section id="intro" className='space-y-6 py-8 md:py-12 lg:py-32 relative mb-[50px]'>
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4 mt-[4rem]">
          <span className='text-4xl md:text-[40px] lg:text-5xl font-sans font-bold text-primary'>CodeBit</span>
          <h1 className='text-3xl md:text-[40px] lg:text-5xl font-sans font-bold'>
            Open Sources for Developers
          </h1>

          <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            CodeBit: Discover a vast collection of free open-source code, ready to integrate into your projects. Innovate with ease, collaborate globally, and turn your ideas into reality with the power of open-source.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <a href='#feature' className="bg-primary py-[10px] px-4 text-md text-white rounded shadow-lg font-semibold">Get Codes</a>
            <a href='#postmycode' className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>Publish Open Source</a>
          </div>

        </div>
      </section>
    </>
  )
}

export default IntroSection;