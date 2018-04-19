import React from 'react'

import Divider from './helper/Divider'
import MiniDivider from './helper/MiniDivider'

const Skills = (props) => {
  return (
    <div className='skills centered'>
      <Divider />
      <h2>Key Skills & Buzzwords</h2>
      <MiniDivider />
      <p>React/Redux</p>
      <p>Javascript</p>
      <p>HTML/CSS</p>
      <p>Node</p>
      <p>RoR</p>
      <p>Information Architecture</p>
      <p>Adobe Suite</p>
      <Divider />
    </div>
  )
}

export default Skills
