
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

type SaveContactBoxProps = {
  isOpen: boolean;
  onClose: () => void;
  onSaveContactToggle: () => void;
};

export default function SaveContactBox({
  isOpen,
  onClose,
  onSaveContactToggle,
}: SaveContactBoxProps) {
  return (

        <div
            className={`bg-top rounded-t-[40px] flex flex-col gap-4 fixed max-w-[440px] bottom-0 left-auto right-auto z-20 w-full p-4 text-white transition-all duration-300
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
            style={{ backgroundImage: "url('/images/save_contact1.jpg')" }}
        >
            <Image alt="" width={162} height={22} onClick={onClose}
                className="absolute top-0 h-[22px] left-1/2 -translate-x-1/2 cursor-pointer"
                src="/images/grabber.svg" />
                <div className="text-right">
                    <Button variant="default" icon onClick={onClose}><i className="icon-Cross"></i></Button>
                </div>


             <Link href="/signup"
                className="parent outline outline-white/5 -outline-offset-1 rounded-3xl relative overflow-hidden p-px"
                >
                <div className="border-point size-[200px]"></div>
                <div
                    className="flex items-center gap-6 backdrop-blur-[60px] bg-white/5 p-6 rounded-[23px]">
                    <Image alt="" width={100} height={100} src="/images/logo-color-bg.svg" />
                    <div className="flex flex-col gap-0.5">
                        <p className="font-semibold text-xl">Save to Your Elnk</p>
                        <p
                            className="leading-none text-xs font-light">Create your Elnk or
                            sign in with one tap. </p>
                    </div>
                </div>
            </Link>
            

            <a href="#" onClick={(e) => {
          e.preventDefault();
          onSaveContactToggle();
        }}
                className="flex items-center gap-6 backdrop-blur-[60px] bg-white/5 border border-white/5 p-6 rounded-3xl saveContactsToggle">
                <Image alt="" width={100} height={100} src="/images/save-to.svg" />
                <div className="flex flex-col gap-0.5">
                    <p className="font-semibold text-xl">Save to Contacts</p>
                    <p
                        className="leading-none text-xs font-light">Add this contact to
                        your phone</p>
                </div>
            </a>
        </div>

    );
}
