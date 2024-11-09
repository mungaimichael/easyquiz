const Loader = () => {
    return (
        <div className="inline-block">
            <svg
                viewBox="25 25 50 50"
                className="w-[3.25em] origin-center animate-rotate4"
            >
                <circle
                    r="20"
                    cy="50"
                    cx="50"
                    className="fill-none stroke-blue-500 stroke-2 animate-dash4"
                    style={{
                        strokeLinecap: 'round',
                        strokeDasharray: '1, 200',
                        strokeDashoffset: '0',
                    }}
                />
            </svg>
        </div>
    );
};

export default Loader;