import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? " border-2 border-teal-800 text-teal-800 font-extrabold" : "relative  border-teal-800 rounded px-4 py-2 inline cursor-pointer font-extrabold before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[3px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ")}>
                    <div className="flex items-center justify-center gap-2">
                        <IoHomeOutline size={18} />
                        <span>Home</span>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink to="/gdfgdf" className={({ isActive }) => (isActive ? " border-2 border-teal-800 text-teal-800 font-extrabold" : "relative  border-teal-800 rounded px-4 py-2 inline cursor-pointer font-extrabold before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[3px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ")}>
                    <div className="flex items-center justify-center gap-2">
                        <IoHomeOutline size={18} />
                        <span>Home</span>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink to="/fdhdfh" className={({ isActive }) => (isActive ? " border-2 border-teal-800 text-teal-800 font-extrabold" : "relative  border-teal-800 rounded px-4 py-2 inline cursor-pointer font-extrabold before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[3px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ")}>
                    <div className="flex items-center justify-center gap-2">
                        <IoHomeOutline size={18} />
                        <span>Home</span>
                    </div>
                </NavLink>
            </li>











        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <p className="text-[18px] font-medium text-white">
                            <h1 className="text-black font-extrabold">
                                <span className="text-rose-600">YOUR</span> LOGO
                            </h1>
                        </p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="rounded-full bg-gradient-to-tr from-teal-600 via-teal-600  to-teal-800 p-1  shadow-lg w-32">
                        <button className="font-bold bg-white px-6 py-1 rounded-full ">
                            Login
                        </button>
                    </div>


                    <div className="flex flex-row items-center justify-start gap-4">
                        <button className="rounded-2xl bg-red-600 px-4 py-2 font-bold leading-none text-white">Logout</button>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navbar;
