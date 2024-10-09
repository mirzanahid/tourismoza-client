import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logInUser =(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut =()=>{
   return signOut(auth)
}

//  social media login 



const loginWithGoogle=()=>{
  return signInWithPopup(auth,googleProvider)
}

useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
         console.log('current value of the current user', currentUser)
         setUser(currentUser)
    })
    return ()=>{
        unSubscribe()
    }
},[])

  const data = {
    createUser,
    logInUser,
    logOut,
    loginWithGoogle,
    user
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
