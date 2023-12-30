const data = [
    {
        svg: "/Star.b8bf87ea.svg",
        header: "Rewards",
        body: "  The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
        svg: "/Shield.6d9e87e5.svg",
        header: "100% Secured",
        body: "We take proactive steps make sure your information and transactions are secure.",
    },
    {
        svg: "/Send.454b3199.svg",
        header: "Rewards",
        body: "A balance transfer credit card can save you a lot of money in interest charges.",
    },
];

const GetStarted = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:space-y-0 space-y-9 lg:gap-20 py-12">
            <div className="text-white space-y-5">
                <h1 className="text-5xl font-semibold lg:w-[90%] leading-[4.1rem]">
                    You do the business, we’ll handle the money.
                </h1>
                <p className="text-muted text-lg lg:w-[70%] leading-8">
                    With the right credit card, you can improve your financial
                    life by building credit, earning rewards and saving money.
                    But with hundreds of credit cards on the market.
                </p>
                <button className="bg-gradient-to-br text-black from-white to-teal-500 from-0% to-50%  px-8  p-4 rounded-xl">
                    Get Started
                </button>
            </div>
            <div className="space-y-5">
                {data.map((item) => (
                    <div className="flex  space-x-4 transition-all duration-150 hover:bg-gradient-to-tr from-[#6d6d6d] to-[#11101d]  lg:px-5  p-4 rounded-2xl">
                        <div>
                            <div className="flex bg-[#171129]  h-[4rem] rounded-full w-[4rem] items-center justify-center">
                                <img src={item.svg} className="" alt="" />
                            </div>
                        </div>
                        <div className="flex mt-3 flex-col space-y-3 text-white">
                            <h2 className="text-xl font-semibold">
                                {item.header}
                            </h2>
                            <p className="text-muted">{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetStarted;
