import { Link, useLocation, useNavigate } from "react-router-dom";
import GetAuthData from "../../hooks/authdata";


const Login = () => {
    const {loginUser}=GetAuthData();
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location);
   const from =location.state?.from.pathname||'/'
    const handleSubmit=e=>{
        e.preventDefault()
        const form =e.target
        const email=form.email.value;
        const password=form.password.value
        loginUser(email,password)
        .then(()=>{
            navigate(from)
        }).catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div className="h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="space-y-4 bg-white p-8 rounded-md shadow">
            <h1 className="font-bold capitalize text-2xl">login Page</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
               <input name="email" className="outline-none border p-2 rounded" type="email" placeholder="Enter Your Email" />
               <input name="password" className="outline-none border p-2 rounded" type="password" placeholder="Enter Password"/>
               <button className="w-full bg-gray-900 text-white px-4 py-2" type="submit">Login</button>
            </form>
            <p>You Are User?<Link to="/register">Create User</Link></p>
            </div>
        </div>
    );
};

export default Login;