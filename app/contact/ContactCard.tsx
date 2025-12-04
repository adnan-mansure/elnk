"use client";
import Image from "next/image";
import Link from "next/link";
import { ContactType } from "./data";
import { useRouter } from "next/navigation";

export default function ContactCard({
  item,
  view,
  link,
}: {
  item: ContactType;
  view: "list" | "grid";
  link: string;
}) {
  const router = useRouter();

  const goToDetail = () => {
    router.push(link); // Navigate to /contact_detail/{id}
  };

  // Prevent click bubbling for inner buttons if needed
  const stop = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Keyboard accessibility
  const onKeyDownNav = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToDetail();
    }
  };

  // ---------------- LIST VIEW ----------------
  if (view === "list") {
    return (
      <Link
        href={link}
        className="cursor-pointer flex flex-col bg-linear-to-b from-white/5 to-white/5 rounded-[20px] outline outline-white/10 w-full backdrop-blur-3xl"
      >
        <div className="flex gap-4 rounded-[20px] p-2 border border-white/5 w-full items-center">
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
                <i className="icon-Calendar" /> Connected{" "}
                <span className="text-white/60">{item.connected}</span>
              </div>
            </div>

            <div className="size-11 flex items-center justify-center">
              <span className="p-2">
                <i className="icon-Chevron-Right1 text-lg" />
              </span>
            </div>
          </div>
        </div>

        {/* footer buttons (prevent navigation) */}
        <div className="flex w-full gap-4 p-3 justify-center text-xs font-semibold text-white/80">
          <button type="button" onClick={stop} className="flex items-center gap-1">
            <i className="icon-Plus text-xs" /> Add where you met
          </button>

          <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0" />

          <button type="button" onClick={stop} className="flex items-center gap-1">
            <i className="icon-Plus text-xs" /> Add Note
          </button>

          <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0" />

          <button type="button" onClick={stop} className="flex items-center gap-1">
            <i className="icon-Share-2 text-xs" /> Share
          </button>
        </div>
      </Link>
    );
  }

  // ---------------- GRID VIEW ----------------
  return (
    <Link
      href={link}
      className="block cursor-pointer bg-linear-to-b from-white/5 to-white/5 rounded-[20px] border border-white/5 overflow-hidden backdrop-blur-3xl transform transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative">
        <div className="overflow-hidden rounded-2xl relative">
          <Image
            width={200}
            height={200}
            src={item.image}
            alt={item.name}
            className="w-full h-[180px] object-cover"
          />
          <span className="absolute w-full h-[120px] bg-[linear-gradient(180deg,rgba(0,0,0,0.01)_0%,#000_100%)] bottom-0" />
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

      {/* footer buttons */}
      <div className="flex w-full gap-1 p-3 justify-center text-xs font-semibold text-white/80">
        <button type="button" onClick={stop} className="flex items-center gap-1">
          <i className="icon-Plus text-xs" /> Add Note
        </button>

        <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0" />

        <button type="button" onClick={stop} className="flex items-center gap-1">
          <i className="icon-Share-2 text-xs" /> Share
        </button>

        <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0" />
      </div>
    </Link>
  );
}
