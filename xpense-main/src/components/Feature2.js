import React from 'react';
// import data
import { features } from '../data';

const Feature2 = () => {
  // destructure features
  const { feature2 } = features;
  // destructure feature2
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return (
    <section className='section bg-sky-50 bg-cover'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div
            className='flex-1 order-2 lg:order-1'
            data-aos='fade-right'
            data-aos-offset='300'
          >
            <h2 className='resttitle mb-2 lg:mb-5'>{title}</h2>
            <div className='lead mb-5 lg:mb-16'>{pretitle}</div>
            <p className='text-xl mb-5 lg:mb-8'>{subtitle}</p>
          </div>
          {/* image */}
          <div
            className='flex-1 order-1 lg:order-2'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <img src={image} alt='' />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
