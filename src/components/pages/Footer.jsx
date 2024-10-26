import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-6 md:p-12 bg-[#1649FF] text-white">
      <div className="w-full flex flex-wrap justify-between gap-10">
        <div>
          <h1 className="text-2xl font-light">Inovact social</h1>
          <p className="text-sm">
            Address : #731, E & F Block , Kuvempunagar, Mysore - 570023
          </p>
          <p className="text-sm">Email: inovacteam@gmail.com</p>
          <p className="text-sm">Phone: +91 8296024720</p>
        </div>
        <div>
          <h1 className="text-2xl font-light">Products</h1>
          <p className="text-sm">Features</p>
          <p className="text-sm">Join community</p>
        </div>
        <div>
          <h1 className="text-2xl font-light">Company</h1>
          <p className="text-sm">About us</p>
          <p className="text-sm">Contact us</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center self-center">
          <img className="w-6 h-6" src="./arrow_up.svg" alt="" />
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="mt-6 text-3xl font-thin tracking-tight text-center">
          @Join Inovact community{" "}
        </h1>
        <div className="social flex items-center gap-4 mt-4">
          <img className="w-14 h-14" src="./whatsapp icon.svg" alt="" />
          <img className="w-14 h-14" src="./instagram icon.svg" alt="" />
          <img className="w-14 h-14" src="./linkedin icon.svg" alt="" />
        </div>
      </div>
      <div className="mt-5 py-2 text-center">
        <span className="text-sm">@2024 All rights reserved </span>
      </div>
    </div>
  );
};

export default Footer;
