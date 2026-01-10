export const AboutImage = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
            <div className="relative box-border caret-transparent text-center md:text-start">
                <img
                    alt="image"
                    src="https://leza-react.envytheme.com/images/about/about3.png"
                    className="text-transparent aspect-[auto_498_/_480] box-border max-w-full text-center w-[498px] md:text-start"
                />
                <div className="absolute bg-[url('https://leza-react.envytheme.com/images/about/about-shape.png')] bg-no-repeat bg-contain bottom-[-50px] box-border caret-transparent h-[200px] text-center w-[200px] bg-center right-0 md:text-start md:right-[60px] md:bottom-0">
                    <div className="box-border caret-transparent text-center mt-[50px]">
                        <h3 className="text-red-500 text-[70px] font-medium box-border caret-transparent leading-[70px] mb-[5px] font-rubik_0b5097">
                            15
                        </h3>
                        <span className="text-neutral-900 text-sm font-medium box-border caret-transparent leading-[21px] font-rubik_0b5097">
                            Years Of Experience
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
