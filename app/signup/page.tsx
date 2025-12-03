"use client";
import { useRouter } from "next/navigation";
import Image from "next/image"
import Link from "next/link"
import Button from "../components/ui/Button"

export default function SignupPage () {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center gap-2 px-4 py-6.5 text-white font-medium h-screen bg-cover" style={{ backgroundImage: "url('/images/screen-bg.jpg')" }}>
            <div className="flex">
                <Button variant="default" icon onClick={() => router.push("/")}>
                        <i className="icon-Arrow-Left"></i>
                </Button>
            </div>
            <div className="pt-10 flex flex-col gap-14 text-center">
                <div className="flex flex-col gap-6 items-center">
                    <Image alt="" width={100} height={100} className="size-[100px]" src="/images/logo-color-bg.svg" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[32px]">Sign up to save this contact to your Elnk</h1>
                            <p className="text-white/50 text-xs">Save this contact and set up your own Elnk in seconds.</p>
                        </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <Button variant="white" className="gap-2 items-center">
                            <i className="icon-Google"></i>
                                <span className="text-white/80 font-normal text-sm">Continue with Google</span>
                    </Button>
                    <Button variant="white" className="gap-2 items-center">
                            <i className="icon-LinkedIn---Negative"></i>
                                <span className="text-white/80 font-normal text-sm">Continue with Linkedin</span>
                    </Button>
                    <Button variant="white" className="gap-2 items-center">
                            <i className="icon-Apple"></i>
                                <span className="text-white/80 font-normal text-sm">Continue with Apple</span>
                    </Button>
                    <Button variant="white" className="gap-2 items-center">
                            <i className="icon-Email1"></i>
                                <span className="text-white/80 font-normal text-sm">Continue with Email</span>
                    </Button>
                    <p className="text-white/50 text-xs">By continuing, both you and Evan will exchange contact information.</p>
                </div>
                <p className="text-white/50 text-sm text-center">Already have an account? <Link href="/welcome" className="text-white">Sign In</Link></p>
            </div>
        </div>
    )
}