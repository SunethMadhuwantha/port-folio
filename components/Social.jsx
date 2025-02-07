import Link from "next/link"
import{FaGithub,FaLinkedin,FaYoutube,FaTwitter} from "react-icons/fa"

const socials=[
    {icon:<FaGithub/>,path: ''},
    {icon:<FaLinkedin/>,path: ''},
    {icon:<FaYoutube/>,path: ''},
    {icon:<FaTwitter/>,path: ''},
]
const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link key={index} href={item.path} className={`flex items-center justify-center w-10 h-10 border border-accent rounded-full text-accent text-xl hover:bg-accent hover:text-primary transition-all duration-500 ${iconStyles}`}>
                    {item.icon}
 
                </Link>
            )
        })}
      
    </div>
  )
}

export default Social
