

const Button = () => {
    return (
        <div>
            <div className="flex gap-3 max-w-sm">
                <button className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800">Cancel</button>
                <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">Confirm</button>
                my website color code
            </div>

            <div className="flex rounded-full mx-auto bg-gradient-to-tr from-teal-800 via-teal-600 to-teal-800 p-1 shadow-lg w-36">
                <button className="flex-1 font-bold text-xl bg-white px-6 py-1 rounded-full">
                    Welcome
                </button>
            </div>
        </div>
    );
};

export default Button;