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
        <div className='portfolio-item' id='portfolio-la'>
          <a href="https://linguistic-analysis.herokuapp.com/">linguistic analysis</a>
        </div>
        <div className='portfolio-item' id='portfolio-islahook'><a href="https://olegchursin.myportfolio.com/islahook-landing-page">Isla+Hook</a></div>
        <div className='portfolio-item' id='portfolio-bbar'><a href="http://bbarandgrill.com">BBar & Grill</a></div>
        <div className='portfolio-item' id='portfolio-lafayette'><a href="http://lafayettehousenyc.com/">Lafayette House</a></div>
        <div className='portfolio-item' id='portfolio-ryan'><a href="https://olegchursin.myportfolio.com/ryan-cunningham-personal-brand">Ryan Cunningham</a></div>
        <div className='portfolio-item' id='portfolio-dlaw'><a href="http://new.dzhamgarovalaw.com/en/index.html">D Law</a></div>
      </div>
      <Divider />
    </div>
  )
}

export default Work
