import React from "react";

const Logo: React.FC = () => {
  return (
    <a href="#" className="text-2xl font-bold text-text-light">
      <div className="w-28 h-10 overflow-hidden">
        <img
          src="src/images/logo.png"
          alt="logo"
          className="w-full h-full object-cover scale-[2.6] object-center"
        />
      </div>
    </a>
  );
};

export default Logo;
