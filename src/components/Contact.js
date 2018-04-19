import React from 'react'

import Divider from './helper/Divider';
import MiniDivider from './helper/MiniDivider';

const Contact = (props) => {
  return (
    <div className="contact centered">
      <Divider />
      <h2>Contact</h2>
      <MiniDivider />
      <p><span>Oleg Chursin</span></p>
      <p>olegchursin@gmail.com</p>
      <p>(917) 690-5935</p>
      <Divider />
      <p>
        <a href="https://github.com/olegchursin">GitHub</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/olegchursin/">LinkedIn</a>
      </p>
      <p>
        <a href="https://medium.com/@olegchursin">Medium</a>
      </p>
      <p>
        <a href="https://www.behance.net/olegchursin">Behance</a>
      </p>
      <Divider />
    </div>
  )
}

export default Contact
