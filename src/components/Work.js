import React from 'react'

import Divider from './helper/Divider'
import MiniDivider from './helper/MiniDivider'

const Work = (props) => {
  return (
    <div className='work centered'>
      <Divider />
      <h2>Selected Work</h2>
      <MiniDivider />
      <div className='portfolio'>
        <div className='portfolio-item'>Item</div>
        <div className='portfolio-item'>Item</div>
        <div className='portfolio-item'>Item</div>
        <div className='portfolio-item'>Item</div>
        <div className='portfolio-item'>Item</div>
        <div className='portfolio-item'>Item</div>
      </div>
      <Divider />
    </div>
  )
}

export default Work
