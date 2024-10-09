import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <div>
      <ToastContainer />
        <NavBar></NavBar>
        <Outlet></Outlet>
    
    </div>
  );
};

export default Root;
