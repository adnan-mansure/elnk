interface ProfileTitleProps {
  title?: string; // optional, defaults to 'Follow'
}
export default function ProfileTitle({ title }: ProfileTitleProps){
    return(
        <div className="text-white/80 mb-5 text-base">{title}</div>
    )
}