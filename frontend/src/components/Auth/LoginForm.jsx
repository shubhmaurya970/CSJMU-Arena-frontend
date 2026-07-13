import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

function LoginForm() {

    const navigate = useNavigate();

    

    const { login } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
    try {

        const response = await loginUser({
            email,
            password,
        });

        console.log(response);

        login(response.data);

        navigate("/");

    } catch (error) {

        console.error(error);

    }
};


    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
                scale: 0.98,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -4,
            }}
            className="w-full max-w-md"
        >
            <div
                className="
                    relative

                    rounded-[34px]

                    border
                    border-[#F4C542]/30

                    bg-white/5
                    backdrop-blur-xl

                    p-10

                    shadow-[0_25px_80px_rgba(0,0,0,.45)]
                "
            >
                {/* Top Highlight */}

                <div
                    className="
                        absolute

                        left-8
                        right-8
                        top-0

                        h-px

                        bg-gradient-to-r
                        from-transparent
                        via-[#F4C542]/60
                        to-transparent
                    "
                />

                <h2 className="text-4xl font-bold text-white">
                    Welcome Back
                </h2>

                <p className="mt-3 text-white/60">
                    Sign in to continue to CSJMU ARENA.
                </p>

                <div className="mt-10 flex flex-col gap-6">

                    {/* Email */}

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email Address"
                        className="
                            w-full

                            rounded-2xl

                            border
                            border-[#F4C542]/20

                            bg-black/20

                            px-5
                            py-4

                            text-white
                            placeholder:text-white/35

                            outline-none

                            transition-all
                            duration-300

                            focus:border-[#F4C542]
                            focus:shadow-[0_0_18px_rgba(244,197,66,.18)]
                        "
                    />

                    {/* Password */}

                    <div className="relative">

                        <input

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="
            w-full

            rounded-2xl

            border
            border-[#F4C542]/20

            bg-black/20

            px-5
            py-4
            pr-14

            text-white
            placeholder:text-white/35

            outline-none

            transition-all
            duration-300

            focus:border-[#F4C542]
            focus:shadow-[0_0_18px_rgba(244,197,66,.18)]
        "
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="
            absolute

            right-5
            top-1/2

            -translate-y-1/2

            text-white/45

            transition-colors
            duration-300

            hover:text-[#F4C542]
        "
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>

                    </div>

                    {/* Remember */}

                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2 text-white/60">

                            <input
                                type="checkbox"
                                className="accent-[#F4C542]"
                            />

                            Remember Me

                        </label>

                        <button
                            className="
                                text-[#F4C542]

                                transition-colors

                                hover:text-white
                            "
                        >
                            Forgot Password?
                        </button>

                    </div>

                    {/* Login Button */}

                    <motion.button
                        onClick={handleLogin}
                        whileHover={{
                            scale: 1.03,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                        className="
                            w-full

                            rounded-2xl

                            bg-[#F4C542]

                            py-4

                            font-semibold

                            text-black

                            transition-all

                            duration-300

                            hover:shadow-[0_0_30px_rgba(244,197,66,.25)]
                        "
                    >
                        Login

                    </motion.button>
                    <div className="mt-1 text-center">

                        <span className="text-white/60">
                            Don't have an account?
                        </span>

                        <Link
                            to="/register"
                            className="
            ml-2

            font-semibold

            text-[#F4C542]

            transition-all
            duration-300

            hover:text-white
            hover:underline
        "
                        >
                            Create Account →
                        </Link>

                    </div>

                </div>
            </div>
        </motion.div>
    );

}
export default LoginForm;