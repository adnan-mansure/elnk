
import Image from "next/image";
import Button from "../../components/ui/Button";

import { contacts } from "../../contact/data";
import Link from "next/link";
import ContactExtraDetail from "./contactExtraDetail";

interface Props {
  params: { id: string };
}

export default async function ContactDetail({ params }: { params: { id: string } }) {

    const { id } = await params;

    // ⬅ Convert your contact IDs to string OR convert params.id to number
    const user = contacts.find((c) => String(c.id) === String(id));

    const actions = [
        { icon: "icon-Phone", label: "Call" },
        { icon: "icon-Message", label: "SMS" },
        { icon: "icon-Email", label: "Email" },
        { icon: "icon-Globe", label: "Website" },
    ];


    if (!user) {
        return <div className="text-white p-4">User not found</div>;
    }

    return (
        <div
            className="w-full relative overflow-auto h-full px-4"
            style={{ backgroundImage: "url('/images/screen-bg.jpg')" }}
        >
            <div className="relative text-white">
                <div className="flex items-center gap-2 my-6">
                    <Link href="/contact">
                        <Button variant="default" icon>
                            <i className="icon-Arrow-Left"></i>
                        </Button>
                    </Link>
                    <h2 className="text-2xl flex-1">Contact Details</h2>
                    <Button variant="default" className="gap-2">
                        <i className="icon-Share-2"></i> Share
                    </Button>
                    <Button variant="default" icon>
                    <i className="icon-Three-Dots-Vertical"></i>
                    </Button>
                </div>

                <div className="relative">
                    <div className="absolute bottom-0 w-full z-1 h-[168px] pointer-events-none bg-linear-to-t from-black/60 from-1% to-black/1 to-100%"></div>
                    <Image
                        alt={user.name}
                        width={408}
                        height={260}
                        className="rounded-3xl h-[260px] w-full object-top object-cover"
                        src={user.image}
                    />
                </div>

                <div className="backdrop-blur-[30px] bg-white/10 outline outline-white/10 relative rounded-3xl -top-8 z-1">
                    <div className="backdrop-blur-[30px] bg-white/10 border border-white/10 relative px-4 pt-5 pb-4 rounded-3xl">
                        <div className="flex items-center">
                            <div className="flex items-center flex-1 text-white gap-2">
                                <div className="user rounded-full">
                                    <Image
                                        alt={user.name}
                                        width={32}
                                        height={32}
                                        className="size-8 m-0.5 rounded-full flex-none object-cover"
                                        src={user.image}
                                    />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex items-center gap-0.5">
                                        <p className="font-bold text-xl text-white leading-none">{user.name}</p>
                                    </div>
                                    <p className="leading-none text-xs font-medium text-white/60">{user.role}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-white/1 backdrop-blur-[30px] rounded-[10px] px-4 py-1">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold text-white text-sm">13k</p>
                                    <p className="font-medium text-white text-[10px]">Followers</p>
                                </div>
                                <Image alt="" width={16} height={16} src="/images/instagram.svg" />
                            </div>
                        </div>

                        <div className="bg-linear-to-r from-white/0 via-white/10 to-white/0 my-2.5 h-px"></div>

                        <div className="grid grid-cols-4 gap-2 *:py-4 *:px-3 *:flex *:items-center *:justify-center text-xs">

                           {actions.map((item, index) => (
                                <div
                                key={index}
                                className="flex flex-col items-center justify-center backdrop-blur-[60px] bg-white/1 border border-white/5 rounded-2xl p-3"
                                >
                                <i className={`${item.icon} text-lg`} />
                                <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 p-3">
                        <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 relative px-6 py-3 rounded-[10px]">
                            <p className="text-[10px]">From</p>
                            <p className="text-sm">{user.phone}</p>
                        </div>
                        <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 relative px-6 py-3 rounded-[10px]">
                            <p className="text-[10px]">Phone Number</p>
                            <p className="text-sm">{user.phone}</p>
                        </div>
                        <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 relative px-6 py-3 rounded-[10px]">
                            <p className="text-[10px]">Email</p>
                            <p className="text-sm">{user.email}</p>
                        </div>
                        <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 relative px-6 py-3 rounded-[10px]">
                            <p className="text-[10px]">Website</p>
                            <p className="text-sm">{user.website}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
