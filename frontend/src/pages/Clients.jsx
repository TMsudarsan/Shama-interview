import React from "react";
import CompanyCarousel from "../components/CarsouleCompany";
import landinging from "../assets/landing.webp";
import Footer from "../components/Footer";
const Clients = () => {
  return (
    <>
      <div className="px-5  md:px-8 py-10 bg-[#080E1B]">
        <div className=" md:flex-row flex flex-col   items-center text-white font-bold">
          <div className="  lg:border-r border-gray-300 px-4 mt-12">
            <div className="flex items-center justify-center md:justify-start  gap-3">
              <p className=" text-[5rem] md:text-[6rem] font-bold text-white">
                14
              </p>
              <span className="  text-8xl  font-light text-white">+</span>
            </div>
            <p className="text-center md:text-left">YEARS OF EXPERTISE IN CRYPTOPROCESSING</p>
          </div>
          <div className="  lg:border-r border-gray-300 px-4 mt-12">
            <div className="flex items-center  justify-center md:justify-start  gap-3">
              <p className=" text-[5rem] md:text-[6rem] font-bold text-white">
                250K
              </p>
              <span className="  text-8xl  font-light text-white">+</span>
            </div>
            <p>MERCHANTS ACROSS THE GLOBE</p>
          </div>
          <div className="  lg:border-r border-gray-300 px-4 mt-12">
            <div className="flex items-center  justify-center md:justify-start  gap-3">
              <p className=" text-[5rem] md:text-[6rem] font-bold text-white">
                1M
              </p>
              <span className="  text-8xl  font-light text-white">+</span>
            </div>
            <p>CRYPTO WALLET USERS</p>
          </div>
          <div className=" px-4  mt-12">
            <div className="flex items-center  justify-center md:justify-start  gap-3">
              <p className=" text-[5rem] md:text-[6rem] font-bold text-white">
                $50B
              </p>
              <span className="  text-8xl  font-light text-white">+</span>
            </div>
            <p>TRANSACTION VOLUME PROCESSED</p>
          </div>
        </div>
        <p className="text-center text-3xl md::text-4xl font-light text-white pt-10 mt-10">
          TRUSTED BY THOUSANDS OF COMPANIES
        </p>
        <div className="px-5 md:px-8 pb-16">
          <CompanyCarousel />
        </div>
      </div>
      <div className="py-18 md:py-26 bg-black text-center">
        <p className="text-5xl md:text-7xl font-extralight text-white">
          KEY <span className="font-bold">FEATURES</span>
        </p>
      </div>
      <div className="bg-black px-4">
        <div className=" flex flex-col lg:flex-row bg-[#080E1B]   justify-center  gap-3">
          <div className="py-10 px-7 lg:w-1/3 text-white">
            <p className="text-3xl w-1/2 md:w-full font-bold">
              MULTI-USER ACCOUNT DELEGATION
            </p>
            <p className="leading-8">
              Secure management, streamlined. New permissions system enables
              shared access while keeping your account safe. Empower larger
              teams with confidence and control.
            </p>
          </div>
          <div className="py-10 px-7 bg-black border  lg:w-1/3 text-white">
            <p className="text-3xl w-80 md:w-full font-bold">
              MPC-BACKED NODE INFRASTRUCTURE
            </p>
            <p className="leading-8">
              Next-gen security, built in. With multi-party computation (MPC),
              private keys are never stored in one place or exposed in full -
              even during signing. Each transaction is authorized by multiple
              independent nodes working together, making it nearly impossible to
              hack or compromise. This ensures secure, decentralized signing
              without a single point of failure.
            </p>
          </div>
          <div className="py-10 px-4 bg-[#080E1B] lg:w-1/3 text-white">
            <p className="text-4xl w-1/2 md:w-full font-bold">
              IN-HOUSE BLOCKCHAIN INTELLIGENCE, EVOLVED
            </p>
            <p className="leading-8">
              Track funds, assess risk, and detect fraud with precision. Our
              proprietary system analyzes transactions in real time - flagging
              tainted or darknet-linked assets before settlement. With 98%
              mempool-level confirmation, checkout becomes instant, secure and
              seamless.
            </p>
          </div>
        </div>
        <div className="py-32 md:py-52">
          <p className=" text-center text-white md:text-xl text-lg">
            Connect with our sales team to explore tailored crypto payment
            solutions for your business.
          </p>

          <div className="flex justify-center">
            <button className="mt-12 px-8 py-4  rounded-full text-xl font-semibold text-black bg-[#cac6c6] hover:bg-[#FFFFFF]">
              Book a Demo
            </button>
          </div>
        </div>
        <div className=" py-20 bg-black text-center">
          <p className="text-5xl md:text-[84px] font-extralight text-white md:px-64">
            KEY <span className="font-bold">BENIFITS</span>
            <br /> THAT SET US APART
          </p>
        </div>
        <div className="px-4">
          <div className=" flex flex-col-reverse lg:flex-row justify-center items-center mb-14 gap-6">
            <div className="px-12  lg:w-[480px]  py-10 border border-white">
              <p className=" text-3xl md:text-4xl  font-bold text-white">
                Save Up to <br /> <span className="text-blue-500">90%</span> on
                <br /> Withdrawal Fees
              </p>
              <p className="text-white mt-3 leading-7  ">
                Save time and money by batching withdrawals from multiple
                callback addresses, paying just one transaction fee.
              </p>
            </div>
            <img src={landinging} className="w-[520px] rounded-xl" alt="img" />
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center mb-14 gap-6">
            <div className="px-12 lg:w-[480px]  py-10 border border-white">
              <p className="text-4xl  font-bold text-white">
                ACCURATE <br />{" "}
                <span className="text-blue-500">FIXED-RATE</span> <br />
                INVOICING
              </p>
              <p className="text-white mt-3 leading-7 ">
                Save time and money by batching withdrawals from multiple
                callback addresses, paying just one transaction fee.
              </p>
            </div>
            <img src={landinging} className="w-[520px] rounded-xl" alt="img" />
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center  gap-6">
            <div className="px-12  lg:w-[480px]  py-10 border border-white">
              <p className="text-4xl w-72 font-bold text-white">
                <span className="text-blue-500">INSTANT</span> TRANSACTION
                VERIFICATION
              </p>
              <p className="text-white mt-3 leading-7 ">
                See incoming deposits within seconds, not minutes. No more
                waiting for blockchain confirmations.
              </p>
            </div>
            <img src={landinging} className="w-[520px] rounded-xl" alt="img" />
          </div>
        </div>
        <div className="py-20 px-8 md:px-24 grid grid-cols-1 md:grid-cols-2  gap-6">
          <div className=" py-8 px-12 border border-[#938b8b] text-white ">
            <p className="font-bold text-md">FIAT CONVERSION MADE EASY</p>
            <p className="text-[13px] pt-2">
              Accept credit card payments and receive crypto directly in your
              wallet, or convert your crypto earnings into fiat currencies and
              deposit them into your bank.
            </p>
          </div>
          <div className=" py-8 px-12 border border-[#938b8b] text-white ">
            <p className="font-bold text-md">AUTOMATIC FUND RECOVERY</p>
            <p className="text-[13px] pt-2">
              Recovering funds sent to the wrong address on the same chain is as easy as flipping a switch. No waiting, no stress, no support needed.
            </p>
          </div>
          <div className=" py-8 px-12 border border-[#938b8b] text-white ">
            <p className="font-bold text-md">
              MULTI-SIG CUSTODY FOR ENTERPRISES
            </p>
            <p className="text-[13px] pt-2">
              Store your funds with confidence. Our custody services are insured to protect your assets.
            </p>
          </div>
          <div className=" py-8 px-8 md:px-12 border border-[#938b8b] text-white ">
            <p className="font-bold text-md">TELEGRAM PAYMENT BOT</p>
            <p className="text-[13px] pt-2">
              Easy integration with existing e-commerce platforms, accounting software, and point-of-sale systems.
            </p>
          </div>
          <div className=" py-8 px-8 md:px-12 border border-[#938b8b] text-white ">
            <p className="font-bold text-md">TELEGRAM PAYMENT BOT</p>
            <p className="text-[13px] pt-2">
              Easy integration with existing e-commerce platforms, accounting software, and point-of-sale systems.
            </p>
          </div>
          <div className=" py-8 px-8 md:px-12 border border-[#938b8b] text-white ">
            <p className="font-bold text-md">TELEGRAM PAYMENT BOT</p>
            <p className="text-[13px] pt-2">
              Easy integration with existing e-commerce platforms, accounting software, and point-of-sale systems.
            </p>
          </div>
        </div>
        <p className="text-center text-white text-[18px]">Instant, reliable payments for businesses of any size. Lower fees, faster settlements.</p>
        <div className=" flex flex-col md:flex-row  justify-center items-center gap-4 py-5">
          <button className="px-8 py-4 rounded-full text-xl bg-[#1c68f4] hover:bg-[#387EFF] text-white">
            Get Started Now
          </button>
          <button className="px-8 py-4 rounded-full text-xl font-semibold text-black bg-[#cac6c6] hover:bg-[#FFFFFF]">
            Book a Demo
          </button>
        </div>
        <div className="bg-[#080E1B] text-center py-24 ">
          <p className="text-3xl   md:text-7xl text-white font-light leading-24"><span className="text-blue-500 text-6xl md:text-8xl font-semibold">40+</span>
            <span className="font-bold">CRYPTOCURRENCIES</span> <br />
            ACCEPTED FOR PAYMENTS</p>
        </div>
        <div className=" pt-12 md:pt-24 text-center text-white">
          <p className="text-4xl md:text-7xl font-light leading-20"> <span className="font-bold">SOLUTIONS</span> <br />
            FOR KEY MARKETS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center   ">
          <div className="md:mt-24 ">
            <div className=" px-10 md:px-18 py-16 border border-white mt-44 mb-8 text-white">
              <p className="text-4xl md:text-5xl ">LUXURY GOODS</p>
              <ul className="text-left list-disc mt-6 leading-8 text-lg font-light md:w-[400px]">
                <li>Accept cryptocurrencies for high-value purchases online or in-store</li>
                <li>Serve a global, privacy-conscious clientele with secure, fast settlement and minimal data sharing</li>
                <li>Reduce card issues on high-ticket sales - no card chargebacks and fewer international card declines</li>
              </ul>
            </div>
            <div className="px-10 md:px-18 py-16     bg-[#080E1B] text-white">
              <p className="text-4xl md:text-5xl ">eCOMMERCE</p>
              <ul className="text-left list-disc mt-6 leading-8 text-lg font-light md:w-[400px]">
                <li>Easily integrate crypto payments via pre-built plugins</li>
                <li>Accept borderless payments instantly without banking delays or high FX costs
                </li>
                <li>Reach new customers by accepting popular cryptocurrencies
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="px-10 md:px-18 py-16   bg-[#080E1B] mt-44 mb-8 text-white">
              <p className="text-4xl md:text-5xl ">iGAMING</p>
              <ul className="text-left list-disc mt-6 leading-8 text-lg font-light md:w-[400px]">
                <li>Reach a global player base with fast crypto deposits and timely payouts</li>
                <li>Serve a global, privacy-conscious clientele with secure, fast settlement and minimal data sharing</li>
                <li>Reduce card issues on high-ticket sales - no card chargebacks and fewer international card declines</li>
              </ul>
            </div>
            <div className="px-10 md:px-18 py-16  border   bg-black text-white">
              <p className="text-4xl md:text-5xl ">FOREX</p>
              <ul className="text-left list-disc mt-6 leading-8 text-lg font-light md:w-[400px]">
                <li>Enable fast, borderless deposits and withdrawals for traders worldwide</li>
                <li>Serve a global, privacy-conscious clientele with secure, fast settlement and minimal data sharing</li>
                <li>Reduce card issues on high-ticket sales - no card chargebacks and fewer international card declines</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-24 px-18 bg-[#080E1B] md:mt-32 ">
          <p className="text-4xl md:text-7xl text-white font-light">READY TO SPEAK <br />
           <span className="font-bold">TO THE EXPERTS?</span> </p>
           <p className="text-center text-white font-light text-xl mt-8">Connect with our team to explore how crypto payments can expand your business.</p>
            <button className="px-8 mt-6 py-4 rounded-full text-xl bg-[#1c68f4] hover:bg-[#387EFF] text-white">
          Get Started Now
        </button>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Clients;
