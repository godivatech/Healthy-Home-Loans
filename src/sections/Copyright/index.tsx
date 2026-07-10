export const Copyright = () => {
    return (
        <div className="bg-neutral-900 border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-zinc-800 box-border caret-transparent py-[30px] border-t">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-stone-300 text-base box-border caret-transparent leading-[27px] md:text-lg md:leading-[28.8px] text-center md:text-left">
                        Copyright © 2026 Healthy Home Loans. Designed and developed by{" "}
                        <a
                            href="https://godivatech.com/"
                            className="text-white text-base font-medium box-border caret-transparent inline-block leading-[27px] md:text-lg md:leading-[28.8px] hover:text-primary hover:border-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Godivatech
                        </a>
                    </p>
                    <div className="flex items-center gap-4 text-stone-300 text-[15px] font-medium">
                        <a href="/privacy-policy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <span className="text-zinc-600">|</span>
                        <a href="/terms-and-conditions" className="hover:text-primary transition-colors">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
