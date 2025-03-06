"use client"
import { FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs } from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs} from "react-icons/si"

const about = {
  title:'About me',
  description:'lorem ipsum dolor sit amet, consectetur adip non pro',
  info:[
    {
    fileName:"Name",
    fieldValue:"Luke colman"
  },
  {
    fileName:"Phone",
    fieldValue:"(+94) 71 3737 040"
  },
  {
    fileName:"Expirence",
    fieldValue:"1+ Years"
  },
  {
    fileName:"Nationality",
    fieldValue:"Sri Lankan"
  },
  {
    fileName:"Insta",
    fieldValue:"kitty.007"
  },
  {
    fileName:"Email",
    fieldValue:"90zuneth99@gmail.com"
  },
]
}

//expirience
const expirience = {
  icon:"/assets/resume/badge.svg",
  title:"My experience",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items:[
    {
      company:"ABC company",
      position:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      company:"xyz company",
      position:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      company:"xyz company",
      position:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      company:"xyz company",
      position:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      company:"xyz company",
      position:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
    
}

//education
const education = {
  icon:"/assets/resume/cap.svg",
  title:"My education",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items:[
    {
      instittution:"ABC company",
      degree:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      instittution:"ABC company",
      degree:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      instittution:"ABC company",
      degree:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      instittution:"ABC company",
      degree:"Senior Developer",
      duration:"2019-2021",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
    
}

const skills = {
  icon:"/assets/resume/badge.svg",
  title:"My skills",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  
  
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html 5",
      },
      {
        icon:<FaCss3/>,
        name:"css 3",
        },
        {
          icon:<FaJs/>,
          name:"javascript",
        },
        {
          icon:<FaReact/>,
          name:"react.js",
        },
        {
          icon:<SiNextdotjs/>,
          name:"next.js",
        },
        {
          icon:<SiTailwindcss/>,
          name:"tailwind.css",
        },
        {
          icon:<FaNodeJs/>,
          name:"node.js",
        },
        {
          icon:<FaFigma/>,
          name:"figma",
        },
    
  ]
    
}


import {Tooltip,TooltipTrigger,TooltipContent,TooltipProvider} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";



const Resume = () => {
  return (
    <motion.div 
     initial={{opacity:0}}
     animate={{
      opacity: 1,
      transition:{delay:2.4,duration:0.4,ease:"easeIn"},
     }}
     className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
     >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expirience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{expirience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {expirience.items.map((item,index)=>{
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>

                          </li>
                        )
                      })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item,index)=>{
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.instittution}</p>
                            </div>

                          </li>
                        )
                      })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                 <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                  </p>
                 </div>
                 <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill,index)=>{
                    return(
                      <li key={index} >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}

                              </div>

                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                          
                        </TooltipProvider>
                        
                      </li>
                    )
                  })}
                 </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>

          </div>

        </Tabs>

      </div>

    </motion.div>
  )
}

export default Resume
