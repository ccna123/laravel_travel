import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

const Login = () => {
    const { data, processing, errors, setData, post } = useForm({
        email: "",
        password: "",
    });

    const handleEmailChange = (e) => {
        setData("email", e.target.value);
    };

    const handlePasswordChange = (e) => {
        setData("password", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };
    return (
        <div className="bg-slate-200 w-[80%] mx-auto rounded-md py-4 mt-20">
            <form className="max-w-sm mx-auto">
                <p className="font-bold text-2xl mb-3 text-center">Login</p>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                        value={data.email}
                        onChange={handleEmailChange}
                        type="email"
                        id="website-admin"
                        placeholder="Email"
                        className={`rounded-none rounded-e-lg ${
                            errors.email
                                ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                : "bg-gray-50 border border-gray-300 text-gray-900"
                        }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                    />
                </div>
                <div className="flex my-4">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className="fa-solid fa-lock" />
                    </span>
                    <input
                        value={data.password}
                        onChange={handlePasswordChange}
                        type="password"
                        id="website-admin"
                        placeholder="Password"
                        className={`rounded-none rounded-e-lg ${
                            errors.password
                                ? "bg-red-300 border-red-300 placeholder:text-red-500"
                                : "bg-gray-50 border border-gray-300 text-gray-900"
                        }   flex-1 min-w-0 w-full text-sm p-2.5 focus:outline-none`}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-400 w-full p-2 rounded-md  hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150"
                >
                    <p className="text-white font-bold">Login</p>
                </button>
                {Object.keys(errors).length > 0 ? (
                    <p className="my-3 text-red-500 font-bold">
                        Invalid Credentials
                    </p>
                ) : null}
            </form>
        </div>
    );
};

export default Login;
