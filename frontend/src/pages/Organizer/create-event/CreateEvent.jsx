import { useState } from "react";
import {
    CalendarDays,
    MapPin,
    Users,
    Tag,
    Clock3,
    IndianRupee,
    Image,
} from "lucide-react";





function CreateEvent() {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        venue: "",
        eventDate: "",
        registrationDeadline: "",
        category: "",
        maxParticipants: "",
        registrationFee: "",
        imageUrl: "",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Event Data:", {
            ...formData,
            maxParticipants: Number(formData.maxParticipants),
            registrationFee: Number(formData.registrationFee),
        });

    };

    return (
        <div className="mx-auto w-full max-w-6xl">

            {/* Header */}

            <div className="mb-10">

                <p className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#D8A93B]
                ">
                    ORGANIZER
                </p>

                <h1 className="
                    mt-3
                    text-4xl
                    font-bold
                    tracking-tight
                    text-white
                ">
                    Create Event
                </h1>

                <p className="
                    mt-3
                    max-w-2xl
                    text-[15px]
                    leading-7
                    text-zinc-400
                ">
                    Create an event and share it with the CSJMU community.
                </p>

            </div>


            {/* Form */}

            <form onSubmit={handleSubmit}>

                <div className="
                    rounded-[24px]
                    border
                    border-white/[0.07]
                    bg-[#151515]
                    p-8
                ">

                    {/* Event Details Header */}

                    <div className="mb-10">

                        <h2 className="
                            text-lg
                            font-semibold
                            text-white
                        ">
                            Event Details
                        </h2>

                        <p className="
                            mt-1
                            text-sm
                            text-zinc-500
                        ">
                            Basic information about your event.
                        </p>

                    </div>


                    {/* Event Title */}

                    <div className="mb-7">

                        <label
                            htmlFor="title"
                            className="
                                mb-2
                                block
                                text-sm
                                font-medium
                                text-zinc-300
                            "
                        >
                            Event Title
                        </label>

                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter your event title"
                            className="
                                h-12
                                w-full
                                rounded-xl
                                border
                                border-white/10
                                bg-[#111111]
                                px-4
                                text-sm
                                text-white
                                outline-none
                                placeholder:text-zinc-600
                                transition
                                duration-200
                                focus:border-[#D8A93B]/60
                                focus:ring-1
                                focus:ring-[#D8A93B]/20
                            "
                        />

                    </div>


                    {/* Description */}

                    <div className="mb-7">

                        <label
                            htmlFor="description"
                            className="
                                mb-2
                                block
                                text-sm
                                font-medium
                                text-zinc-300
                            "
                        >
                            Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Tell students what this event is about..."
                            className="
                                w-full
                                resize-none
                                rounded-xl
                                border
                                border-white/10
                                bg-[#111111]
                                p-4
                                text-sm
                                leading-6
                                text-white
                                outline-none
                                placeholder:text-zinc-600
                                transition
                                duration-200
                                focus:border-[#D8A93B]/60
                                focus:ring-1
                                focus:ring-[#D8A93B]/20
                            "
                        />

                    </div>


                    {/* Category + Venue */}

                    <div className="
                        mb-7
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                    ">

                        {/* Category */}

                        <div>

                            <label
                                htmlFor="category"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Category
                            </label>

                            <div className="relative">

                                <Tag
                                    size={17}
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-zinc-500
                                    "
                                />

                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="
        h-12
        w-full
        appearance-none
        rounded-xl

        border
        border-white/10

        bg-[#111111]

        pl-11
        pr-10

        text-sm
        text-zinc-300

        outline-none

        transition-all
        duration-200

        hover:border-[#D8A93B]/30

        focus:border-[#D8A93B]/60
        focus:ring-1
        focus:ring-[#D8A93B]/20

        cursor-pointer
    "
                                >
                                    <option
                                        value=""
                                        disabled
                                        className="bg-[#151515] text-zinc-500"
                                    >
                                        Select category
                                    </option>

                                    <option
                                        value="WORKSHOP"
                                        className="bg-[#151515] text-white"
                                    >
                                        Workshop
                                    </option>

                                    <option
                                        value="TECHNICAL"
                                        className="bg-[#151515] text-white"
                                    >
                                        Technical
                                    </option>

                                    <option
                                        value="CULTURAL"
                                        className="bg-[#151515] text-white"
                                    >
                                        Cultural
                                    </option>

                                    <option
                                        value="SPORTS"
                                        className="bg-[#151515] text-white"
                                    >
                                        Sports
                                    </option>

                                    <option
                                        value="OTHER"
                                        className="bg-[#151515] text-white"
                                    >
                                        Other
                                    </option>
                                </select>

                            </div>

                        </div>


                        {/* Venue */}

                        <div>

                            <label
                                htmlFor="venue"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Venue
                            </label>

                            <div className="relative">

                                <MapPin
                                    size={17}
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-zinc-500
                                    "
                                />

                                <input
                                    id="venue"
                                    name="venue"
                                    type="text"
                                    value={formData.venue}
                                    onChange={handleChange}
                                    placeholder="Event venue"
                                    className="
                                        h-12
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-[#111111]
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-zinc-600
                                        transition
                                        duration-200
                                        focus:border-[#D8A93B]/60
                                        focus:ring-1
                                        focus:ring-[#D8A93B]/20
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* Event Date + Registration Deadline */}

                    <div className="
                        mb-7
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                    ">

                        {/* Event Date */}

                        <div>

                            <label
                                htmlFor="eventDate"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Event Date
                            </label>

                            <div className="relative">

                                <CalendarDays
                                    size={17}
                                    className="
        pointer-events-none
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-[#D8A93B]
        
    "
                                />

                                <input

                                    id="eventDate"
                                    name="eventDate"
                                    type="date"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                    className="
        h-12
        w-full
        rounded-xl
        border
        border-white/10
        bg-[#111111]

        pl-11
        pr-4

        text-sm
        text-zinc-300

        outline-none

        transition-all
        duration-200

        focus:border-[#D8A93B]/60
        focus:ring-1
        focus:ring-[#D8A93B]/20

        [&::-webkit-calendar-picker-indicator]:cursor-pointer
        [&::-webkit-calendar-picker-indicator]:opacity-100
        [&::-webkit-calendar-picker-indicator]:brightness-0
        [&::-webkit-calendar-picker-indicator]:invert
        [&::-webkit-calendar-picker-indicator]:sepia
        [&::-webkit-calendar-picker-indicator]:saturate-[1000%]
        [&::-webkit-calendar-picker-indicator]:hue-rotate-[5deg]
    "
                                />

                            </div>

                        </div>


                        {/* Registration Deadline */}

                        <div>

                            <label
                                htmlFor="registrationDeadline"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Registration Deadline
                            </label>

                            <div className="relative">

                                <Clock3
                                    size={17}
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-zinc-500
                                    "
                                />

                                <input
                                    id="registrationDeadline"
                                    name="registrationDeadline"
                                    type="date"
                                    value={formData.registrationDeadline}
                                    onChange={handleChange}
                                    className="
                                        h-12
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-[#111111]
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-zinc-300
                                        outline-none
                                        transition
                                        duration-200
                                        focus:border-[#D8A93B]/60
                                        focus:ring-1
                                        focus:ring-[#D8A93B]/20
                                        [&::-webkit-calendar-picker-indicator]:cursor-pointer
[&::-webkit-calendar-picker-indicator]:opacity-100
[&::-webkit-calendar-picker-indicator]:brightness-0
[&::-webkit-calendar-picker-indicator]:invert
[&::-webkit-calendar-picker-indicator]:sepia
[&::-webkit-calendar-picker-indicator]:saturate-[1000%]
[&::-webkit-calendar-picker-indicator]:hue-rotate-[5deg]
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* Participants + Registration Fee */}

                    <div className="
                        mb-7
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                    ">

                        {/* Maximum Participants */}

                        <div>

                            <label
                                htmlFor="maxParticipants"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Maximum Participants
                            </label>

                            <div className="relative">

                                <Users
                                    size={17}
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-zinc-500
                                    "
                                />

                                <input
                                    id="maxParticipants"
                                    name="maxParticipants"
                                    type="number"
                                    min="1"
                                    value={formData.maxParticipants}
                                    onChange={handleChange}
                                    placeholder="e.g. 100"
                                    className="
                                        h-12
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-[#111111]
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-zinc-600
                                        transition
                                        duration-200
                                        focus:border-[#D8A93B]/60
                                        focus:ring-1
                                        focus:ring-[#D8A93B]/20
                                    "
                                />

                            </div>

                        </div>


                        {/* Registration Fee */}

                        <div>

                            <label
                                htmlFor="registrationFee"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                "
                            >
                                Registration Fee
                            </label>

                            <div className="relative">

                                <IndianRupee
                                    size={17}
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-zinc-500
                                    "
                                />

                                <input
                                    id="registrationFee"
                                    name="registrationFee"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={formData.registrationFee}
                                    onChange={handleChange}
                                    placeholder="0 for free event"
                                    className="
                                        h-12
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-[#111111]
                                        pl-11
                                        pr-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-zinc-600
                                        transition
                                        duration-200
                                        focus:border-[#D8A93B]/60
                                        focus:ring-1
                                        focus:ring-[#D8A93B]/20
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* Image URL */}

                    <div className="mb-10">

                        {/* Event Image */}

                        {/* Event Image */}

                        <div className="mb-10">

                            <label className="
        mb-2
        block
        text-sm
        font-medium
        text-zinc-300
    ">
                                Event Image
                            </label>

                            {imagePreview ? (

                                <div className="
            relative
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-[#111111]
        ">

                                    {/* Image */}

                                    <img
                                        src={imagePreview}
                                        alt="Event preview"
                                        className="
                    h-52
                    w-full
                    object-cover
                "
                                    />

                                    {/* Overlay */}

                                    <div className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                gap-3
                bg-black/50
                opacity-0
                transition
                duration-200
                hover:opacity-100
            ">

                                        {/* Change */}

                                        <label
                                            htmlFor="eventImage"
                                            className="
                        cursor-pointer
                        rounded-lg
                        border
                        border-white/15
                        bg-white/10
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        backdrop-blur-md
                        transition
                        hover:bg-white/20
                    "
                                        >
                                            Change Image
                                        </label>

                                        {/* Remove */}

                                        <button
                                            type="button"
                                            onClick={() => {

                                                setImageFile(null);
                                                setImagePreview("");

                                            }}
                                            className="
                        rounded-lg
                        border
                        border-red-400/20
                        bg-red-500/10
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-red-300
                        transition
                        hover:bg-red-500/20
                    "
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ) : (

                                /* Empty State */

                                <label
                                    htmlFor="eventImage"
                                    className="
                flex
                min-h-44
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                border
                border-dashed
                border-white/10
                bg-[#111111]
                transition
                duration-200
                hover:border-[#D8A93B]/50
                hover:bg-white/[0.02]
            "
                                >

                                    <div className="text-center">

                                        <Image
                                            size={28}
                                            className="
                        mx-auto
                        mb-3
                        text-zinc-500
                    "
                                        />

                                        <p className="text-sm text-zinc-300">
                                            Choose event image
                                        </p>

                                        <p className="
                    mt-1
                    text-xs
                    text-zinc-600
                ">
                                            PNG, JPG or WEBP
                                        </p>

                                    </div>

                                </label>

                            )}

                            {/* Hidden File Input */}

                            <input
                                id="eventImage"
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                className="hidden"
                                onChange={(e) => {

                                    const file = e.target.files?.[0];

                                    if (!file) return;

                                    setImageFile(file);

                                    setImagePreview(
                                        URL.createObjectURL(file)
                                    );

                                }}
                            />

                        </div>

                        <div className="relative">

                            <Image
                                size={17}
                                className="
                                    pointer-events-none
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-zinc-500
                                "
                            />

                        </div>

                    </div>


                    {/* Actions */}

                    <div className="
                        flex
                        flex-col-reverse
                        gap-3
                        border-t
                        border-white/[0.06]
                        pt-6
                        sm:flex-row
                        sm:justify-end
                    ">

                        <button
                            type="button"
                            className="
                                h-11
                                rounded-xl
                                border
                                border-white/10
                                px-6
                                text-sm
                                font-medium
                                text-zinc-300
                                transition
                                duration-200
                                hover:border-white/20
                                hover:bg-white/[0.04]
                                hover:text-white
                            "
                        >
                            Save Draft
                        </button>

                        <button
                            type="submit"
                            className="
                                h-11
                                rounded-xl
                                bg-[#D8A93B]
                                px-6
                                text-sm
                                font-semibold
                                text-black
                                transition
                                duration-200
                                hover:bg-[#E4B849]
                                hover:shadow-[0_0_24px_rgba(216,169,59,0.18)]
                            "
                        >
                            Submit for Review
                        </button>

                    </div>

                </div>

            </form>

        </div>
    );
}

export default CreateEvent;