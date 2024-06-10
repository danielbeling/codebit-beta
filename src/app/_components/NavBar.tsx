'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ModeToggle } from './mode-toggle';

import LogoDark from '../../../public/images/logo-light.png';
import LogoLight from '../../../public/images/logo-dark.png';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: 'Docs',
    link: '#',
  },
  {
    label: 'Components',
    link: '#',
  },
  {
    label: 'Themes',
    link: '#',
  },
  {
    label: 'Examples',
    link: '#',
  },
  {
    label: 'About',
    link: '#about',
  },
  {
    label: 'Contact',
    link: '#',
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }
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
    <div className="fixed z-50 w-full bg-white dark:bg-[#030712] shadow-md">
      {/* class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100" */}
      <div className="mx-auto  flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
        {/* left side  */}
        <section ref={animationParent} className="flex items-center gap-10">
          {/* logo */}
          <Image
            src={theme === 'dark' ? LogoDark : LogoLight}
            className='w-[40px] mr-2 transition cursor-pointer'
            alt="Logo"
          />
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
          <div className="hidden md:flex items-center gap-4 transition-all">
            {navItems.map((d, i) => (
              <div key={i} className="relative group px-2 py-3 transition-all">
                <Link href={d.link ?? '#'} className="flex items-center gap-2 text-neutral-400 group-hover:text-primary transition">
                  <span>{d.label}</span>
                  {d.children && <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />}
                </Link>
              </div>
            ))}
          </div>

        </section>

        {/* right side */}
        <section className="hidden md:flex items-center gap-8">
          <button className="h-fit text-neutral-400 transition-all hover:primary">Login</button>
          <Button className="h-fit rounded-xl border-2transition-all">Register</Button>
          <ModeToggle />
        </section>
        <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden" />
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
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
    <div className="fixed left-0 top-0 flex h-full w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[100%] bg-white dark:bg-[#030712] px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
        </section>
        <div className="flex flex-col gap-2 text-base transition-all">
          <Image
            src={theme === 'dark' ? LogoDark : LogoLight}
            className='w-[40px] mb-10 mt-[-30px] transition cursor-pointer'
            alt="Logo"
          />
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} iconImage={d.iconImage} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="mt-4 flex flex-col items-center gap-8">
          <button className="h-fit text-neutral-400 transition-all hover:text-primary">Login</button>
          <Button className="h-fit rounded-xl border-2transition-all">Register</Button>
          <ModeToggle />
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <div ref={animationParent} className="relative px-2 py-3 transition-all">
      <Link href={d.link ?? '#'} className="flex items-center gap-2 text-neutral-400 group-hover:text-primary" onClick={toggleItem}>
        <span>{d.label}</span>
        {d.children && <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && 'rotate-180'}`} />}
      </Link>
    </div>
  );
}
