"use client";


import Link from "next/link";

import { usePathname } from "next/navigation"
import { SheetContent, SheetTrigger,Sheet } from "./ui/sheet";
import {CiMenuFries} from "react-icons/ci"
import { DialogTitle } from "@radix-ui/react-dialog";

const links=[
    {
        name:"home",
        path:"/",
    },
    {
        name:"services",
        path:"/services",
    },
    {
        name:"resume",
        path:"/resume",
    },
    {
        name:"work",
        path:"/work",
    },
    {
        name:"contact",
        path:"/contact",
    },
]
const MobiliNav = () => {
    const pathname=usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>

        </SheetTrigger>
        <SheetContent className="flex flex-col">
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle> 
            {/*logo*/}
            <div className="mt-32 mb-40 text-center text-2xl">
                 <Link href="/">
                 <h1 className="text-4xl font-semibold">
                    Suneth <span className="text-accent">.</span></h1> 
                 </Link>
                 </div>
            {/*nav*/}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link,index)=>{
                    return(
                        <Link href={link.path} key={index} className={`${link.path===pathname &&"text-accent border-b-2 border-accent"

                        }
                         text-xl  capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}

            </nav>

        </SheetContent>
        
    </Sheet>
  )
}

export default MobiliNav
