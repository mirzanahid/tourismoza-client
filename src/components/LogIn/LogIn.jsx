import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";
import Button from "../Button/Button";

const LogIn = () => {
  const { logInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showError, setShowError] = useState("");
  const handleForLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    logInUser(email, password)
      .then((result) => {
        if (result?.user?.uid) {
          toast.success("Successfully login", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/invalid-credential") {
          setShowError(
            "The email or password you entered doesn't match."
          );
        }

        else if(error.code === "auth/invalid-email") {
          setShowError(
            "The email you entered is invalid."
          );
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px]">
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleForLogIn} className="card-body w-full ">
            <h2 className="font-inter text-sub2 text-center text-dark1">Login Now</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-inter text-sub6 text-dark1">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-inter text-sub6 text-dark1">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <span className="font-paragraph text-p1 text-red-600">
                 {showError}
                  
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <Button label={"Login"}
              type="submit"
                  className={
                    "font-inter text-sub6 text-white bg-primary border border-primary py-[12px] px-30 hover:bg-transparent hover:text-primary duration-500 w-full"
                  } ></Button>

              <label className="label">
                <span className="font-inter text-p1 text-dark1">
                  Dont have an account?{" "}
                  <Link className="text-primary underline" to={"/signup"}>
                    Sign Up
                  </Link>
                </span>
              </label>
              <p className="font-heading text-sub2">or</p>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
