const data = [
    {
        photo: "/people01.a772086b.png",
        details:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        status: "Founder & Leader",
    },
    {
        photo: "/people02.ee8ce82b.png",
        details:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        status: "Founder & Leader",
    },
    {
        photo: "/people03.d9f4f98a.png",
        details:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        status: "Founder & Leader",
    },
];
const AboutsUs = () => {
    return (
        <section className="py-40">
            <div className="text-white lg:grid-flow-col space-y-3 md:space-y-0 text-center md:text-left grid items-center">
                <h1 className="md:text-5xl text-4xl font-semibold tracking-wide md:w-[70%] leading-12 md:leading-[4.5rem]">
                    What people are saying about us
                </h1>
                <p className="md:w-[70%] text-lg text-muted">
                    Everything you need to accept card payments and grow your
                    business anywhere on the planet.
                </p>
            </div>

            <div className="lg:grid grid-cols-3 py-12 gap-12 w-[80%] mx-auto">
                {data.map((item) => (
                    <div key={item.photo} className="text-white z-[1] rounded-2xl hover:bg-gradient-to-tl to-[#6d6d6d84] from-[#11101d7b]  py-10 p-5 space-y-7">
                        <h1 className="text-gradient text-7xl">''</h1>
                        <p className="leading-9 text-lg">
                            Money is only a tool. It will take you wherever you
                            wish, but it will not replace you as the driver.
                        </p>

                        <div className="flex space-x-5">
                            <div>
                                <img className="w-12" src={item.photo} alt="" />
                            </div>
                            <div>
                                <h1 className="text-lg">{item.name}</h1>
                                <p>{item.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="bg-gradient-to-r z-[0] absolute  right-0 h-[50%] blur-[123px] p-2 w-[20%] from-[#bca5ff00] from-0% to-100% to-[#214d76] " />
            </div>

            <div className="md:grid flex flex-wrap justify-center w-[90%] gap-5 py-12 mx-auto items-center md:grid-cols-4 grid-cols-3 ">
                <div className="hover:bg-white">
                    <img
                        className="md:h-12 h-7"
                        src="/airbnb.ac0ba47e.png"
                        alt=""
                    />
                </div>
                <div className="hover:bg-white">
                    <img
                        className="md:h-12 h-7"
                        src="/binance.ef218256.png"
                        alt=""
                    />
                </div>
                <div className="hover:bg-white">
                    <img
                        className="md:h-12 h-7"
                        src="/coinbase.fd06c89f.png"
                        alt=""
                    />
                </div>
                <div className="hover:bg-white">
                    <img
                        className="md:h-12 h-7"
                        src="/dropbox.fb49a0e9.png"
                        alt=""
                    />
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default AboutsUs;
