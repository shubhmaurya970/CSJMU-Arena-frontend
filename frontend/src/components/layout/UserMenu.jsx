import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
    User,
    Ticket,
    Settings,
    LogOut,
} from "lucide-react";

import { AuthContext } from "../../context/AuthContext";

function UserMenu() {

    const roleColors = {
    STUDENT:
        "bg-[#F4C542]/15 text-[#F4C542]",

    ORGANIZER:
        "bg-emerald-500/15 text-emerald-400",

    ADMIN:
        "bg-red-500/15 text-red-400",
};

    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    return (

        <div
            ref={dropdownRef}
            className="relative"
        >

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-3 rounded-full px-4 py-2 text-white transition-all duration-300 hover:bg-white/10"
            >

               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4C542] font-semibold text-black">
    {user?.name?.charAt(0).toUpperCase()}
</div>

<span className="font-medium">
    {user?.name}
</span>

                <span className="text-xs">
                    ▼
                </span>

            </button>

            <AnimatePresence>

                {isMenuOpen && (

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: -10,
                            scale: .97,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}

                        exit={{
                            opacity: 0,
                            y: -10,
                            scale: .97,
                        }}

                        transition={{
                            duration: .22,
                        }}

                        className="
                            absolute

                            right-0
                            top-16

                            w-80

                            overflow-hidden

                            rounded-3xl

                            border
                            border-[#F4C542]/20

                            bg-[#181512]/95

                            backdrop-blur-xl

                            shadow-[0_25px_70px_rgba(0,0,0,.45)]
                        "
                    >

                        <div className="border-b border-white/10 p-6">

    <div className="flex items-center gap-4">

        {/* Avatar */}

        <div
            className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full

                bg-[#F4C542]

                text-xl
                font-bold

                text-black
            "
        >
            {user?.name?.charAt(0).toUpperCase()}
        </div>

        {/* User Info */}

        <div className="flex-1">

            <h3 className="text-lg font-semibold text-white">
                {user?.name}
            </h3>

            <div className="mt-2 flex items-center gap-2">

               <span
    className={`
        rounded-full
        px-3
        py-1
        text-[10px]
        font-semibold
        tracking-[2px]

        ${roleColors[user?.role]}
    `}
>
    {user?.role}
</span>

            </div>

            <p className="mt-3 text-sm text-white/45">
                {user?.email}
            </p>

        </div>

    </div>

</div>
<div className="p-2">

    <button
        className="
            flex
            w-full
            items-center
            gap-3

            rounded-2xl

            px-4
            py-3

            text-white

            transition-all
            duration-300

            hover:bg-white/8
        "
    >
        <User size={18} />

        <span>My Profile</span>

    </button>

    <button
        className="
            flex
            w-full
            items-center
            gap-3

            rounded-2xl

            px-4
            py-3

            text-white

            transition-all
            duration-300

            hover:bg-white/8
        "
    >
        <Ticket size={18} />

        <span>My Registrations</span>

    </button>

    <button
        className="
            flex
            w-full
            items-center
            gap-3

            rounded-2xl

            px-4
            py-3

            text-white

            transition-all
            duration-300

            hover:bg-white/8
        "
    >
        <Settings size={18} />

        <span>Settings</span>

    </button>

</div>

<div className="border-t border-white/10 p-2">

    <button
        onClick={() => {

            logout();

            navigate("/login");

        }}
        className="
            flex
            w-full
            items-center
            gap-3

            rounded-2xl

            px-4
            py-3

            text-red-400

            transition-all
            duration-300

            hover:bg-red-500/10
        "
    >

        <LogOut size={18} />

        <span>Logout</span>

    </button>

</div>
                    </motion.div>

                )}

            </AnimatePresence>
                

        </div>
        

    );

}

export default UserMenu;