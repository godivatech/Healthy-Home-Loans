export const LoanCalculator = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
            <div className="bg-primary box-border caret-transparent px-5 py-[30px] md:px-[45px] md:py-[50px]">
                <div className="box-border caret-transparent text-center mb-[30px] md:mb-[35px]">
                    <span className="text-white box-border caret-transparent">
                        Calculate your rate
                    </span>
                    <h3 className="text-white text-xl font-medium box-border caret-transparent leading-6 mt-2.5 font-rubik_0b5097 md:text-4xl md:leading-[43.2px]">
                        How much do you need?
                    </h3>
                </div>
                <form className="box-border caret-transparent">
                    <div className="box-border caret-transparent mb-4">
                        <label className="text-white box-border caret-transparent inline-block capitalize mb-2 font-rubik_0b5097">
                            Loan Amount
                        </label>
                        <input
                            placeholder="₹ 1,00,000"
                            type="text"
                            className="text-zinc-600 bg-white bg-clip-padding box-border caret-transparent block h-[50px] w-full px-3 py-1.5"
                        />
                    </div>
                    <div className="box-border caret-transparent mb-4">
                        <label className="text-white box-border caret-transparent inline-block capitalize mb-2 font-rubik_0b5097">
                            Loan Tenure
                        </label>
                        <select className="text-zinc-600 appearance-none bg-white bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%3e%3cpath%20fill=%27none%27%20stroke=%27%23343a40%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%272%27%20d=%27m2%205%206%206%206-6%27/%3e%3c/svg%3e)] bg-[length:12px_8px] bg-[right_12px_center] bg-no-repeat caret-transparent block h-[50px] w-full pl-3 pr-9 py-1.5">
                            <option
                                value="5"
                                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                            >
                                1 month
                            </option>
                            <option
                                value="1"
                                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                            >
                                2 month
                            </option>
                            <option
                                value="2"
                                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                            >
                                3 month
                            </option>
                            <option
                                value="0"
                                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                            >
                                4 month
                            </option>
                            <option
                                value="3"
                                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                            >
                                6 month
                            </option>
                            <option
                                value="3"
                                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                            >
                                1 Year
                            </option>
                            <option
                                value="0"
                                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                            >
                                2 Years
                            </option>
                            <option
                                value="3"
                                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                            >
                                3 Years
                            </option>
                        </select>
                    </div>
                    <div className="box-border caret-transparent mb-4">
                        <label className="text-white box-border caret-transparent inline-block capitalize mb-2 font-rubik_0b5097">
                            Interest Rate
                        </label>
                        <input
                            placeholder="8.5%"
                            type="text"
                            className="text-zinc-600 bg-white bg-clip-padding box-border caret-transparent block h-[50px] w-full px-3 py-1.5"
                        />
                    </div>
                    <div className="box-border caret-transparent mb-4">
                        <label className="text-white box-border caret-transparent inline-block capitalize mb-2 font-rubik_0b5097">
                            Loan Term
                        </label>
                        <input
                            placeholder="6 months"
                            type="text"
                            className="text-zinc-600 bg-white bg-clip-padding box-border caret-transparent block h-[50px] w-full px-3 py-1.5"
                        />
                    </div>
                    <div className="box-border caret-transparent mb-4">
                        <label className="text-white box-border caret-transparent inline-block capitalize mb-2 font-rubik_0b5097">
                            Total You Will Pay
                        </label>
                        <input
                            placeholder="₹ 1,12,000"
                            type="text"
                            className="text-zinc-600 bg-white bg-clip-padding box-border caret-transparent block h-[50px] w-full px-3 py-1.5"
                        />
                    </div>
                    <div className="box-border caret-transparent mt-[25px]">
                        <button
                            type="submit"
                            className="relative text-white text-[15px] font-medium bg-primary caret-transparent leading-[22.5px] opacity-65 pointer-events-none text-center align-middle w-full z-[1] overflow-hidden px-[30px] py-[15px] rounded-[5px] md:text-base md:leading-6 hover:bg-neutral-900 border border-white/20"
                        >
                            Apply for this loan{" "}
                            <span className="absolute text-[15px] bg-neutral-900 box-border caret-transparent block h-0 leading-[22.5px] w-0 z-[-1] rounded-[5px] md:text-base md:leading-6"></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
