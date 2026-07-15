import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
function TextField({

    label,

    icon,

    type = "text",

    placeholder,

    value,

    onChange,

})  {

    const [showPassword, setShowPassword] = useState(false);

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
        flex
        items-center
        gap-3

        h-14

        rounded-2xl

        border
        border-white/10

        bg-white/5

        px-5

        transition-all
        duration-300

        focus-within:border-[#F4C542]
        focus-within:bg-white/7
    "
>

    {icon && (
        <span className="text-white/35">
            {icon}
        </span>
    )}

    <input
        type={
    type === "password"
        ? (showPassword ? "text" : "password")
        : type
}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
            w-full

            bg-transparent

            text-white

            outline-none

            placeholder:text-white/25
        "
    />
    {
    type === "password" && (

        <button

            type="button"

            onClick={() =>
                setShowPassword(!showPassword)
            }

            className="
                text-white/35

                transition

                hover:text-[#F4C542]
            "
        >

            {
                showPassword

                    ?

                    <EyeOff size={18} />

                    :

                    <Eye size={18} />

            }

        </button>

    )
}

</div>
        </div>

    );

}

export default TextField;