import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarBranding from "./SidebarBranding";
import SidebarLogout from "./SidebarLogout";

function Sidebar() {

    return (

        <aside
            className="
                flex
                h-screen
                w-[310px]
                flex-col
                overflow-y-auto
                bg-[#151515]

                border-r
                border-white/5

                overflow-hidden
            "
            
        >
            <div
    className="
        absolute
        inset-0

        opacity-[0.03]

        pointer-events-none

        bg-[radial-gradient(circle_at_top,rgba(255,255,255,.06),transparent_60%)]
    "
/>
            <SidebarHeader />

            <SidebarNav />

            <div className="flex-1" />

            <SidebarBranding />

            <SidebarLogout />

        </aside>

    );

}

export default Sidebar;