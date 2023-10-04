import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
  const location =useLocation()
  const navigate=useNavigate()
  console.log('only location ',location)
    const { singIn}=useContext(AuthContext)
   const loginHandleButton =e=>{
    e.preventDefault()
   // const email=e.target.email.value
   // const password =e.target.password.value 
   // console.log(email,password)
    const form =new  FormData(e.currentTarget)
    const email=form.get('email')
    const password=form.get('password')
    console.log(email,password)
    singIn(email,password)
   .then(result=>{console.log(result.user)})
   .catch(error=>{console.error(error)})

   singIn(email,password)
        .then(result=>{console.log(result.user)})
        .catch(error=>{console.error(error)})
        navigate(location?.state?location.state:'/')
     }




   

    return (
        <div>
          <Navbar></Navbar> 

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="card  w-96">
      
      <form onSubmit={loginHandleButton } >
      <h1 className="text-center">LOGIN NOW</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="mx-2 mb-6 my-2"> Do not have an account ?
        <Link to="/reg" className="text-blue-800 mx-2">Registration</Link></p>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;