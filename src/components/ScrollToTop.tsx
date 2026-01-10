export const ScrollToTop = () => {
    return (
        <div className="fixed text-white text-[22px] bg-neutral-900 shadow-[rgba(0,0,0,0.1)_0px_3px_10px_0px] box-border caret-transparent hidden h-[45px] leading-[33px] text-center w-[45px] z-[999] rounded-[50%] right-5 bottom-5 hover:bg-red-500 hover:shadow-[rgba(50,50,93,0.11)_0px_4px_6px_0px,rgba(0,0,0,0.08)_0px_1px_3px_0px]">
            <i className="absolute text-3xl box-border caret-transparent block leading-[30px] mx-auto top-2/4 inset-x-0 font-boxicons before:accent-auto before:box-border before:caret-transparent before:text-white before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-boxicons"></i>
        </div>
    );
};
