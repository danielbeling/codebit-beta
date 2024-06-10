import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FaqSection() {
  return (
    <section
      id='faq'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24 mb-10'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          FAQ
        </h2>
      </div>
      <div className='mx-auto text-center md:max-w-[58rem]'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-5'>
            <AccordionTrigger>How to use open codes?</AccordionTrigger>
            <AccordionContent className='text-left'>
              <p>
                Explore and leverage the open-source resources provided by <span className='font-bold text-primary'>CodeBit</span> to accelerate your projects and drive innovation. Collaborate, customize, and implement efficient solutions using our tools.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Who can use the codes available on CodeBit?</AccordionTrigger>
            <AccordionContent className='text-left'>
              Anyone interested can use the codes available on <span className='font-bold text-primary'>CodeBit</span>, from beginner developers to experienced professionals, making the most of the resources to learn, collaborate, and innovate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Can I post my codes on CodeBit?
            </AccordionTrigger>
            <AccordionContent className='text-left'>
              Yes, you can post your codes on <span className='font-bold text-primary'>CodeBit</span>. Just register on the site, upload your code to Google Drive, and then link it to your project on <span className='font-bold text-primary'>CodeBit</span>. </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>How do the publishing terms work?</AccordionTrigger>
            <AccordionContent className='text-left'>
              The publishing terms require that, after posting your projects on <span className='font-bold text-primary'>CodeBit</span>, you agree to share your code under an open-source license, allowing others to collaborate and use your work.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>How does Support work?</AccordionTrigger>
            <AccordionContent className='text-left'>
              Support is available to help address your questions and resolve any issues you may encounter.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;