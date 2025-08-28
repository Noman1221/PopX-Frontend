import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function inputHandler(e) {
        e.preventDefault(); // prevent default form behavior

        if (email === "" || password === "") {
            alert("Please fill in both Email and Password");
            return;
        }

        // If both fields are filled, navigate to Profile page
        navigate("/Profile");
    }

    return (
        <div className='w-screen h-screen lg:flex justify-center'>
            <section className='border border-gray-300 bg-gray-50 lg:h-lvh h-screen lg:w-1/4 w-full'>
                <section className='p-5 pt-10'>
                    <h1 className='text-3xl font-semibold'>Signin to your Popx Account</h1>
                    <h3 className='text-base text-neutral-400 font-medium'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores harum aliquid
                    </h3>

                    <form onSubmit={inputHandler} className='flex gap-2 flex-col my-5'>
                        <div className="w-full mb-3 h-12 relative flex rounded-lg">
                            <input
                                required
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md"
                                id="email"
                                type="email"
                            />
                            <label
                                className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                        </div>

                        <div className="w-full h-12 relative flex rounded-lg">
                            <input
                                required
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md"
                                id="password"
                                type="password"
                            />
                            <label
                                className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
                                htmlFor="password"
                            >
                                Password
                            </label>
                        </div>

                        <button
                            type="submit"
                            className='w-full py-3 font-semibold cursor-pointer rounded-lg text-white bg-[#6c25ff]'
                        >
                            Login
                        </button>
                    </form>
                </section>
            </section>
        </div>
    );
};

export default LoginPage;
