import React from "react";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container grid-cols-2 md:grid h-[100vh] overflow-hidden block">
                <div className="bg-[#7E7E7E] h-full hidden md:block">
                    <img src="/images/und logo 1.png" alt="" />
                </div>
                {/* ---------right-part--------- */}
                <div className="bg-white h-full px-[35px] py-[30px] flex flex-col gap-11">
                    <div className="close-icon">
                        <img src="/images/cross btn 1.svg" alt="" />
                    </div>
                    <div className="heading my-1">
                        <h2 className=" font-normal font-[average] text-[24px]">Login</h2>
                    </div>
                    <div className="create-acc-text text-[14px] font-[average]">
                        <span className="text-[#3C4852]">or</span>&nbsp;<span className="text-[#08BD80]">create your account</span>
                    </div>
                    <div className="line w-[96px] h-[0] border-t border-dashed  border-[#08BD80]"></div>
                    <div className="input flex gap-3 rounded-[5px] px-[20px] w-[464px] h-[53px] border bg-[#FCFCFC] border-white shadow-md focus:border-white focus:white">
                        <div className=" flex  h-full justify-center items-center gap-3  " >
                            <img src="/images/flag 1.svg" alt="" className="" />
                            <p className="font-[average]">+91</p>
                            <img src="/images/XMLID_225_.svg" alt="" />
                        </div>
                        <input type="password" id="password" class=" outline-none w-[80%] h-full placeholder:text-[#3C4852] placeholder:text-[16px]" required placeholder="Enter Your Mobile Number" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="login-btn flex justify-center items-center">
                            <button className="bg-[#F4F6F8] w-[104px] h-[40px]  text-[#7A8B94] text-[16px]">Login</button>
                        </div>
                        <div className="right-part flex flex-col gap-[6px]">
                            <p className="text-[12px] text-[#3C4852] font-normal">Continue with email</p>
                            <div className="line w-[106px] h-[0] border-b border-dashed border-[#3C4852] inline-block"></div>
                        </div>
                    </div>
                    <div className="having-trouble">
                        <p className="text-[#7A8B94] text-[12px] font-normal">Having trouble?</p>
                    </div>
                    <div className="end mt-2">
                        <p className="text-[#7A8B94] text-[12px] font-normal">Please contact help@unacademy.com for further support</p>
                    </div>
                </div>
            </div>


        </>
    )
};

export default Sidebar;







