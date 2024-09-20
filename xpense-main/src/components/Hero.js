import React from 'react';
// import data
import { hero } from '../data';
// import icons
import { HiOutlineChevronDown } from 'react-icons/hi';

const Hero = () => {
  // destructure hero data
  const { title, subtitle,text, btnText, compText, image } = hero;
  return (
    <section className='min-h-[900px] py-12'>
      <div className='container mx-auto min-h-[900px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <h1
              className='title mb-2 lg:mb-5'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {title}
            </h1>
            <p
              className='lead mb-5 lg:mb-24'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {subtitle}
            </p>

            <p className='text-xl mb-5 lg:mb-10'
              data-aos='fade-down'
              data-aos-delay='600'>
              {text}
            </p>
            {/* btn & comp text */}
            <div
              className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
              data-aos='fade-down'
              data-aos-delay='700'
            >
             <a href="#_" class="inline-flex items-center justify-center px-14 py-4 text-base text-xl leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                Get Pricing
             </a>
             <p className="text-xl underline hover:no-underline transition-colors duration-200 cursor : pointer">Watch the  Demo</p>
            </div>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-up' data-aos-delay='800'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
