import TextField from "../../common/TextField";
import StudentDetails from "./StudentDetails";
import OrganizerDetails from "./OrganizerDetails";

import {
    User,
    Mail,
    Lock,
} from "lucide-react";

function RegisterForm({ accountType }) {
    return (
      <div
    className="
        flex-1

        overflow-y-auto

        bg-[#111111]

        px-14
        py-12

        pr-6

        hide-scrollbar
    "
>
            {/* Heading */}

            <div>

                <p
                    className="
                        text-sm

                        uppercase

                        tracking-[5px]

                        text-[#F4C542]
                    "
                >
                    Create Account
                </p>

                <h1
                    className="
                        mt-3

                        text-4xl

                        font-bold

                        text-white
                    "
                >
                    Welcome to CSJMU ARENA
                </h1>

                <p
                    className="
                        mt-4

                        max-w-xl

                        text-white/55
                    "
                >
                    Complete your registration to become a part of the CSJMU ARENA community.
                </p>

            </div>

            {/* Form */}

            <div className="mt-12 grid grid-cols-2 gap-6">

                <TextField
                label="Full Name"
                icon={<User size={18} />}
                    placeholder="Enter your full name"
                />

                <TextField
                    label="Email Address"
                    icon={<Mail size={18} />}
                    placeholder="Enter your email"
                />

                <TextField
                    label="Password"
                    type="password"
                    icon={<Lock size={18} />}
                    placeholder="Create password"
                />


                <TextField
                    label="Confirm Password"
                    icon={<Lock size={18} />}
                    type="password"
                    placeholder="Confirm password"
                />
                <div className="mt-12">


                </div>

            </div>
               {accountType === "STUDENT"
        ? <StudentDetails />
        : <OrganizerDetails />
    }
    <div className="mt-10">

    <label
        className="
            flex
            items-start
            gap-3

            cursor-pointer

            text-sm

            text-white/65
        "
    >

        <input
            type="checkbox"
            className="
                mt-1

                h-4
                w-4

                accent-[#F4C542]
            "
        />

        <span>

            I agree to the{" "}

            <button
                type="button"
                className="
                    text-[#F4C542]

                    hover:underline
                "
            >
                Terms & Conditions
            </button>

            {" "}and{" "}

            <button
                type="button"
                className="
                    text-[#F4C542]

                    hover:underline
                "
            >
                Privacy Policy
            </button>

        </span>

    </label>

</div>
<div className="mt-8">

    <button
        className="
            h-14
            w-full

            rounded-2xl

            bg-[#F4C542]

            font-semibold

            text-black

            transition-all
            duration-300

            hover:scale-[1.02]

            hover:shadow-[0_0_30px_rgba(244,197,66,.25)]
        "
    >
        Create Account
    </button>

<div
    className="
        mt-8

        text-center

        text-white/55
    "
>

    Already have an account?

    <button
        className="
            ml-2

            font-medium

            text-[#F4C542]

            hover:underline
        "
    >
        Sign In
    </button>

</div>
</div>


        </div>
    );
}

export default RegisterForm;