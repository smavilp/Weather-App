import React from 'react';

const Loader = () => {
  return (
    <div className='Loader'>
      <img className='Loader-img Loader-img--cloud' src="/loader-cloud.png" alt="" />
      <span className='Loader-span'>Weather App</span>
      <div className='Loader-div'>
        <img className='Loader-img Loader-img--icons'src="/loader-icons.png" alt="" />
      </div>
    </div>
  );
};

export default Loader;