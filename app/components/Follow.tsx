import ProfileTitle from "./ProfilTitle"
import Button from "./ui/Button"

export default function Follow(){
    const socials = [
        { icon: "icon-Instagram-Logo", span: 1 },
        { icon: "icon-X-Logo", span: 1 },
        { icon: "icon-LinkedIn-2---Negative", span: 1 },
        { icon: "icon-TikTok---Negative", span: 1 },
        { icon: "icon-YouTube---Negative", span: 2 },
    ];
    return(
        <div className="p-4 text-white text-xs">
            <ProfileTitle title="Follow" />
            <div className="grid grid-cols-2 *:h-10! *:gap-2 gap-2.5 *:rounded-[10px]!">
                {socials.map((item, i) => (
                    <Button
                        key={i}
                        variant="white"
                        className={item.span === 2 ? "col-span-2" : ""}
                    >
                        <i className={item.icon}></i> Follow
                    </Button>
                ))}
            </div>
        </div>
    )
}