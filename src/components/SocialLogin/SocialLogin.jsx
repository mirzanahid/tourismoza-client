import google from "../../assets/google.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleForGoogleSignUp = () => {
    loginWithGoogle()
      .then((result) => {
        if (result.user?.uid) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error, errorCode, errorMessage, credential, email);
      });
  };

  return (
    <div>
      <div
        onClick={handleForGoogleSignUp}
        className=" w-full border border-third flex justify-center items-center gap-2 py-3 hover:bg-third  duration-500 cursor-pointer"
      >
        <img className="w-6 inline-block" src={google} alt="" />
        <span className="font-inter text-sub6 text-dark1">
          Continue with Google
        </span>
      </div>
    </div>
  );
};

export default SocialLogin;
