type MobileMenuToggleProps = {
    onClick: () => void;
};

export const MobileMenuToggle = ({ onClick }: MobileMenuToggleProps) => {
    return (
        <button
            type="button"
            className="text-black/70 text-xl bg-zinc-100 caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-center p-2.5 md:hidden md:min-h-0 md:min-w-0"
            onClick={onClick}
        >
            <span className="relative bg-primary box-border caret-transparent block h-0.5 origin-[10%_10%] w-7 left-0"></span>
            <span className="bg-primary box-border caret-transparent block h-0.5 w-7 my-1.5"></span>
            <span className="relative bg-primary box-border caret-transparent block h-0.5 origin-[10%_90%] w-7 left-0"></span>
        </button>
    );
};
