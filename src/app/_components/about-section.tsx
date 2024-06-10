import Image from 'next/image';
import BannerDev from '../../../public/images/web-development.png';
import Link from 'next/link';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  DevIcon,
} from '@/components/social-icons';

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function AboutSection() {
  return (
    <section id="about" className='container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24 mb-[55px]'>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-auto-1fr">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={BannerDev}
              alt='Banner Development'
              width={350}
              height={350}
              quality='95'
              priority={true}
              className='aspect-square rotate-3 rounded-lg object-cover'
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-sans font-semibold '>About</h1>
          <p className='mb-2 mt-6 text-base text-muted-foreground'><span className='text-primary font-bold'>CodeBit</span> is an innovative platform dedicated to providing a vast collection of free open-source code, designed to accelerate creativity and innovation for developers of all levels. Our goal is to facilitate global collaboration, allowing developers to share, learn, and integrate high-quality code into their own projects.</p>
          <p className='text-base text-muted-foreground'>At <span className='text-primary font-bold'>CodeBit</span>, we believe that innovation should be accessible to everyone. That’s why we strive to create a collaborative environment where developers can explore, contribute, and grow together. Our mission is to empower the developer community with valuable resources that foster continuous creativity and innovation.</p>
          <h3 className='mt-4'>Developer social</h3>
          <div className="mt-2 flex justify-center md:justify-start gap-6">
            <SocialLink href="https://www.instagram.com/danielbeling_/" target="_blank" icon={InstagramIcon} />
            <SocialLink href="https://github.com/danielbeling" target="_blank" icon={GitHubIcon} />
            <SocialLink href="https://www.linkedin.com/in/daniel-beling-293146236/" target="_blank" icon={LinkedInIcon} />
            <SocialLink href="https://danielbeling.vercel.app/" target="_blank" icon={DevIcon} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;