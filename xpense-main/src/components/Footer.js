import React from 'react';
// import data
import { footer } from '../data';
// import components
import Copyright from '../components/Copyright';

const Footer = () => {
  // destructure footer data
  const { logo, links, legal, newsletter, form } = footer;
  return (
    <footer className='pt-[142px] pb-[60px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          {/* logo */}
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='300'>
            <img src={logo} alt='' />
          </div>
          {/* list 1 */}
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='500'>
            <div className='text-2xl uppercase font-medium mb-6'>Links</div>
            <ul className='flex flex-col gap-y-3'>
              {links.map((item, index) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className='font-medium hover:text-blue-600 transition'
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* list 2 */}
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='700'>
            <div className='text-2xl uppercase font-medium mb-6'>Legal</div>
            <ul className='flex flex-col gap-y-3'>
              {links.map((item, index) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className='font-medium hover:text-blue-600 transition'
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='900'>
            <div className='text-2xl uppercase font-medium mb-6'>
              {newsletter.title}
            </div>
            <div className='text-xl text-light mb-[18px]'>
              {newsletter.subtitle}
            </div>
            {/* form */}
            <form className='max-w-[349px] mb-[10px]'>
              <div className='h-[62px] p-[7px] flex border border-dark rounded-lg'>
                <input
                  className='w-full h-full pl-6 border-none outline-none placeholder:text-dark'
                  type='text'
                  placeholder={form.placeholder}
                />
                <a href="#_" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
{form.btnText}
</a>
              </div>
            </form>
            <span className='text-sm text-light'>{form.smallText}</span>
          </div>
        </div>
        <hr
          className='mt-10 mb-5'
          data-aos='fade-up'
          data-aos-offset='100'
          data-aos-delay='200'
        />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
