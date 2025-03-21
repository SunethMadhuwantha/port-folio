import { animate,motion } from "framer-motion"

//variants
const starirAnimation ={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    }
}


const reverseindex=(index)=>{
    const totalSteps =6;//num of steps
    return totalSteps-index-1;
}

const Stairs = () => {
  return (
    <>{/* render 6 motion divs ,each will have same animation
    */}
    {[...Array(6)].map((_,index)=>{
        return(
            <motion.div key={index} variants={starirAnimation} initial="initial" animate="animate" exit="exit"
            transition={{duration:0.4,ease:"easeInOut",delay:reverseindex(index)*0.1,}}
            className="h-full w-full bg-white relative"/>
                
        )
    })}
      
    </>
  )
}

export default Stairs
