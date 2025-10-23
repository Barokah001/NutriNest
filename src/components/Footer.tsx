import { Instagram, Linkedin, Mail, MapPin, MessageCircleCode, Phone, Twitter } from "lucide-react";
import Button from "./Button";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <section className="bg-blue-950 text-white flex flex-col gap-10 items-start px-15 md:px-20 py-15">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex flex-col gap-3 justify-center items-start ">
          <div className="flex gap-1 justify-center items-center">
            <img src="/images/Logo..png" />
            <h1 className="text-2xl font-bold">NutriNest</h1>
          </div>

          <div className="relative bg-blue-100 text-blue-950 flex gap-2 font-semibold p-5 rounded-xl">
            <div className="flex flex-col gap-2">
              <h1>Let's Talk</h1>
              <div className="flex gap-2">
                <Mail />
                <a href="mailto:alimibarakat001@gmail.com">
                  alimibarakat001@gmail.com
                </a>
              </div>

              <div className="flex gap-2">
                <Phone />
                <a href="tel: +2349060010982">+2349060010982</a>
              </div>

              <div className="flex gap-2">
                <MapPin />
                <p>Lagos, Nigeria</p>
              </div>

              <div className="flex gap-2 pt-3">
                <div className="flex justify-center items-center bg-white w-[40px] h-[40px] rounded-full">
                  <a href="https://www.linkedin.com/in/barokah-oyindamola">
                    <Linkedin />
                  </a>
                </div>
                <div className="flex justify-center items-center bg-white w-[40px] h-[40px] rounded-full">
                  <a href="https://www.instagram.com/barokah_oyin/">
                    <Instagram />
                  </a>
                </div>
                <div className="flex justify-center items-center bg-white w-[40px] h-[40px] rounded-full">
                  <a href="https://x.com/BarokahOyin">
                    <Twitter />
                  </a>
                </div>
                <div className="flex justify-center items-center bg-white w-[40px] h-[40px] rounded-full">
                  <a href="">
                    <MessageCircleCode />
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <img src="/images/footimg.png" alt="" />
            </div>
          </div>

          <Button name="Learn More" className="bg-white text-blue-950" />
        </div>

        <div className="flex flex-col justify-start pt-2 md:pt-0 h-fit md:items-center md:h-[230px] w-[33.3%]">
          <h3 className="text-xl font-semibold">Quick links</h3>
          <ul>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="./about">About</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="/services">Services</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="/blog">Blog</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-start w-80 items-start gap-10 md:h-[230px] w-[33.3%]">
          <h3 className="text-xl font-semibold">Our Newsletter</h3>
          <p className="w-[80%]">
            Subscribe to our newsletter to get our news delivered to you.
          </p>
          <div className="flex relative pr-2">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              className="rounded-md text-white pl-2 pr-24 py-2 border border-white bg-none"
            />
            <button className="absolute cursor-pointer right-2 px-2 py-2 bg-blue-100 hover:bg-blue-200 text-blue-950 text-[17px] font-normal rounded-md">
              Join
            </button>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-500 w-[100%] my-5" />

      <div>
        <p className="w-[100%]">
          Copyright © {currentYear} NutriNest. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer