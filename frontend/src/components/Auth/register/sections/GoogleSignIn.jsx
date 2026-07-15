function GoogleSignIn() {
    return (
        <>


            <div
                className="
        my-6

        flex
        justify-center
        w-full
    "
            >

                <button
                    type="button"
                    className="
    flex

    h-14
    w-full
    max-w-[430px]

    items-center
    justify-center
    gap-3

    rounded-2xl

    border
    border-white/10

    bg-white/5

    transition-all
    duration-300

    hover:border-[#F4C542]/35
    hover:bg-white/[0.07]
"
                >

                    <img
                        src="/google.svg"
                        alt="Google"
                        className="h-5 w-5"
                    />

                    <span
                        className="
                font-medium
                text-white/85
            "
                    >
                        Continue with Google
                    </span>

                </button>

            </div>
            <div
                className="
        mt-6
        mb-8

        flex
        items-center
        justify-center
        gap-4
    "
            >

                <div className="h-px flex-1 bg-white/10" />

                <span
                    className="
            text-xs
            uppercase
            tracking-[0.3em]

            text-white/30
        "
                >
                    OR
                </span>

                <div className="h-px flex-1 bg-white/10" />

            </div>

        </>
    );
}

export default GoogleSignIn;

