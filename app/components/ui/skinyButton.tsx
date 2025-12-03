"use client";
import { useEffect } from "react";

export default function Skinybutton(){
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
  
    return(
        <a className="inline-block relative skinyButton" href="singup.html">
          <span className="w-7 h-[50px] rounded-4xl glow blur-[30px] block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2"></span>
          <div
            className="parent outline outline-white/10 rounded-[17px] overflow-hidden p-px relative">
            <div className="border-point size-[200px]"></div>
            <div
              className="flex items-center gap-2 backdrop-blur-[60px] outline outline-white/20 bg-white/5 px-6 py-3 rounded-2xl text-white text-center">
              <svg width="20" height="17" viewBox="0 0 20 17" fill="none">
                <g className="star" transform="translate(0,0)">
                    <path d="M14.0441 7.25233C14.1203 6.95023 14.5496 6.95023 14.6258 7.25233L14.7625 7.79398C15.1651 9.3889 16.4865 10.6065 18.1047 10.9022C18.4328 10.9621 18.4328 11.4379 18.1047 11.4979C16.4865 11.7935 15.1651 13.0111 14.7625 14.6061L14.6258 15.1477C14.5496 15.4498 14.1203 15.4498 14.0441 15.1477L13.9073 14.6061C13.5047 13.0111 12.1834 11.7935 10.5652 11.4979C10.2371 11.4379 10.2371 10.9621 10.5652 10.9022C12.1834 10.6065 13.5047 9.3889 13.9073 7.79398L14.0441 7.25233Z" fill="white" fillOpacity="0.6"/>
                </g>
                <g className="star" transform="translate(0,0)">
                    <path d="M6.27621 6.93867C6.33238 6.70306 6.66761 6.70306 6.72378 6.93867L6.78576 7.19865C7.04133 8.27065 7.90066 9.09386 8.98265 9.30317C9.19916 9.34506 9.19916 9.65491 8.98265 9.69679C7.90066 9.90611 7.04133 10.7293 6.78576 11.8013L6.72378 12.0613C6.66761 12.2969 6.33238 12.2969 6.27621 12.0613L6.21423 11.8013C5.95866 10.7293 5.09932 9.90611 4.01734 9.69679C3.80082 9.65491 3.80082 9.34506 4.01734 9.30317C5.09932 9.09386 5.95866 8.27065 6.21423 7.19865L6.27621 6.93867Z" fill="white" fillOpacity="0.6"/>
                </g>
                <g className="star" transform="translate(0,0)">
                    <path d="M10.1764 2.69417C10.2052 2.44651 10.5648 2.44651 10.5936 2.69417L10.6288 2.997C10.7366 3.92405 11.4433 4.66873 12.3634 4.82488L12.7649 4.89302C12.9981 4.93258 12.9981 5.26753 12.7649 5.3071L12.3634 5.37524C11.4433 5.53138 10.7366 6.27606 10.6288 7.20311L10.5936 7.50594C10.5648 7.75361 10.2052 7.75361 10.1764 7.50594L10.1412 7.20311C10.0334 6.27606 9.32672 5.53138 8.40658 5.37524L8.00503 5.3071C7.77188 5.26753 7.77188 4.93258 8.00504 4.89302L8.40658 4.82488C9.32672 4.66873 10.0334 3.92405 10.1412 2.997L10.1764 2.69417Z" fill="white" fillOpacity="0.8"/>
                </g>
              </svg>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm">Chat with Evan's</p>
                <p
                  className="leading-none text-xs text-white/50">AI Clone</p>
              </div>
            </div>
          </div>
        </a>
    )
}