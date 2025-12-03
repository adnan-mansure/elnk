import Button from "./ui/Button";
import Image from "next/image";

type SaveContactProps = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
};

export default function SaveContact({ isOpen, onClose, onSuccess }: SaveContactProps) {
    return (
        <div
            className={`max-h-[80vh] bg-cover bg-top rounded-t-[40px] flex flex-col fixed max-w-[440px] bottom-0 left-auto right-auto z-20 w-full pt-4 px-9 text-white overflow-auto
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`} style={{ backgroundImage: "url('/images/save_contact1.jpg')" }}>
            <Image alt="" width={162} height={22} onClick={onClose}
                className="absolute top-0 h-[22px] left-1/2 -translate-x-1/2 cursor-pointer"
                src="/images/grabber.svg" />

            <div className="text-right">
                <Button variant="default" icon onClick={onClose}>
                    <i className="icon-Cross"></i>
                </Button>
            </div>

            <div className="flex-1 overflow-auto mb-4 mt-3">
                <Image alt="" width={367} height={750} src="/images/iPhone.png" />
            </div>
            <Button variant="primary" size="lg" onClick={() => {
                onSuccess();
                onClose();
            }}>Proceed to Save Contact</Button>
        </div>
    );
}
