import React from "react";
import KBLLogo from "../../assets/KBL.png";
import ProjectCard from "./ProjectCard";

function KBL() {
  return (
    // <div className='bg-primary/10 p-4 rounded-lg'>
    //   <h1>
    //     <span className='text-xl'>KBL </span>
    //     <a
    //       href='https://eshop.kirloskarpumps.com/residential.html'
    //       target='_blank'
    //       rel='noreferrer'
    //       className='hover:text-primary'
    //     >
    //       (Live URL)
    //     </a>
    //     <div className='mt-2'>
    //       <img src={KBLLogo} alt='Kirloskar Brothers Limited.' />
    //     </div>
    //   </h1>
    //   <ul className='mt-2'>
    //     <li className='mt-4'>
    //       <img
    //         src={Sparkles}
    //         className='w-4 h-4 mr-2 text-primary inline-block'
    //         alt='Decoration'
    //       ></img>
    //       Implemented design in KBL mobile first Magento 2 theme. Involved
    //       multiple pages like PLP, Login, Register, Track Order, Order
    //       Confirmation etc.
    //     </li>
    //     <li className='mt-4'>
    //       <img
    //         src={Sparkles}
    //         className='w-4 h-4 mr-2 text-primary inline-block'
    //         alt='Decoration'
    //       ></img>
    // Corrected broken design in KBL Magento Upgrade project.
    //     </li>
    //     <li className='mt-4'>
    //       <img
    //         src={Sparkles}
    //         className='w-4 h-4 mr-2 text-primary inline-block'
    //         alt='Decoration'
    //       ></img>
    //
    //     </li>
    //   </ul>
    // </div>
    <ProjectCard
      projectTitle={"KBL"}
      liveUrl={"https://eshop.kirloskarpumps.com/residential.html"}
      imgLogoSrc={KBLLogo}
      contentList={[
        {
          content:
            "Implemented design in KBL mobile first Magento 2 theme. Involved multiple pages PLP, Login, Register, Track Order, Order Confirmation etc.",
        },
        {
          content: "Corrected broken design in KBL Magento Upgrade project.",
        },
        {
          content:
            "Experienced working with LESS, JS, XML Layouts and PHTML templates.",
        },
      ]}
    />
  );
}

export default KBL;
