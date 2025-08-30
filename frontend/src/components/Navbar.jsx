import React, { useState, useTransition } from "react";

const Navbar = () => {
  const [visable, setVisable] = useState(false);
 
  return (
    <div className="flex  justify-between items-center gap-6 py-7 px-6 bg-black">
      <div className=" text-white flex gap-3">
        <div className="bg-black text-3xl text-white font-bold pr-4 pt-1 border-r-1 h-12 border-white">
          COINPAYMENTS
        </div>
        <div className="w-16 mt-1  text-[9px] border p-1 border-white text-white text-sm">
          <span className="font-bold">Kick</span> SAUBER
          <br />
          <p className="text-[7px] text-center"> F1 Team</p>
          <p className="text-[5px] text-center pt-1">OFFICAL PARTNER</p>
        </div>
      </div>
      <div className="md:flex gap-5 justify-center hidden   items-center  text-white">
        <div className="group relative text-white">
          <p className="font-bold cursor-pointer">
            FOR BUSSINESS{" "}
            <span className="hover:rotate-90 cursor-pointer">+</span>
          </p>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col w-44 gap-2 font-bold text-[14px] py-4 px-3 text-center bg-[#1A2440] text-white rounded-md">
              <p className="cursor-pointer hover:text-gray-500 p-2 hover:bg-[#232E4D]">
                BUSINESS FEATURE
              </p>
              <p className="cursor-pointer hover:text-gray-500 p-2 hover:bg-[#232E4D]">
                MERCHANT TOOLS{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="group relative text-white">
          <p className="  cursor-pointer">
            FOR INDIVIDUALS{" "}
            <span className="hover:rotate-90 cursor-pointer">+</span>
          </p>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col w-44 gap-2 font-bold text-[14px] py-4 px-3 text-center bg-[#1A2440] text-white rounded-md">
              <p className="cursor-pointer hover:text-gray-500 p-2 hover:bg-[#232E4D]">
                Personal Wallet
              </p>
              <p className="cursor-pointer hover:text-gray-500 p-2 hover:bg-[#232E4D]">
                Prepaid Cards{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="group relative text-white">
          <p className="  cursor-pointer">
            RESOURCES <span className="hover:rotate-90 cursor-pointer">+</span>
          </p>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col w-44 gap-2 font-bold text-[14px] py-4 px-3  bg-[#1A2440] text-white rounded-md">
              <p className="cursor-pointer hover:text-gray-500 p-2 hover:bg-[#232E4D]">
                Integration Guide
              </p>
              <p className="cursor-pointer hover:text-gray-500 p-2 hover:bg-[#232E4D]">
                Integration Options{" "}
              </p>
              <p className="cursor-pointer hover:text-gray-500 p-2 hover:bg-[#232E4D]">
                API Documentation{" "}
              </p>
              <p className="cursor-pointer hover:text-gray-500 p-2 hover:bg-[#232E4D]">
                FAQ{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="">COINS</div>
        <div className="">SUPPORT</div>
        <button className="border border-white text-white hover:text-black font-semibold hover:bg-white px-5 py-2 rounded-full">
          LOG IN
        </button>
        <button className="border border-white text-black font-semibold bg-white px-5 py-2 rounded-full">
          SIGN UP
        </button>
      </div>
      <div
        onClick={() => setVisable(!visable)}
        className="flex flex-col gap-1 justify-center items-center md:hidden"
      >
        <div className="w-[20px] h-[3px] bg-white rounded-full"></div>
        <div className="w-[20px] h-[3px] bg-white rounded-full"></div>
        <div className="w-[20px] h-[3px] bg-white rounded-full"></div>
      </div>
      <div
        className={`absolute top-19 bottom-0 right-0 overflow-hidden bg-white transition-all  ${
          visable ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex flex-col   gap-4 px-12 py-18 bg-black text-white">
            <div className="h-[2px] w-full bg-gray-500 mb-2"></div>

            
            <div className="group relative text-white">
              <p className="font-bold cursor-pointer">
                FOR BUSINESSES{" "}
               </p>
              <div className="group-hover:block hidden   dropdown-menu top-0 pt-4">
                <div className="flex flex-col  gap-2 font-bold text-[14px] py-2 px-3  text-white  ">
                  <p className="cursor-pointer hover:text-gray-50[#E4E3E4] p-2 hover:bg-[#232E4D] rounded-lg">
                    BUSINESS FEATURE
                  </p>
                  <p className="cursor-pointer hover:text-[#E4E3E4] p-2 hover:bg-[#232E4D]  rounded-lg">
                    MERCHANT TOOLS{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative text-white">
              <p className="  cursor-pointer">
                FOR INDIVIDUALS{" "}
               </p>
              <div className="group-hover:block hidden   dropdown-menu top-0 pt-4">
                <div className="flex flex-col  gap-2 font-bold text-[14px] py-2 px-3   text-white rounded-md">
                  <p className="cursor-pointer hover:text-[#E4E3E4] p-2 hover:bg-[#232E4D] rounded-lg">
                    Personal Wallet
                  </p>
                  <p className="cursor-pointer hover:text-[#E4E3E4] p-2 hover:bg-[#232E4D]  rounded-lg">
                    Prepaid Cards{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative text-white">
              <p className="  cursor-pointer">
                RESOURCES
           
              </p>
              <div className="group-hover:block hidden   dropdown-menu top-0 pt-4">
                <div className="flex flex-col  gap-2 font-bold text-[14px] py-2 px-3    text-white rounded-md">
                  <p className="cursor-pointer hover:text-[#E4E3E4] p-2 hover:bg-[#232E4D] rounded-lg">
                    Integration Guide
                  </p>
                  <p className="cursor-pointer hover:text-[#E4E3E4] p-2 hover:bg-[#232E4D] rounded-lg">
                    Integration Options
                  </p>
                  <p className="cursor-pointer hover:text-[#E4E3E4] p-2 hover:bg-[#232E4D] rounded-lg">
                    API Documentation
                  </p>
                  <p className="cursor-pointer hover:text-[#E4E3E4] p-2 hover:bg-[#232E4D]  rounded-lg">
                    FAQ
                  </p>
                </div>
              </div>
            </div>
             
            <p>COINS</p>
            <p>SUPPORT</p>
            <div className="flex flex-col items-center py-5 gap-2 bg-[#1F3148] rounded-2xl ">
              <p className="text-[14px]">Bank Yourself today.</p>
              <button className="text-white bg-[#1255D1] px-5 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
