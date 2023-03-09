import React from "react";

const Card = ({data, unit}) => {

  return (
    <div className='Card-div Card-div--container'>
      <svg className='Card-svg' viewBox="0 0 353 240" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_2_7)"><path d="M4 207V25.9892C4 10.0523 18.7117 -1.81611 34.288 1.55492L329.288 65.3986C340.791 67.8881 349 78.0636 349 89.8329V207C349 220.807 337.807 232 324 232H29C15.1929 232 4 220.807 4 207Z" fill="url(#paint0_linear_2_7)"/></g><defs><filter id="filter0_d_2_7" x="0" y="0.979492" width="353" height="239.021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_7"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_7" result="shape"/></filter><linearGradient id="paint0_linear_2_7" x1="4" y1="133.5" x2="349" y2="132.5" gradientUnits="userSpaceOnUse"><stop className='main-stop--1'/><stop offset="1" className='main-stop--2'/></linearGradient></defs></svg>
      <div className='Card-div Card-div--data'> 
        <img className='Card-img' src={`/${data?.weather?.[0].icon}.svg`} alt="" />
        <span className='Card-span Card-span--grades'>{ unit?((data?.main?.temp - 273.15).toFixed(0))+" C°" : ((data?.main?.temp * (9/5) - 459.67).toFixed(0))+" F°"}</span>
        <span className='Card-span Card-span--wind'>Wind speed: {data?.wind?.speed}m/s </span>
        <span className='Card-span Card-span--clouds'>Cloudiness: {data?.clouds?.all}%</span>
        <span className='Card-span Card-span--pressure'> Preassure: {data?.main?.pressure} hPa </span>
        <div className='Card-div Card-div--sub'>
          <span className='Card-span Card-span--city'>{data?.name}, {data?.sys?.country}</span>
          <span className='Card-span Card-span--description'>{data?.weather?.[0].description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;