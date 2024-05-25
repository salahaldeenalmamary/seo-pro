import React from "react";
import { FaHome } from "react-icons/fa";
import Heading from "./ui/Heading";
import { motion } from "framer-motion";
import { globalVariants } from "../constants";
import useIntersection from '../hooks/useIntersection';
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
const {
  containerVariants,
  childContainerVariants,
  bounceVariants,
  fadeZoomInVariants,
  
} = globalVariants;

export default function Services({ servicesData }) {
  const containerRef =React. useRef(null);
  const isVisible = useIntersection(containerRef, { threshold: 0.1 });
  return (
    <ScrollAnimationWrapper>
      
      <motion.div
  
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  
  viewport={{ once: false }}
>
  <motion.div variants={bounceVariants} className="text-center">
    <Heading>{servicesData}</Heading>
  </motion.div>
  <motion.div
    variants={bounceVariants}
    initial="hidden"
    whileInView="visible"

    viewport={{ once: false }}
    className=" lg:w-4/5 mx-auto grid md:grid-cols-2 xl:grid-cols-3 md:p-8 md:gap-6 p-4 gap-4"
  >
    {servicesData.ourServices.map((item) => (
      <motion.div variants={fadeZoomInVariants} className="hover:bg-primary"  key={item.id}>
        <div className=" group cols-span-1 bg-white shadow-lg p-8 rounded-lg hover:bg-primary cursor-pointer transition-all duration-500">
          <div className=" group-hover:bg-white w-20 h-20 rounded-[50%] flex justify-center items-center mx-auto my-4">
            <FaHome className="text-4xl text-white group-hover:text-primary"></FaHome>
          </div>
          <div className="flex flex-col justify-center text-center gap-y-4">
          <motion.h1 initial="hidden"
    whileInView="visible"

    viewport={{ once: false }} variants={bounceVariants} className="font-bold text-2xl group-hover:text-white">
              {item.title}
            </motion.h1>
            <motion.p initial="hidden"
    whileInView="visible"

    viewport={{ once: false }} variants={bounceVariants}  className="text-gray-500 group-hover:text-white">
              {item.text}
            </motion.p>
          </div>
          <button
            className="group-hover:before:w-full 
            group-hover:before:bg-white
             group-hover:before:rounded-full 
            my-6 flex p-3  mx-auto relative 
            
            before:absolute 
            before:transition-all 
            before:duration-300 
            before:top-0 
            before:left-0 
            before:w-12 
            before:h-12 
            before:rounded-[50%] 
            before:bg-slate-200"
          >
            <motion.span initial="hidden"
    whileInView="visible"

    viewport={{ once: false }} className="relative font-bold tracking-wider text-primary">
              {item.btnText}
            </motion.span>
          </button>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.div>
    </ScrollAnimationWrapper>
    
  );
}
