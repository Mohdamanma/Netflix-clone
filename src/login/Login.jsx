import React,{useState,useEffect}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
    const  userCredential= await signInWithEmailAndPassword (auth, email, password) ;
        console.log(userCredential);   
        const user = userCredential.user;
        localStorage.setItem("token",user.accessToken);
        localStorage.setItem("user",JSON.stringify(user));
        
        navigate("/adminpage")
        } catch (err) {
            console.error(err);
            alert(err.message);
        }

}

    const googleProvider = new GoogleAuthProvider();
    const logGoogleUser = async () => {
        const response = await signInWithPopup(auth, googleProvider);
        console.log(response);
        if (!response) {
            console.log("error")
        }
        navigate("/adminpage")
    }

    return (
        <div>
            <section class="bg-black-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className='text-red-700 h-30  text-2xl flex items-center mb-6  font-semibold dark:text-white'>

                        <h1 className=" w-30 text-red-700 h-30  text-6xl flex items-center   font-semibold dark:text-white">
                            NETFLIX
                        </h1>
                    </div>

                    <div class="w-full bg-white bg-blend-darken bg-opacity-10  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black-800 dark:border-black-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6">
                                <div class="space-y-4 md:space-y-6">
                                    <div className="block mb-2 text-sm font-medium text-white dark:text-white">
                                        <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="text"
                                            class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={email}
                                            placeholder="E-mail Address"
                                            required
                                        />
                                    </div>
                                    <div >
                                        <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={password}
                                            placeholder="Password"
                                            required
                                        />
                                    </div>

                                   
                                </div>

                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-white dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline text-white ">Forgot password?</a>
                                </div>
                                <Link to={"/adminpage"}>
                                    <button type="submit" className="w-full pt-4 text-white bg-primary-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                </Link>
                                <div className='flex gap-2 bg-white-500 hover:bg-blue-500 border-2 rounded-full py-2'>
                                    <img src="/google-g-icon.png" alt="Google Logo"
                                        class="w-8 mr-14 ml-6 rounded-full" />
                                    <button className='text-white font-normal' onClick={(e) => {
                                        e.preventDefault();
                                        logGoogleUser();
                                    }}>Sign In With Google</button>
                                </div>

                                <p class="text-sm font-light text-white dark:text-gray-400">
                                    Don’t have an account yet?
                                    <Link to={"/Signup"}>
                                        <a href="#" class=" pl-3 font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Login