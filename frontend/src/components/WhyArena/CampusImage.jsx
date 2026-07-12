import campusImage from "../../assets/images/campus.jpg";

function CampusImage() {
    return (
        <div className="flex justify-center">

            <div
                className="
                    group

                    w-full
                    max-w-[420px]
                    h-[540px]

                    overflow-hidden
                    rounded-[36px]

                    bg-white

                    ring-1
                    ring-[#D8A81D]/25

                    shadow-[0_25px_60px_rgba(0,0,0,.08),0_8px_25px_rgba(216,168,29,.08)]

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:ring-[#D8A81D]/45
                    hover:shadow-[0_35px_80px_rgba(0,0,0,.12),0_12px_35px_rgba(216,168,29,.18)]
                "
            >
                <img
                    src={campusImage}
                    alt="CSJMU Campus"
                    className="
                        h-full
                        w-full
                        object-cover

                        transition-transform
                        duration-700
                        ease-out

                        group-hover:scale-105
                    "
                />
            </div>

        </div>
    );
}

export default CampusImage;