import { ChevronDown } from "lucide-react";

function SelectField({
    label,
    value,
    onChange,
    options,
}) {
    return (
        <div className="flex flex-col gap-2">

            <label
                className="
                    text-sm
                    font-medium
                    text-white/75
                "
            >
                {label}
            </label>

            <div
                className="
                    relative
                "
            >

                <select
                    value={value}
                    onChange={onChange}
                    className="
                        h-14
                        w-full

                        appearance-none

                        rounded-2xl

                        border
                        border-white/10

                        bg-white/5

                        px-5
                        pr-12

                        text-white

                        outline-none

                        transition-all
                        duration-300

                        focus:border-[#F4C542]
                        focus:bg-white/7
                    "
                >

                    {options.map((option) => (

                        <option
                            key={option.value}
                            value={option.value}
                            className="bg-[#111111]"
                        >
                            {option.label}
                        </option>

                    ))}

                </select>

                <ChevronDown
                    size={18}
                    className="
                        pointer-events-none

                        absolute
                        right-5
                        top-1/2

                        -translate-y-1/2

                        text-white/40
                    "
                />

            </div>

        </div>
    );
}

export default SelectField;