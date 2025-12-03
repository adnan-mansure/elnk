import Image from "next/image";
import ProfileTitle from "./ProfilTitle";

export default function Bio() {
    return (
        <div className="p-4 text-white text-xs">
            <ProfileTitle title="Bio" />
            <div className="kt-card text-white">
                <div className="kt-card-content flex gap-5 items-start">
                    <div className="relative rounded-[10px] flex-none overflow-hidden">
                        <Image width={100} height={100} alt="" src="/images/bio.jpg" />
                        <span className="size-full bg-black/40 absolute inset-0"></span>
                        <i className="icon-Play absolute top-1/2 left-1/2 -translate-1/2"></i>
                    </div>
                    <div>
                        <p>Founder & CEO of Custom Esignature — helping brands stand out
                            in every inbox. Athlete, creator, and entrepreneur building
                            businesses with style and impact.</p>
                        <p className="text-white/50 mt-1">See More <i
                            className="icon-Chevron-Down1"></i></p>
                        <ul
                            className="text-white/50 mt-3 *:flex *:items-center *:gap-1 flex flex-col gap-1">
                            <li><i className="icon-House-Simple"></i> Diego, California</li>
                            <li><i className="icon-User-Circle-Check"></i> UI/UX Designer</li>
                        </ul>
                        <div
                            className="bg-linear-to-r from-white/0 via-white/10 to-white/0 my-2.5 h-px"></div>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex items-center gap-2">
                                <i className="icon-Link-2"></i><Image width={50} height={28} alt="" className="rounded-xs"
                                    src="/images/preview.jpg" /> customesignature.com
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="icon-Link-2"></i><Image width={50} height={28} alt="" className="rounded-xs"
                                    src="/images/preview.jpg" /> nicoliniproductions.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}