import {
    LayoutDashboard,
    CalendarPlus2,
    CalendarDays,
    Settings2,
} from "lucide-react";

export const navigation = [

    {
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/organizer"
    },

    {
        label: "Create Event",
        icon: CalendarPlus2,
        path: "/organizer/create"
    },

    {
        label: "My Events",
        icon: CalendarDays,
        path: "/organizer/events"
    },

    {
        label: "Settings",
        icon: Settings2,
        path: "/organizer/settings"
    }

];