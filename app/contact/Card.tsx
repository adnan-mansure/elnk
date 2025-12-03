"use client";
import Image from "next/image";
import Button from "../components/ui/Button";
import { useEffect } from "react";

export default function Card() {
    useEffect(() => {
        // ---- ROTATION EFFECT ----
        const element = document.querySelector(".effect1") as HTMLElement | null;
        let angle = 0;
    
        if (element) {
          const rotate = () => {
            angle = (angle + 1) % 360;
            element.style.setProperty("--angle", `${angle}deg`);
            requestAnimationFrame(rotate);
          };
          rotate();
        }
    
        // ---- BORDER ANIMATOR ----
        function createBorderAnimator(parent: HTMLElement, point: HTMLElement) {
          let progress = Math.random();
    
          function getBorderPosition(p: number) {
            const rect = parent.getBoundingClientRect();
            const r = parseFloat(getComputedStyle(parent).borderRadius) || 0;
            const w = rect.width;
            const h = rect.height;
    
            const perimeter =
              2 * (w + h - 4 * r) + 2 * Math.PI * r;
            let d = p * perimeter;
    
            if (d <= w - 2 * r) return { x: r + d, y: 0 };
            d -= w - 2 * r;
    
            if (d <= Math.PI * r / 2) {
              const a = d / r;
              return { x: w - r + Math.sin(a) * r, y: r - Math.cos(a) * r };
            }
            d -= Math.PI * r / 2;
    
            if (d <= h - 2 * r) return { x: w, y: r + d };
            d -= h - 2 * r;
    
            if (d <= Math.PI * r / 2) {
              const a = d / r;
              return { x: w - r + Math.cos(a) * r, y: h - r + Math.sin(a) * r };
            }
            d -= Math.PI * r / 2;
    
            if (d <= w - 2 * r) return { x: w - r - d, y: h };
            d -= w - 2 * r;
    
            if (d <= Math.PI * r / 2) {
              const a = d / r;
              return { x: r - Math.sin(a) * r, y: h - r + Math.cos(a) * r };
            }
            d -= Math.PI * r / 2;
    
            if (d <= h - 2 * r) return { x: 0, y: h - r - d };
    
            const a = (d - (h - 2 * r)) / r;
            return { x: r - Math.cos(a) * r, y: r - Math.sin(a) * r };
          }
    
          function animate() {
            progress += 0.004;
            if (progress > 1) progress = 0;
    
            const pos = getBorderPosition(progress);
            point.style.left = pos.x + "px";
            point.style.top = pos.y + "px";
    
            requestAnimationFrame(animate);
          }
    
          animate();
        }
    
        document.querySelectorAll(".parent").forEach(parent => {
          const p = parent.querySelector(".border-point") as HTMLElement | null;
          if (parent instanceof HTMLElement && p instanceof HTMLElement) {
            createBorderAnimator(parent, p);
          }
        });
      }, []);

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-[32px]">Contacts</h1>
                        <div className="cursor-pointer size-6 flex items-center justify-center flex-none backdrop-blur-[60px] bg-white/5 border border-white/5 rounded-full">
                                1
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="default" icon>
                            <i className="icon-Plus"></i>
                        </Button>
                    </div>
                </div>
                
                <div className="flex flex-col rounded-[25px] relative overflow-hidden parent outline outline-white/10 -outline-offset-1 p-px">
                    <div className="border-point size-[200px]"></div>
                    <div className="shadow">
                        <div className="relative rounded-3xl overflow-hidden">
                            <div className="bg-black/15 backdrop-blur-[65px] rounded-3xl p-3">
                                <Image src="/images/profile-placeholder.svg" width={233} height={189} alt="" className="m-auto" />
                                <div className="mt-6 flex items-center gap-1 p-4 rounded-3xl backdrop-blur-3xl border border-white/5 bg-[#FFFFFF1A]">
                                    <div className="size-8 p-0.5 rounded-full [background:linear-gradient(90deg,#26B7FF_0%,#1D4AFE_100%)]">  
                                        <Image width={233} height={189} src="/images/profile.svg" alt="" className="w-full border-2 bg-[#5E6165] border-[#4E5155] object-cover h-full rounded-full" />
                                    </div>
                                    <span className="text-base font-semibold">Andriy Boychuk</span>
                                </div>
                                <Button variant="default" icon className="absolute! top-3 right-3">
                                    <i className="icon-Three-Dots"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 relative flex items-center justify-center gap-1 setupBox">
                        <span className="boxRight"></span>
                        <span className="boxLeft"></span>
                        <i className="icon-HandTap text-black"></i>
                        <span className="text-base font-semibold text-black/80">Tap to Setup your Elink Profile</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-7 mt-2.5 flex-col h-full py-4 relative z-1 rounded-3xl border border-white/5 bg-[#FFFFFF1A]">
            <div
                className="absolute inset-0 bg-center opacity-30"
                style={{ backgroundImage: "url('/images/cards-bg.png')"}}
            ></div>
                    <div className="max-h-[300px] h-full">
                    </div>
                    <div className="text-center">
                        <Button variant="white" className="px-6! text-xs gap-2">
                            <i className="icon-Plus text-lg"></i>
                            Add New Elnk
                        </Button>
                    </div>
            </div>
        </>
    )
}