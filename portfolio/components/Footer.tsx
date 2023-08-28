import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center gap-8 mb-5">
        <a href="https://github.com/AaronHe09">
          <AiFillGithub
            style={{ width: "50px", height: "50px", color: "white" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/aaronhe09/">
          <AiFillLinkedin
            style={{ width: "50px", height: "50px", color: "white" }}
          />
        </a>
      </div>
      <p className="text-2xl text-white">aaronhe09biz@hotmail.com</p>
    </div>
  );
};

export default Footer;
