const Hero = () => {
    return (
        <div className="flex space-y-12 lg:space-y-0 relative lg:flex-col xl:flex-row flex-col md:flex-col pb-32 lg:pt-[6rem]">
            <div className="mt-20 space-y-7 flex-1">
                <div className="bg-discount-gradient md:space-x-3 flex rounded-xl  md:w-[22.5rem] p-2 md:x-3 items-center  text-white">
                    <img src="/Discount.61d9dc08.svg" alt="" />
                    <span className="md:text-lg tracking-tight">
                        20%{" "}
                        <span className="text-muted">Discount For </span>1
                        Month <span className="">Account</span>
                    </span>
                </div>
                <div className="md:w-[50rem] w-full md:relative  font-semibold">
                    <h1 className="text-5xl md:text-7xl lg:leading-[6rem]  text-white">
                        The Next{" "}
                        <span className="flex">
                            <span className="text-gradient block">
                                Generation
                            </span>
                        </span>{" "}
                        Payment Method
                    </h1>
                    <p className="md:w-[32rem] w-full font-normal mt-12 text-muted leading-7 text-lg">
                        With the right credit card, you can improve your
                        financial life by building credit, earning rewards and
                        saving money. But with hundreds of credit cards on the
                        market.
                    </p>
                    <div className="bg-[#7de7eb] right-32 text-white absolute p-[2px] bottom-0 md:-top-2  h-32 flex items-center justify-center w-32 rounded-full">
                        <div className="bg-darkGray flex items-center justify-center w-full h-full rounded-full">
                            <span className="text-gradient">
                                <p className="flex space-x-2">
                                    Get
                                    <span>
                                        <img
                                            src="/arrow-up.012ff21b.svg"
                                            alt=""
                                        />
                                    </span>
                                </p>
                                Started
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="lg:relative flex-2">
                  <div className="lg:absolute bg-gradient-to-tl rounded-full blur-[900px] -z-[0] from-[#f4c4f3] from-0% t0-100% md:w-[20rem]   to-[#fc67fa]" />
                  <div className="right-20 top-20  absolute bg-gradient-to-tl rounded-full blur-[300px] -z-[0] from-[#b7a0f8] from-0% t0-100% w-[20rem] h-[20rem]  to-[#214d76]" />
                  <div className="md:relative  -right-[4.8rem]">
                      <img
                          src="/robot.352cd501.png"
                          className="h-full w-full"
                          alt=""
                      />
                  </div>
            </div>
        </div>
    );
};

export default Hero;

//   background: linear-gradient(90deg,#f4c4f3 0%,#fc67fa 100%);
//     filter: blur(900px)
