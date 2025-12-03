"use client";
import Image from "next/image";
import BottomNav from "../components/ui/BottomNav";
import { useState } from "react";
import Contact from "./Contact";
import Card from "./Card";
import Analytics from "./Analytics";
import ProfileSection from "./ProfileSection";

export default function ContactPage() {
    const [activeTab, setActiveTab] = useState("contacts");
    return(
        <>
        <div className="flex flex-col justify-center gap-2 p-4 text-white font-medium h-screen overflow-auto rounded-t-[28px] rounded-r-[28px] bg-cover bg-center" style={{ backgroundImage: "url('/images/screen-bg.jpg')" }}>
            <div className="flex flex-col h-full">
                {activeTab === "cards" && <Card />}
                {activeTab === "contacts" && <Contact />}
                {activeTab === "analytics" && <Analytics />}
                {activeTab === "profile" && <ProfileSection />}

            </div>
        </div>
        <div className="rounded-[10px] bottom-5 fixed w-full max-w-[408px] left-1/2 -translate-x-1/2 z-20">
            <div className="flex gap-1 bg-white/10 border border-white/5 p-1 font-normal backdrop-blur-[30px] rounded-[10px] text-[10px] text-white/50 text-center">
                <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
                <div
                    className={`overflow-hidden flex-1 relative p-px rounded-[9px] cursor-pointer ${
                        activeTab === "profile" ? "outline outline-white/5 -outline-offset-1" : ""
                    }`}
                    onClick={() => setActiveTab("profile")}
                >
                    <a href="#" className="flex flex-col h-full py-1 rounded-lg relative z-1">
                        <div className="size-9 m-auto p-0.5 rounded-full  relative [background:linear-gradient(90deg,#26B7FF_0%,#1D4AFE_100%)]">  
                            <Image height={100} width={100} src="/images/profile.svg" alt="" className="h-full w-full border-2 bg-[#5E6165] border-[#4E5155] object-cover rounded-full" />
                            <div className="absolute -top-1 -right-1 size-5 flex items-center justify-center rounded-full p-px [background:linear-gradient(180deg,#E1FF4F_0%,#D7FD1E_100%)] border border-black/10">
                                <span className="text-black/60 text-[10px] font-semibold">2</span>
                            </div>
                        </div>
                        <span>Profile</span>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}