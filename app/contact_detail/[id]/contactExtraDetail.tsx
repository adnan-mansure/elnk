import Image from "next/image";

export default function ContactExtraDetail({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <div
      className={`bg-top rounded-t-[40px] flex flex-col gap-4 z-20 fixed max-w-[440px] bottom-0 left-auto right-auto w-full p-4 text-white transition-all duration-300 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      }`}
      style={{ backgroundImage: "url('/images/save_contact1.jpg')" }}
    >
      <Image
        alt=""
        width={100}
        height={100}
        className="absolute top-0 h-[22px] left-1/2 -translate-x-1/2 cursor-pointer"
        src="/images/grabber.svg"
      />

      <div
        className="cursor-pointer size-11 flex items-center justify-center ml-auto flex-none backdrop-blur-[60px] bg-white/5 border border-white/5 rounded-2xl"
        onClick={() => setOpen(false)}
      >
        <Image alt="" width={100} height={100} src="/images/close.svg" />
      </div>

      <div className="flex flex-col gap-2">
        <a href="#" className="btn btn-white">
          Save to Phone Contacts
        </a>
        <a href="#" className="btn btn-white">
          Share Contacts
        </a>
        <a href="#" className="btn btn-white">
          Add Note
        </a>
        <a href="#" className="btn btn-white">
          Add Tag
        </a>
        <a href="#" className="btn btn-white">
          Send Elink Direct Message
        </a>
        <a href="#" className="btn btn-white">
          Chat with Evan's AI Clone
        </a>

        <div className="bg-linear-to-r from-white/0 via-white/10 to-white/0 my-2 h-px"></div>

        <a href="#" className="btn btn-danger">
          Chat with Evan's AI Clone
        </a>
      </div>
    </div>
  );
}
