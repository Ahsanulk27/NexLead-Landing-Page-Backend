import React from 'react'
import logoImage from '../images/logo.jpg'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center w-20">
      <div className="w-80 h-10 overflow-hidden">
        <img
          src={logoImage}
          alt="Nexlead Logo"
          className="w-80 h-20 object-cover -translate-x-0 -translate-y-5"
        />
      </div>
      {/* <div className="flex flex-col"> */}
        {/* <span className="font-bold text-xl leading-none">NEXLEAD</span> */}
        {/* <span className="text-nexlead-red text-xs uppercase tracking-wider">SOLUTIONS</span> */}
      {/* </div> */}
    </div>
  )
}

export default Logo