import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarBranding from "./SidebarBranding";
// import SidebarLogout from "./SidebarLogout";

function Sidebar() {

    return (

        <aside
    className="
        sticky
        top-0
        h-screen
        w-[340px]
        overflow-hidden

        border-r
        border-white/[0.06]
        bg-[#151515]
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

            {/* <SidebarLogout /> */}

        </aside>

    );

}

export default Sidebar;