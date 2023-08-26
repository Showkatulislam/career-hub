import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    //const location=useLocation();
    const navigate=useNavigate()
    const {createUser}=useContext(AuthContext)
    const handleSubmit=e=>{
        e.preventDefault()
        const form =e.target
        const email=form.email.value;
        const password=form.password.value
        createUser(email,password)
        .then(user=>{
            console.log(user);
            navigate('/')
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div className="h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="space-y-4 bg-white p-8 rounded-md shadow">
            <h1 className="font-bold capitalize text-2xl">Register Page</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
               <input name="email" className="outline-none border p-2 rounded" type="email" placeholder="Enter Your Email" />
               <input name="password" className="outline-none border p-2 rounded" type="password" placeholder="Enter Password"/>
               <button className="w-full bg-gray-900 text-white px-4 py-2" type="submit">Register</button>
            </form>
            <p>Are You Have a Account?<Link to="/login">Please login</Link></p>
            </div>
        </div>
    );
};

export default Register;