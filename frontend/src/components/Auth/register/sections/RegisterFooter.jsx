function RegisterFooter({

    onRegister,

    error,

})  {

    return (

        <>

            <div
                className="
                    mt-6

                    rounded-xl

                    border
                    border-[#F4C542]/20

                    bg-[#F4C542]/5

                    px-5
                    py-4
                "
            >

                <p
                    className="
                        text-sm
                        leading-7

                        text-white/70
                    "
                >

                    <span
                        className="
                            font-semibold

                            text-[#F4C542]
                        "
                    >
                        Note:
                    </span>

                    {" "}

                    You can skip this step for now.
                    Complete your profile later to
                    register for or organize events.

                </p>

            </div>

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
                {error && (

    <div
        className="
            mb-6

            rounded-xl

            border
            border-red-500/30

            bg-red-500/10

            px-4
            py-3

            text-sm

            text-red-300
        "
    >

        {error}

    </div>

)}

                <button
                    type="button"

    onClick={onRegister}
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

        </>

    );

}

export default RegisterFooter;