"use client"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue } from "@/components/ui/select"

  import { FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
   } from "react-icons/fa"

   const info = [
    {
      icon:<FaPhoneAlt/>,
      title:"Phone",
      description:"+94 713 737 040",
    },
    {
      icon:<FaEnvelope/>,
      title:"Email",
      description:"90zuneth99@gmail.com",
    },
    {
      icon:<FaMapMarkerAlt/>,
      title:"Address",
      description:"Colombo, Sri Lanka",
    },
   ]

   import { motion } from "framer-motion"
const Contact = () => {
  return <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className="py-6">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="order-2 xl:order-none xl:h-[54%]">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60" >
             ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem fugit quis culpa enim veniam incidunt, provident, 
            ipsa labore nulla ipsum quaerat voluptatem voluptates aliquid, totam ad animi. Dolores, cum.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="lastname" placeholder="Lastname"/>
              <Input type="email" placeholder="Email address"/>
              <Input type="phone" placeholder="Phone number"/>
            </div>
            
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          info
        </div>
      </div>
    </div>
  </motion.section>
}

export default Contact
