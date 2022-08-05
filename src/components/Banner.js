import React from 'react';

import Image from '../assets/img/house-banner.png'
import search from '../components/Search'

const Banner = () => {
  return ( 
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div>
        <h1>
          <span>Search Properties to Rent</span>
        </h1>
        <p>
          Discover a place you'll love to live. We will help you find a home that is perfect for you!
        </p>
      </div>
      {/* image */}
      <div>
        <img src={Image} alt='' />
      </div>
    </div>
    <search/>
  </section>
  
  );
};

export default Banner;
