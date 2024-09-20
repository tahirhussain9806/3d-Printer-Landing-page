import React from 'react';
// import data
import { overview,Pros } from '../data';
import Product from './Product';


const Overview = () => {
  // destructure overview data
  const { productImg } = overview;
  return (
    <section className='lg:min-h-[712px] bg-sky-50 bg-cover bg-left-top pt-[30px] lg:pt-[]'>
      <div className='container mx-auto flex justify-end overflow-hidden'>
        {/* <img src={productImg} alt='' data-aos='fade-up' data-aos-offset='300' /> */}
        <div className='container mx-auto min-h-[700px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <h2
              className='h2 items-center justify-center text-center'
              data-aos='fade-down'
              data-aos-delay='500'
            >
          {Pros.title}
            </h2>
            <p
              className='lead items-center justify-center text-center '
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {Pros.subtitle}
            </p>
            <Product/>
            </div>
            </div>
            </div>
      </div>
    </section>
  );
};

export default Overview;
