import Sidebar from "./Sidebar";

function OrganizerLayout({ children }) {

    return (
        
        <div
            className="
                flex

                min-h-screen

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