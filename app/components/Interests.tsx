import Image from "next/image";
import ProfileTitle from "./ProfilTitle";
export default function Interests(){
    const interests = [
        { image: "Tennis.svg", title: 'Tennis' },
        { image: "golf.svg", title: 'Golf' },
        { image: "Travel.svg", title: 'Travel' },
        { image: "cars.svg", title: 'Cars' },
        { image: "Skiing.svg", title: 'Skiing' },
        { image: "Filmmaking.svg", title: 'Filmmaking' },
        { image: "Entrepreneur.svg", title: 'Entrepreneur' },
    ];
    return(
        <div className="p-4 text-white text-xs">
            <ProfileTitle title="Interests" />
            <div
            className="flex flex-wrap *:flex *:items-center *:gap-1.5 gap-5 bg-white/5 rounded-lg p-5">
                {interests.map((item, i) => (
                    <span key={i}><Image width={16} height={16} alt="" src={`/images/${item.image}`} />{item.title}</span>
                ))}
            </div>
        </div>
    )
}