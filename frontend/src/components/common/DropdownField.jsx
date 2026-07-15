import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";


function DropdownField({
    label,
    placeholder,
    options,
    value,
    onChange,
    disabled = false,
}) {

    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(e) {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {

                setOpen(false);

            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    const selectedOption = options.find(
        option => option.value === value
    );

    return (

        <div
            ref={dropdownRef}
            className="flex flex-col gap-2 relative"
        >

            <label
                className="
                    text-sm
                    font-medium
                    text-white/75
                "
            >
                {label}
            </label>

            <button

                type="button"

                onClick={() => setOpen(!open)}

                className="
                    
                    flex
                    items-center
                    justify-between

                    h-14

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/5

                    px-5

                    transition-all
                    duration-300

                    hover:border-[#F4C542]/40

                    focus:border-[#F4C542]
                "
            >

                <span
                    className={`
                        ${
                            selectedOption
                                ? "text-white"
                                : "text-white/35"
                        }
                    `}
                >
                    {selectedOption
                        ? selectedOption.label
                        : placeholder}
                </span>

                <motion.div
    animate={{
        rotate: open ? 180 : 0,
    }}
    className={`
        transition-colors
        duration-300

        ${
            open
                ? "text-[#F4C542]"
                : "text-[#F4C542]/80"
        }
    `}
>

                 <ChevronDown size={18} />

                </motion.div>

            </button>

            <AnimatePresence>

                {open && (

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: -8,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            y: -8,
                        }}

                        transition={{
                            duration: .2,
                        }}

                        className="
                            absolute

                            top-[92px]

                            z-50

                            w-full

                            overflow-hidden

                            rounded-2xl

                            border
                            border-white/10

                            bg-[#181818]

                            shadow-2xl
                        "
                    >

                        {options.map(option => (

                            <button

                                key={option.value}

                                type="button"
                                 disabled={disabled}

                                onClick={() => {

                                    onChange(option.value);

                                    setOpen(false);

                                }}

                                className="
                                    flex

                                    w-full

                                    items-center
                                    justify-between

                                    px-5
                                    py-4

                                    text-left

                                    text-white/80

                                    transition-all

                                    hover:bg-[#F4C542]/10

                                    hover:text-[#F4C542]
                                    disabled:opacity-40
disabled:cursor-not-allowed
                                "
                            >

                                {option.label}

                                {value === option.value && (

                                    <Check
                                        size={18}
                                    />

                                )}

                            </button>

                        ))}

                    </motion.div>

                )}

            </AnimatePresence>

        </div>

    );

}

export default DropdownField;