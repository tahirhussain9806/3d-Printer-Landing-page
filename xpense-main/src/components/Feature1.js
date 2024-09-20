import React from 'react';
// import data
import { features } from '../data';

const Feature1 = () => {
  // destructure features
  const { feature1 } = features;
  // destructure feature1
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[50px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='300'>
            <img src={image} alt='' />
          </div>
          <div className='flex-1' data-aos='fade-left' data-aos-offset='400'>
            <h2 className='resttitle mb-2 lg:mb-5'>{title}</h2>
            <p className='lead mb-5 lg:mb-16'>{pretitle}</p>
            <p className='text-xl mb-5 lg:mb-8'>{subtitle}</p>
            <p className='italic font-thin'>*Tested by Fraunhofer WKI. Only including UltiMaker materials.</p>
          </div>
          {/* image */}
          
        </div>
      </div>
    </section>
  );
};

export default Feature1;
