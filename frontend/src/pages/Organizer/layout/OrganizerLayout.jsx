import Sidebar from "./Sidebar";

function OrganizerLayout({ children }) {

    return (
        
        <div
            className="
                flex

                h-screen
                sidebar-scroll
                bg-[#111111]
            "
        >
            

            <Sidebar />

            <main
                className="
                    flex-1

                    overflow-y-auto

                    p-8
                "
            >

                {children}

            </main>

        </div>

    );

}

export default OrganizerLayout;