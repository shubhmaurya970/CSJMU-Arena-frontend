import TextField from "../../common/TextField";
import DropdownField from "../../common/DropdownField";
import { useState } from "react";


function StudentDetails() {
    const [branch, setbranch] = useState("");
    const [department, setDepartment] = useState("");
const [course, setCourse] = useState("");
const [year, setYear] = useState("");


    return (

        <div>

            <div className="mb-8">

                <h2
    className="
        text-xl
        font-semibold
        text-white
    "
>
    Complete Your Profile

    <span
        className="
            ml-3

            rounded-full

            border
            border-[#F4C542]/25

            bg-[#F4C542]/10

            px-3
            py-1

            text-xs
            font-medium

            text-[#F4C542]
        "
    >
        OPTIONAL
    </span>

</h2>

                <p
    className="
        mt-2
        max-w-2xl
        text-white/45
        leading-7
    "
>
    Complete your profile now or later from your dashboard.
    A completed profile is required to register for events or host events.
</p>

            </div>

            <div className="grid grid-cols-2 gap-6">

               <DropdownField
    label="Branch"
    placeholder={
        department
            ? "Select Department"
            : "Select Branch "
    }

    value={branch}

    onChange={setbranch}

    disabled={!department}

    options={[
        {
            value: "CSE",
            label: "Computer Science",
        },
        {
            value: "CSE AI",
            label: "Computer Science in AI",
        },
        {
            value: "IT",
            label: "Information Technology",
        },
        {
            value: "ECE",
            label: "Electronics",
        },
        {
            value: "ME",
            label: "Mechanical",
        },
        {
            value: "MSME",
            label: "MSME",
        },
    ]}
/>
                <DropdownField
    label="Department"
    placeholder="Select Department"
    value={department}
    onChange={setDepartment}
    options={[
        {
            value: "B.Tech",
            label: "B.Tech",
        },
        {
            value: "BCA",
            label: "BCA",
        },
        {
            value: "MCA",
            label: "MCA",
        },
        {
            value: "M.Tech",
            label: "M.Tech",
        },
        {
            value: "BIOTECH",
            label: "BIOTECH",
        },
        {
            value: "HM",
            label: "Hotel Managment",
        },
    ]}
/>
<DropdownField
    label="Year"
    placeholder="Select Year"
    value={year}
    onChange={setYear}
    options={[
        {
            value: "1",
            label: "1st Year",
        },
        {
            value: "2",
            label: "2nd Year",
        },
        {
            value: "3",
            label: "3rd Year",
        },
        {
            value: "4",
            label: "4th Year",
        },
    ]}
/>
            </div>

        </div>

    );

}

export default StudentDetails;