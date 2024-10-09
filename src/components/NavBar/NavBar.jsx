import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";
import Button from "../Button/Button";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleForLogOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      <NavLink to={'/'} className={'font-inter text-sub4 text-dark2'}>Home</NavLink>
      <NavLink className={'font-inter text-sub4 text-dark2 ml-20'}>All Tourists Spot</NavLink>
      <NavLink to={'/addTouristSpot'} className={'font-inter text-sub4 text-dark2 ml-20'}>Add Tourists Spot</NavLink>
      <NavLink className={'font-inter text-sub4 text-dark2 ml-20'}>My List</NavLink>
    </>
  );

  return (
    <div className="container mt-20">
      <div className="navbar  bg-base-100">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <img className="w-[200px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  ) : (
                    <FaCircleUser className="w-full h-full" />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>{user?.displayName || "name"}</a>
                </li>
                <li>
                  <Button
                    onClick={handleForLogOut}
                    label={"Log Out"}
                    className={"font-inter text-sub3 text-dark2"}
                  ></Button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to={"/login"}>
                <Button
                  label={"Login"}
                  className={
                    "font-inter text-sub6 text-white bg-primary border border-primary py-[12px] px-30 hover:bg-transparent hover:text-primary duration-500"
                  }
                ></Button>
              </Link>
              <Link to={"/signup"}>
                <Button label={"Sign Up"}
                  className={
                    "font-inter text-sub6 text-white bg-primary border border-primary py-[12px] px-30 hover:bg-transparent hover:text-primary duration-500 ml-20"
                  } ></Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
