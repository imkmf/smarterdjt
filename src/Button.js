import React from 'react';

const Button = ({ text, action, type="normal" }) => {
  const width = type == 'full' ? 'w-100 mv2' : ''
  return <span class={`f5 f4-m f3-l lh-copy measure no-underline black bg-animate pointer hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 ${width}`} onClick={action}>
    {text}
  </span>
}

export default Button
