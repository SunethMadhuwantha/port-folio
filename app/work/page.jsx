"use client";

import React,{ useState } from "react";
import { motion } from "framer-motion";

import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrow90DegRight,BsGithub } from "react-icons/bs";


import { Tooltip,TooltipProvider,TooltipContent,TooltipTrigger  } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects=[
  {
    num:'01',
    catogory:"frontend",
    title:'project 1',
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique quos ratione vero adipisci! Nihil at cum amet earum sequi molestiae voluptate sed voluptates laboriosam aliquam. Voluptate commodi archite",
    stack:[{name:"Next.js"},{name:"tailwind.css"},{name:"HTML5"}],
    image:"/assets/work/thumb1.png",
    live:"",
    github:"",
  },
  {
    num:'02',
    catogory:"frontend",
    title:'project 2',
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique quos ratione vero adipisci! Nihil at cum amet earum sequi molestiae voluptate sed voluptates laboriosam aliquam. Voluptate commodi archite",
    stack:[{name:"Next.js"},{name:"tailwind.css"}],
    image:"/assets/work/thumb2.png",
    live:"",
    github:"",
  },{
    num:'03',
    catogory:"frontend",
    title:'project 3',
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique quos ratione vero adipisci! Nihil at cum amet earum sequi molestiae voluptate sed voluptates laboriosam aliquam. Voluptate commodi archite",
    stack:[{name:"Next.js"},{name:"tailwind.css"}],
    image:"/assets/work/thumb3.png",
    live:"",
    github:"",
  }
]

const work = () => {
  return (
    <div>
      work page
    </div>
  )
}

export default work
