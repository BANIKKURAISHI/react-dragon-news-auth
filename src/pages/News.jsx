import {  useParams } from "react-router-dom";
import Header from "./Shared/Header/Header";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import Navbar from "./Shared/Navbar/Navbar";




const News = () => {
    const {id}=useParams()
   
    return (
        <div className="">
            <Header></Header>
            <Navbar></Navbar>
           <div className="grid  md:grid-cols-4" >
             <div className="grid md:col-span-3">
               <h2 className="text-5xl">New Details</h2>
               <h2>{id}</h2>
             </div>
             <div >
              <RightSideNav></RightSideNav>
             </div>
           </div>
        </div>
    );
};

export default News;