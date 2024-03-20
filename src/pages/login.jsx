import { Link } from "react-router-dom"

const Login = ()=>{
    return (
        <>
    <Link to="/" className="text-3xl font-bold underline">
    login!
    </Link>
    <section className="w-full flex items-center h-[90vh] px-8 py-16 bg-gray-100 xl:px-8 bg-yellow-50">
    <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">

            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                    Welcome to our Wiki platform
                </h2>

                <img src="https://cdn.devdojo.com/images/september2020/grow-together.png" alt="img">
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                    <form action="<?php echo URLROOT; ?>users/login" method="POST" onsubmit="return validateForm()">
                        <span className="text-red-600" id="errMail"></span>
                        <input type="text" name="email" id="mail" className="block w-full px-4 py-3 mb-3 border border-2  border-yellow-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email address">
                        <input type="password" name="password" id="pass" className="block w-full px-4 py-3 mb-4 border border-2  border-yellow-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Password">
                        <span className="text-red-600" id="errPassword"></span>
                        <div className="block">
                            <button type="submit" name="submitLogin" className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-yellow-400 rounded-lg hover:bg-yellow-300 ease">Log In</button>
                        </div>
                    </form>
                    <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="<?php echo URLROOT; ?>/users/register" class="text-yellow-400 underline">Sign up here</a></p>
                </div>
            </div>

        </div>
    </div>
</section>
        </>
    )
}

export default Login