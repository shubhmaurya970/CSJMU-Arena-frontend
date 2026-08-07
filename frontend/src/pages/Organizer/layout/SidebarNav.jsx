import { navigation } from "./navigation";
import SidebarItem from "./SidebarItem";

function SidebarNav() {

    return (

        <nav
            className="
                mt-5

                flex
                flex-col

                gap-2

                px-5
            "
        >

            {

                navigation.map(item => (

                    <SidebarItem

                        key={item.label}

                        item={item}

                    />

                ))

            }

        </nav>

    );

}

export default SidebarNav;