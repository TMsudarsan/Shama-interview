import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white py-10 px-5 md:px-8 grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <div className="flex gap-6 w-96 md:w-[700px] lg:w-[1800px] flex-wrap">
                <div className="px-4">
                    <p>FOR BUSINESSES<br />
                        PERSONAL WALLET<br />
                        MERCHANT TOOLS<br />
                        SUPPORTED COINS<br />
                        PREPAID CARDS</p>
                </div>
                <div className="px-4">
                    <p>INTEGRATION GUIDE<br />
                        INTEGRATION OPTIONS<br />
                        API DOCUMENTATION<br />
                        FAQ</p>
                </div>
                <div className="px-4">
                    <p>CONTACT SALES<br />
                        SUPPORT<br />
                        PRIVACY POLICY<br />
                        USER AGREEMENT<br />
                        RESTRICTED JURISDICTIONS<br />
                        COINPAYMENTS LEGACY</p>
                </div>
                <div className=" pl-0 md:pl-20 md:text-left text-center">
                    <p className="font-semibold">Newsletter</p>
                    <p className="text-sm">Stay up to date with the latest news:</p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 w-[240px] md:w-[400px] rounded outline-none border-2 border-white  mt-2"
                    />
                </div>
            </div>
            <p className='text-center text-[12px] md:mt-8 col-span-2 md:col-span-3 lg:col-span-4'>© 2013-2025 CoinPayments Inc. All Rights Reserved. Custodial wallet services and other virtual asset services provided by UAB Star Ventures, PaidInSatoshi Inc. or their partners. UAB Star Ventures, Lvivo str. 25-104, Vilnius LT-09320, Lithuania, contact@uabsv.com PaidInSatoshi Inc., Bloc Office Hub, Fifth Floor, Santa Maria Business District, Panama City, the Republic of Panama. contact@paidinsatoshi.com</p>
        </div>
    )
}

export default Footer
