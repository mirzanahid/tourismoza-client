import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import Button from "../Button/Button";

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/"

  const handleForSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPass");
    const photoUrl = form.get("photoUrl");


    if (password === confirmPassword) {
      createUser(email, password)
        .then((result) => {
          console.log(result)
          if(result.user?.uid){
            toast.success('Succefully sign up', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
              });
                navigate(from, ({replace: true}))

          }
        })
        .catch((error) => {
          console.log(error);
          form.reset();
        });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px]">
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleForSignUp} className="card-body w-full ">
            <h2 className="font-heading font-inter text-sub2 text-dark1 text-center">Register Now</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-inter text-sub6 text-dark1">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-inter text-sub6 text-dark1">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-inter text-sub6 text-dark1">
                  Photo Url
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Your photo url"
                className="input input-bordered"
                name="photoUrl"
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
                placeholder="Enter Your password"
                className="input input-bordered"
                name="password"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-inter text-sub6 text-dark1">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm your Password"
                className="input input-bordered"
                name="confirmPass"
              />
              <label className="label">
                <span className="font-inter text-p1 text-dark1">
                  Already have and account?{" "}
                  <Link className="text-primary underline" to={"/login"}>
                    Login
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
            <Button label={"Login"}
              type="submit"
                  className={
                    "font-inter text-sub6 text-white bg-primary border border-primary py-[12px] px-30 hover:bg-transparent hover:text-primary duration-500 w-full"
                  } ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
