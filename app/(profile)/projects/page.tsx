import React from 'react';
import {Projects1, Projects2, Projects3} from '@/app/components/Projects';


const Page = () => {

  
  return (
    <div className='lg:grid lg:gap-1'>
      <div className=''>
        <Projects1 />
      </div>
      <div className=''>
        <Projects2 />
      </div>
      <div className=''>
        <Projects3 />
      </div>
      
    </div>
  )
}

export default Page;