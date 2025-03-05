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
  title:"My expirience",
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
  ]
    
}

//education
const education = {
  icon:"/assets/resume/cap.svg",
  title:"My expirience",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items:[
    {
      instittution:"ABC company",
      degree:"Senior Developer",
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

import {Tabs,TabContent,TabList,TabsTrigger} from "@/components/ui/tabs"
import {Tooltip,TooltipTrigger,TooltipContent,TooltipProvider} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"


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
          <TabList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabList>

          <div className="min-h-[70vh] w-full">
            <TabContent value="experience" className="w-full">
              experience
            </TabContent>

          </div>

        </Tabs>

      </div>

    </motion.div>
  )
}

export default Resume
