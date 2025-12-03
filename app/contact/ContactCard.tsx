import Image from "next/image";

export default function ContactCard({ item, view }: any) {
    if (view === "list") {
        return (
            <div className="flex flex-col items-center bg-linear-to-b from-white/5 to-white/5 rounded-[20px] outline outline-white/10 w-full backdrop-blur-3xl">

                <div className="flex bg-linear-to-b gap-4 from-white/5 to-white/5 rounded-[20px] p-2 border border-white/5 w-full backdrop-blur-3xl">
                    <div className="shrink-0 rounded-2xl bg-[#FFFFFF33] p-0.5">
                        <Image
                            width={80}
                            height={80}
                            src={item.image}
                            alt={item.name}
                            className="size-20 object-cover rounded-[14px]"
                        />
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-2">
                        <div>
                            <h2 className="text-white text-base font-semibold flex items-center gap-1">
                                {item.name}
                                <Image height={12} width={12} src="/images/verifybagde.svg" alt="" />
                            </h2>

                            <div className="text-white/60 text-xs">{item.role}</div>

                            <div className="text-white/40 text-[10px] mt-1 flex items-center gap-1">
                                <i className="icon-Calendar"></i> Connected
                                <span className="text-white/60">{item.connected}</span>
                            </div>
                        </div>

                        <div className="size-11 flex items-center justify-center">
                            <a href="#" className="p-2">
                                <i className="icon-Chevron-Right1 text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex w-full gap-4 p-3 justify-center text-xs font-semibold text-white/80">
                    <a href="#" className="flex items-center justify-center gap-1">
                        <i className="icon-Plus text-xs"></i>
                        <span>Add where you met</span>
                    </a>

                    <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0"></span>

                    <a href="#" className="flex items-center justify-center gap-1">
                        <i className="icon-Plus text-xs"></i>
                        <span>Add Note</span>
                    </a>

                    <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0"></span>

                    <a href="#" className="flex items-center justify-center gap-1">
                        <i className="icon-Share-2 text-xs"></i>
                        <span>Share</span>
                    </a>
                </div>
            </div>
        );
    }

    // ---------------- GRID VIEW ----------------
    return (
        <div className="bg-linear-to-b from-white/5 to-white/5 rounded-[20px] border border-white/5 overflow-hidden backdrop-blur-3xl transform transition hover:-translate-y-1 hover:shadow-xl">

            <div className="relative">
                <div className="overflow-hidden rounded-2xl relative">
                    <Image
                        width={200}
                        height={200}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[180px] object-cover"
                    />
                    <span className="absolute w-full h-[120px] bg-[linear-gradient(180deg,rgba(0,0,0,0.01)_0%,#000_100%)] bottom-0"></span>
                </div>

                <div className="p-3 w-full absolute bottom-0">
                    <h3 className="text-white text-base font-semibold flex items-center gap-2">
                        {item.name}
                        <Image height={16} width={16} src="/images/verifybagde.svg" alt="" className="size-4" />
                    </h3>

                    <p className="text-white/60 text-xs mt-1">{item.role}</p>

                    <div className="text-white/40 text-[10px] flex items-center gap-2 mt-2">
                        <Image height={12} width={12} src="/images/calender.svg" className="size-3" alt="" />
                        <span>
                            Connected <span className="text-white/60">{item.connected}</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex w-full gap-1 p-3 justify-center text-xs font-semibold text-white/80">
                <a href="#" className="flex items-center justify-center gap-1">
                    <i className="icon-Plus text-xs"></i> <span>Add Note</span>
                </a>

                <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0"></span>

                <a href="#" className="flex items-center justify-center gap-1">
                    <i className="icon-Share-2 text-xs"></i> <span>Share</span>
                </a>

                <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0"></span>

                <div className="size-6 flex items-center justify-center">
                    <a href="#" className="p-2">
                        <i className="icon-Chevron-Right1"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
