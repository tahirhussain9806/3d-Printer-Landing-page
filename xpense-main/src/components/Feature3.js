import React from 'react';
// import data
import { features } from '../data';

const Feature3 = () => {
  // destructure features
  const { feature3 } = features;
  // destructure feature3
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* image */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
          <img src={image} alt='' />
          </div>
          {/* text */}
          <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
          <h2 className='resttitle mb-2 lg:mb-5'>{title}</h2>
          <div className='lead mb-5 lg:mb-16'>{pretitle}</div>
            <p className='text-xl mb-5 lg:mb-8'>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
