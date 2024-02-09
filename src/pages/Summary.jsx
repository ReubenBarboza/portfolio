import React from "react";
import Potrait from "../assets/Potrait.jpeg";

function Summary() {
  return (
    <div className='flex gap-12'>
      <div>
        <img src={Potrait} alt='Reuben Barboza' width={300} />
      </div>
      <section className='flex flex-col justify-center'>
        <h1 className='text-7xl text-primary leading-[0.8]'>Reuben Barboza</h1>
        <p className='text-2xl ml-1.5 text-secondary pb-1'>Web Developer</p>
        <ul className='list-disc list-inside ml-1.5 text-lg text-primary py-1 border-y border-primary'>
          <li>Over 5 months enterprise development experience at Iksula.</li>
          <li>Over 140 pull requests gone live.</li>
          <li>Hands on interaction in Magento 2 frontend. </li>
          <li>
            Created mobile responsive PLP, Login, Register pages for {""}
            <a
              href='https://eshop.kirloskarpumps.com/'
              className='underline hover:text-secondary'
            >
              KBL.
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Summary;
