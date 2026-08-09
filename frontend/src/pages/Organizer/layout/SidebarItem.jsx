import { NavLink } from "react-router-dom";

function SidebarItem({ item }) {

    const Icon = item.icon;

    return (

        <NavLink
            to={item.path}
            end={item.path === "/organizer"}
            className={({ isActive }) =>
                `
                group
                relative
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4

                transition-all
                duration-200

                ${
                    isActive
                        ? "bg-white/[0.055] text-white"
                        : "text-zinc-400 hover:bg-white/[0.025] hover:text-zinc-200"
                }
                `
            }
        >

            {/* Gold Indicator */}

            <span
                className="
                    absolute
                    left-0
                    h-7
                    w-[3px]
                    rounded-r-full
                    bg-transparent
                    group-[.active]:bg-[#D8A93B]
                "
            />

            {/* Icon */}

            <div
                className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-200
                "
            >
                <Icon
                    size={19}
                    className="
                        text-white/55
                        transition-colors
                        duration-200
                        group-hover:text-white
                    "
                />
            </div>

            {/* Label */}

            <span
                className="
                    text-[15px]
                    font-medium
                    text-white/70
                    transition-colors
                    duration-200
                    group-hover:text-white
                "
            >
                {item.label}
            </span>

        </NavLink>

    );
}

export default SidebarItem;