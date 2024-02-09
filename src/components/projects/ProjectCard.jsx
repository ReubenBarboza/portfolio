import React from "react";
import Sparkles from "../../assets/sparkles.svg";

function ProjectCard({ projectTitle, imgLogoSrc, liveUrl, contentList }) {
  return (
    <div className='bg-primary/10 p-4 rounded-lg'>
      <h1>
        <span className='text-xl'>{projectTitle} </span>
        <a
          href={liveUrl}
          target='_blank'
          rel='noreferrer'
          className='hover:text-primary'
        >
          (Live URL)
        </a>
        <div className='mt-2'>
          <img src={imgLogoSrc} alt='Kirloskar Brothers Limited.' />
        </div>
      </h1>

      <ul className='mt-2'>
        {contentList.map((list, index) => {
          return (
            <li className='mt-4' key={list.content.substring(0, 7) + index}>
              <img
                src={Sparkles}
                className='w-4 h-4 mr-2 text-primary inline-block'
                alt='Decoration'
              ></img>
              {list.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectCard;
