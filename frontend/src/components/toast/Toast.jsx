import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";
import { X } from "lucide-react";

import { useToast } from "../../context/ToastContext";

function Toast() {


    const {
        isVisible,
        toast,
        hideToast,
    } = useToast();

    const icons = {
        success: <CheckCircle size={22} />,
        error: <XCircle size={22} />,
        info: <Info size={22} />,
        warning: <AlertTriangle size={22} />,
    };

    return (

        <AnimatePresence>
            {isVisible && (


                <motion.div


                    initial={{
                        opacity: 0,
                        x: 60,
                        scale: 0.96,
                    }}

                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                    }}

                    exit={{
                        opacity: 0,
                        x: 60,
                        scale: 0.96,
                    }}

                    transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                    }}

                    className="
    fixed

    top-6
    right-6

    z-[9999]

    w-[390px]
    transition-all
    duration-300
    overflow-hidden

    rounded-3xl

    border
    border-[#F4C542]/20

    bg-[#181818]/90

    backdrop-blur-xl

    shadow-[0_20px_60px_rgba(0,0,0,.45)]
"
                >
                    <div
                        className="
        h-1

        w-full

        bg-[#F4C542]
    "
                    />

                    <div className="flex gap-4 p-5">

                        <div
                            className="
        flex

        h-12
        w-12

        shrink-0

        items-center
        justify-center

        rounded-full

        bg-[#22C55E]/15

        border
        border-[#22C55E]/20
    "
                        >

                            <div className="text-[#22C55E]">

                                {icons[toast.type]}

                            </div>

                        </div>

                        <div>

                            <h3
                                className="
        text-[16px]

        font-semibold

        tracking-[0.2px]

        text-white
    "
                            >
                                {toast.title}
                            </h3>
                            <button
    onClick={hideToast}
    className="
        absolute
        top-4
        right-4

        text-white/35

        transition

        hover:text-white
    "
>
    <X size={18} />
</button>

                            <p
                                className="
                                    mt-1

                                    text-sm

                                    text-white/60
                                "
                            >
                                {toast.message}
                            </p>

                        </div>

                    </div>

                </motion.div>

            )}

        </AnimatePresence>

    );

}

export default Toast;