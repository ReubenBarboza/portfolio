import React from "react";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className='flex justify-evenly mt-8 text-secondary '>
      <li>
        <Link
          className='px-2 py-2 border border-primary shadow-sm shadow-primary hover:border-secondary hover:text-primary transition-all duration-200 rounded-sm'
          to='/projects'
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className='px-2 py-2 border border-primary shadow-sm shadow-primary hover:border-secondary hover:text-primary transition-all duration-200 rounded-sm'
          to='/skills'
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className='px-2 py-2 border border-primary shadow-sm shadow-primary hover:border-secondary hover:text-primary transition-all duration-200 rounded-sm'
          to='/experience'
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          className='px-2 py-2 border border-primary shadow-sm shadow-primary hover:border-secondary hover:text-primary transition-all duration-200 rounded-sm'
          to='/education'
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          className='px-2 py-2 border border-primary shadow-sm shadow-primary hover:border-secondary hover:text-primary transition-all duration-200 rounded-sm'
          to='/about'
        >
          About
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
