import ProfileTitle from "./ProfilTitle";
export default function SkillsTools(){
    const skills = [
        "CSS",
        "User Interface Design",
        "UI/UX",
        "SaaS Development",
        "Webflow",
        "Figma",
        "After Effects",
        "Premiere Pro",
        "Team Leadership",
        "Marketing Strategy",
        "Film Production",
        "Video Editing",
        "Photography",
        "Image Editing",
        "Adobe Creative Suite",
        "Project Planning",
        "Time Management",
        "Creative Strategy",
        "Marketing",
        "Advertising",
        "Short Films",
        "Google Ads",
        "Facebook Marketing",
        "Reliability",
    ]
    return(
        <div className="p-4 text-white text-xs">
            <ProfileTitle title="Skills & Tools" />
            <div
          className="flex flex-wrap gap-2 *:bg-white/5 *:rounded-[14px] *:backdrop-blur-[60px] *:p-2 *:border *:border-white/10 text-white/80">
                {skills.map((item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </div>
        </div>
    )
}