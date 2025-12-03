"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Button from "../components/ui/Button";

export default function WelcomePage(){
    const [email, setEmail] = useState("");
    const router = useRouter();
    return(
        <div className="flex flex-col gap-2 px-4 py-6.5 text-white font-medium h-screen overflow-auto bg-cover" style={{ backgroundImage: "url('/images/screen-bg.jpg')" }}>
            <div className="flex">
                <Button variant="default" icon onClick={() => router.push("/signup")}>
                    <i className="icon-Arrow-Left"></i>
                </Button>
            </div>
            <div className="pt-10 flex flex-col gap-9 text-center">
              <div className="flex flex-col gap-6 items-center">
                <Image alt="" width={100} height={100} src="/images/logo-color-bg.svg" />

                <div className="flex flex-col gap-2">
                    <h1 className="text-[32px]">Welcome back!</h1>
                    <p className="text-white/50 text-xs">Sign In here.</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 w-full">

                <div className="emailBox">
                  <label className="fb-Search" htmlFor="Input">
                    <input id="Input" className="fb-Search_Input" value={email}  onChange={(e) => setEmail(e.target.value)} />
                    <span className="fb-Search_FauxInput" dir="rtl">{email}</span>
                    <span className="fb-Search_Label" >Email</span>
                  </label>
                </div>


                  <Button variant="primary" size="lg" className="w-full">
                        Continue
                 </Button>
                <div className="flex gap-2 items-center">
                    <span className="h-px w-full opacity-20 [background:linear-gradient(270deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.01)_99.44%)]"></span>
                    <span className="text-white/50 text-xs h-[21px]">or</span>
                    <span className="h-px w-full opacity-20  [background:linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.8)_99.44%)]"></span>
                </div> 
                <Button variant="default" className="gap-2" onClick={() => router.push("/contact")}>
                    <i className="icon-Google"></i>
                    <span className="text-sm text-white/80 font-normal">
                        Continue with Google
                    </span>
                </Button>
              </div>
            </div>   
        </div>
    )
}