import React from 'react';
import logoimage from './logo.png';

const Footer = () => {
  return (
    <div className="flex gap-20 absolute inset-x-0 bg-black w-screen h-64 text-xl">
      <img src={logoimage} alt="Logo" className="w-64 h-64 ml-20" />
      <div className="grid gap-2 mt-4 w-20 h-20 ">
        <a href="#" className="block text-white">Home</a>
        <a href="#" className="block text-white">Events</a>
        <a href="#" className="block text-white">Team</a>
        <a href="#" className="block text-white">Resources</a>
      </div>
      <div className="grid gap-2 mt-4 ml-60 w-60 h-40 ">
        <a href="#" className="block text-white">Terms and Conditions</a>
        <a href="#" className="block text-white pb-40">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;