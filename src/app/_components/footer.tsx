'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";
import LogoDark from '../../../public/images/logo-light.png';
import LogoLight from '../../../public/images/logo-dark.png';
import { useTheme } from 'next-themes';

export function Footer() {
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
    <footer className="footer p-10 border-t dark:bg-transparent text-base-content">
      <aside className="flex flex-col items-center justify-center">
        <Image
          src={theme === 'dark' ? LogoDark : LogoLight}
          className='w-[50px] mb-2'
          alt="Logo"
        />
        <p className='dark:text-muted-foreground'>&copy; 2024 CodeBit. All rights reserved</p>
      </aside>
      <nav>
        <h6 className="footer-title text-primary">Services</h6>
        <a href="#opencode" className="link link-hover dark:text-muted-foreground">Open code</a>
        <a href="#design" className="link link-hover dark:text-muted-foreground">Design</a>
        <a href="#components" className="link link-hover dark:text-muted-foreground">Components</a>
        <a href="#template" className="link link-hover dark:text-muted-foreground">Template Responsive</a>
      </nav>
      <nav>
        <h6 className="footer-title text-primary">Company</h6>
        <a href='#about' className="link link-hover dark:text-muted-foreground">About us</a>
        <a href='#contact' className="link link-hover dark:text-muted-foreground">Contact</a>
        <a href='#postmycode' className="link link-hover dark:text-muted-foreground">Publish Code</a>
        <a href='https://danielbeling.vercel.app/' target='_blank' className="link link-hover dark:text-muted-foreground">Developer the CodeBit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-primary">Legal</h6>
        <a href="#terms" className="link link-hover dark:text-muted-foreground">Terms of use</a>
        <a href="#privacy" className="link link-hover dark:text-muted-foreground">Privacy policy</a>
        <a href="#cookie" className="link link-hover dark:text-muted-foreground">Cookie policy</a>
      </nav>
    </footer>
  )
}
