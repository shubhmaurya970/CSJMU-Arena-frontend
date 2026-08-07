import { motion } from "framer-motion";
function HeroGreeting() {

    return (

        <motion.div
    initial={{
        opacity: 0,
        y: 18
    }}
    animate={{
        opacity: 1,
        y: 0
    }}
    transition={{
        delay: 0.15,
        duration: 0.55
    }}
>

            <p
                className="
                    text-[11px]
font-medium
tracking-[0.22em]
uppercase
text-[#C9A14A]"
            >

                Welcome Back

            </p>

            <h1
                className="
                    mt-1

                    text-[40px]
leading-[1.25]

                    font-bold

                    tracking-tight

                    text-white
                "
            >

                Organize your campus events.

            </h1>
            <motion.div
    initial={{
        scaleX: 0
    }}
    animate={{
        scaleX: 1
    }}
    transition={{
        delay: 0.30,
        duration: 0.5,
        ease: "easeOut"
    }}
    style={{
        transformOrigin: "left"
    }}
    className="
        mt-5
        h-[2px]
        w-20
        rounded-full
        bg-gradient-to-r
        from-[#D8A93B]
        to-transparent
    "
/>

        </motion.div>

    );

}

export default HeroGreeting;