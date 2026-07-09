function TimelineNode({ month, day, year }) {
    return (
        <div className="relative z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-[#F4C542] bg-[#17130F] shadow-[0_0_30px_rgba(244,197,66,.18)]">

            <span className="text-[13px] font-bold tracking-[3px] text-[#F4C542]">
                {month}
            </span>

            <span className="mt-1 text-[2.2rem] font-extrabold leading-none text-white">
                {day}
            </span>

            <span className="mt-1 text-xs text-white/45">
                {year}
            </span>

        </div>
    );
}

export default TimelineNode;