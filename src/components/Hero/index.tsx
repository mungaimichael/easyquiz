export default  function Hero () {
    return (
        <div
        className=" h-full w-full flex flex-col justify-around items-center "
        >
            <div
                className="h-full w-full flex flex-col gap-5 justify-start items-center"
            >
                <h3 className=" text-secondary font-heading font-bold  capitalize text-2xl  text-center ">
                    Fun and easy games to play and enjoy
                </h3>
                <p className="  lowercase text-md  text-center ">
                    easy to use and fun to play
                </p>
                <div
                className="w-full flex justify-center gap-4"
                >
                    <button className="bg-accent text-text py-3 px-8 rounded-lg font-body">
                        Get Started
                    </button>
                    <button className="bg-secondary text-accent rounded-lg py-3 px-8 font-body ">
                        Learn More</button>
                </div>
                <div
                    className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 place-items-center"}
                >
                    <div
                        className="w-5/6 h-5/6 rounded-xl flex justify-center items-center bg-secondary"
                    >
                        <img
                            src="/images/1.png"
                            alt="1"
                            className="w-5/6 h-full object-contain"
                        />
                    </div>
                    <div
                        className="w-5/6 h-5/6 rounded-xl flex justify-center items-center bg-accent"
                    >
                        <img
                            src="/images/2.png"
                            alt="2"
                            className="w-5/6 h-full object-contain"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}