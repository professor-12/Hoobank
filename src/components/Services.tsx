"use client";

const Services = () => {
    return (
        <div className="md:py-8">
            <div className="rounded-2xl flex items-center justify-between p-8 md:p-12 px-20 text-white bg-gradient-to-br to-[#6d6d6d84] to-100% from-0% from-[#11101d7b]">
                <div className="space-y-7">
                    <h1 className="md:text-5xl text-2xl md:leading-[4rem] tracking-tight font-semibold">
                        Let’s try our service now!
                    </h1>
                    <p className="text-muted md:text-lg md:leading-7 md:w-[55%]">
                        Everything you need to accept card payments and grow
                        your business anywhere on the planet.
                    </p>
                </div>
                <button className="bg-gradient-to-br text-black from-white  to-teal-500 from-0% to-50%  px-8  p-4 rounded-xl">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Services;
