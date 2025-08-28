import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        password: "",
        company: "",
        agency: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id || e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, number, email, password, company, agency } = formData;
        if (!name || !number || !email || !password || !company || !agency) {
            setError("Please fill in all fields");
            return;
        }

        setError(""); // clear error if valid
        navigate("/Profile");
    };

    return (
        <div className='w-screen h-screen lg:flex justify-center'>
            <section className='border border-gray-300 bg-gray-50 lg:h-lvh h-screen lg:w-1/4 w-full'>
                <section className='p-5 pt-10'>
                    <h1 className='text-3xl font-semibold'>Create your PopX Account</h1>
                    <h3 className='text-base text-neutral-400 font-medium'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores harum aliquid
                    </h3>

                    <form onSubmit={handleSubmit} className='flex gap-2 flex-col my-5'>
                        <div className="w-full mb-3 h-12 relative flex rounded-lg">
                            <input
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md"
                                type="text"
                            />
                            <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] duration-150" htmlFor="name">
                                Full Name
                            </label>
                        </div>

                        <div className="w-full mb-3 h-12 relative flex rounded-lg">
                            <input
                                id="number"
                                value={formData.number}
                                onChange={handleChange}
                                className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md"
                                type="text"
                            />
                            <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] duration-150" htmlFor="number">
                                Phone Number
                            </label>
                        </div>

                        <div className="w-full mb-3 h-12 relative flex rounded-lg">
                            <input
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md"
                                type="email"
                            />
                            <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] duration-150" htmlFor="email">
                                Email Address
                            </label>
                        </div>

                        <div className="w-full mb-3 h-12 relative flex rounded-lg">
                            <input
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md"
                                type="password"
                            />
                            <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] duration-150" htmlFor="password">
                                Password
                            </label>
                        </div>

                        <div className="w-full mb-3 h-12 relative flex rounded-lg">
                            <input
                                id="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="peer w-full outline-none px-4 text-base rounded-lg bg-white border border-[#4070f4] focus:shadow-md"
                                type="text"
                            />
                            <label className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] duration-150" htmlFor="company">
                                Company Name
                            </label>
                        </div>

                        <label className="block text-lg font-medium text-gray-700 mb-2">Are you an agency?</label>
                        <div className="flex space-x-6">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="yes"
                                    checked={formData.agency === "yes"}
                                    onChange={handleChange}
                                />
                                <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    checked={formData.agency === "no"}
                                    onChange={handleChange}
                                />
                                <span>No</span>
                            </label>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            className='w-full py-3 font-semibold cursor-pointer rounded-lg text-white bg-[#6c25ff]'
                        >
                            Create Account
                        </button>
                    </form>
                </section>
            </section>
        </div>
    );
};

export default SignupPage;
