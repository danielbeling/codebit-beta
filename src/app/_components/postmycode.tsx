'use client'

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { ButtonAsChild } from './button';
import Image from "next/image";

import LogoDark from '../../../public/images/logo-light.png';
import LogoLight from '../../../public/images/logo-dark.png';
import { useTheme } from 'next-themes';

function PostMyCode() {
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
    <section
      id='postmycode'
      className='container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Publish My Code
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Share your projects with the developer community on <span className='text-primary font-semibold'>CodeBit</span>.
        </p>
      </div>

      <div className='grid w-full border rounded-lg items-start gap-10 p-10 md:grid-cols-[1fr_200px]'>
        <div className='grid gap-6'>
          <h3 className='text-xl font-bold sm:text-2xl'>I want to publish my project on CodeBit</h3>
          <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Create an Account at Code Bit
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Upload your project to Google Drive and Copy the Link
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Read the Terms and Privacy before publishing
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Create a title and description
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <div className='space-y-2 items-center justify-center flex flex-col'>
            <Image
              src={theme === 'dark' ? LogoDark : LogoLight}
              className='w-[50px]'
              alt="Logo"
            />
            <h4 className='font-bold'>Create an account at CodeBit</h4>
          </div>
          <ButtonAsChild />
        </div>

      </div>
    </section>
  );
}

export default PostMyCode;