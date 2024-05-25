import { Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import DoneIcon from "@mui/icons-material/Done";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { globalVariants } from "../constants";

const { containerVariants, scrollUpVariants, fadeZoomInVariants } =
  globalVariants;

export default function About({ aboutData }) {
 
  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid lg:grid-cols-2 items-center w-full px-4  xl:w-4/5 mx-auto my-6"
      >
        <motion.div variants={scrollUpVariants} className="col-span-1">
          <AppsIcon className="text-primary text-base inline-block my-4 mr-2"></AppsIcon>
          <Typography
            variant="caption"
            className="inline-block text-sm text-primary font-bold"
          >
            {aboutData.title}
          </Typography>
          <Typography variant="h4" className="text-2xl font-bold lg:text-3xl">
            {aboutData.subtitle}
          </Typography>
          <div className="flex w-20 justify-between my-2">
            <div className=" w-16 h-1 bg-black"></div>
            <div className=" w-1 h-1 bg-black"></div>
          </div>
          <Typography paragraph sx={{ marginY: 2 }} className="text-gray-600">
            {aboutData.paragraph}
          </Typography>
          <div className="lg:grid grid-cols-2 gap-x-2">
            {aboutData.achievements.map((achievement) => (
              <div className="col-span-1" key={achievement}>
                <DoneIcon className="text-primary mr-4" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-4 my-4">
            <Button isPrimary={true}>Read more</Button>
            <div className="flex gap-x-2 text-xl text-primary cursor-pointer">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeZoomInVariants}
          className="col-span-1 flex justify-center"
        >
          <Image
            src={aboutData.aboutImg}
            alt="seo-illustration-image"
            width={500}
            height={500}
          ></Image>
        </motion.div>
      </motion.div>

     
    </div>
  );
}
