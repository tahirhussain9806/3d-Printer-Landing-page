import React from 'react';
// import data
import { product } from '../data';
// import components
import Cards from './Cards';

const Product = () => {

  return (
    <section className=''>
      <div className='container mx-auto'>
        {/* cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Product;
