const Billing = () => {
    return (
        <section className="">
            <div className="lg:grid grid-flow-row-dense items-center  lg:grid-cols-2 space-y-9 lg:gap-20 py-12">
                <div>
                    <img src="/bill.fd47dad8.png" alt="" />
                </div>
                <div className="text-white space-y-5">
                    <h1 className="text-5xl font-semibold lg:w-[90%] leading-[4.1rem]">
                        Easily control your billing & invoicing.
                    </h1>
                    <p className="text-muted text-lg lg:w-[70%] leading-8">
                        Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                        ametodio aenean neque. Fusce ipsum orci rhoncus
                        aliporttitor integer platea placerat.
                    </p>
                    <div>
                        <button type="button">
                            <img src="/apple.994d47a8.svg" alt="" />
                        </button>
                        <button type="button">
                            <img src="/apple.994d47a8.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between items-center flex-row-reverse">
                <div>
                    <img src="/card.af071def.png" alt="" />
                </div>
                <div className="text-white space-y-5">
                    <h1 className="text-5xl font-semibold lg:w-[90%] leading-[4.1rem]">
                        Find a better card deal in few easy steps.
                    </h1>
                    <p className="text-muted text-lg lg:w-[70%] leading-8">
                        Arcu tortor, purus in mattis at sed integer faucibus.
                        Aliquet quis aliquet eget mauris tortor.ç Aliquet
                        ultrices ac, ametau.
                    </p>
                    <button className="bg-gradient-to-br text-black from-white to-teal-500 from-0% to-50%  px-8  p-4 rounded-xl">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Billing;
