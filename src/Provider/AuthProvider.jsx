import { createContext } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";



export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
     const registrationButton=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
     }



     const singIn=(email,password)=>{
      setLoading(true)
  
        return  signInWithEmailAndPassword(auth, email, password)  }
       

    const logOut=()=>{
      setLoading(true)
          return  signOut(auth)
    }

     useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
              console.log('this is un subscribe ',currentUser)
              setLoading(false)
          });

          return()=> {
            unSubscribe()
          }}
     ,[])

    const value ={user,registrationButton,singIn,logOut,loading}
 return (
     <AuthContext.Provider value={value}>
       {children}
     </AuthContext.Provider>
       
    );
};
AuthProvider.propTypes={
    children :PropTypes.node
}
export default AuthProvider;
