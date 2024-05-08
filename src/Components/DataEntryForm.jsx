

const DataEntryForm = () => {
    return (
        <div>
            <div className="py-16">

                <div className="w-full p-8 lg:w-3/5 mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with Social Icons</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>


                    <form>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' required />
                        </div>




                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                        </div>
                    </form>




                    <div className="mt-4 flex items-center justify-between">
                        {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
                        {/* <a href="#" className="text-xs text-gray-500 uppercase">or registration</a> */}
                        {/* <span className="border-b w-1/5 md:w-1/4"></span> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DataEntryForm;