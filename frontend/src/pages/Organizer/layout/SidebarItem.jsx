import { NavLink } from "react-router-dom";

function SidebarItem({ item }) {

    const Icon = item.icon;

    return (

        <NavLink
            to={item.path}

            className={({ isActive }) => `

    group

    relative

    flex

    items-center

    gap-4

    rounded-xl

    px-5
    py-2.5

    transition-all
    duration-300

    ${
        isActive
            ? "bg-white/[0.035] backdrop-blur-sm"
            : "bg-transparent hover:bg-white/[0.015]"
    }

`}
        >

            {/* Gold Indicator */}

            <span
                className={`
                    absolute

                    left-0

                    h-7
                    w-[3px]

                    rounded-r-full

                    transition-all

                    ${location.pathname === item.path
                        ? "bg-[#D8A93B]"
                        : "bg-transparent"
                    }
                `}
            />

            {/* Icon */}

            <div
                className={`
                    flex

                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    transition-all

                    ${location.pathname === item.path
                        ? "bg-[#D8A93B]/10 text-[#D8A93B]"
                        : "text-white/55 group-hover:text-white"
                    }
                `}
            >

                <Icon size={19} />

            </div>

            {/* Label */}

            <span
                className={`
                    text-[15px]

                    font-medium

                    transition-all

                    ${location.pathname === item.path
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }
                `}
            >

                {item.label}

            </span>

        </NavLink>

    );

}

export default SidebarItem;