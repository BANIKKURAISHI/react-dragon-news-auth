import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";



const Reg = () => {
   
    
    const {registrationButton}=useContext(AuthContext)
    const regHandleButton =e=>{
    e.preventDefault()
   
    const form =new  FormData(e.currentTarget)
    const email=form.get('email')
    const password=form.get('password')
    const photo=form.get('photo')
    const name=form.get('name')
    console.log(email,password,name,photo)

    registrationButton(email,password)
    .then(result=>{console.log(result.user)})
    .catch(error=>{console.error(error)})
    
    }
    return (
        <div>
                    <Navbar></Navbar> 

<div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col">
<div className="card  w-96   ">
<form onSubmit={ regHandleButton } >
    <h1 className="text-center">REGISTRATION NOW</h1>
<div className="form-control">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" name="name" placeholder="name" className="input input-bordered" required />
</div>

<div className="form-control">
<label className="label">
<span className="label-text">Photo Url</span>
</label>
<input type="text"  name="photo" placeholder="photo url" className="input input-bordered" />
</div>


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
<button className="btn btn-primary">Register</button>
</div>
</form>
<p className="mx-2 mb-6 text-2xl my-2"> Already an account
<Link to="/in" className="text-blue-800 mx-2">Login</Link></p>
</div>
</div>
</div>
        </div>
    );
};

export default Reg;