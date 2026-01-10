export const Copyright = () => {
    return (
        <div className="bg-neutral-900 border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-zinc-800 box-border caret-transparent py-[30px] border-t">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent text-center">
                    <p className="text-stone-300 text-[15px] box-border caret-transparent leading-[27px] md:text-base md:leading-[28.8px]">
                        Copyright © 2026 Healthy Home Loans. Designed and developed by{" "}
                        <a
                            href="https://godivatech.com/"
                            className="text-white text-[15px] font-medium box-border caret-transparent inline-block leading-[27px] md:text-base md:leading-[28.8px] hover:text-red-500 hover:border-red-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Godivatech
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
