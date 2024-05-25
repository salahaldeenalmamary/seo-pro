import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaPhone } from "react-icons/fa";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroVariants,globalVariants } from "../constants";

const { containerVariants, childrenVariants, leftButtonVariants, rightButtonVariants } = heroVariants;

export default function Footer({ footerData }) {
  return (
    <div className="bg-primary text-white mt-20">
      <motion.div
        variants={globalVariants.fadeZoomInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-4/5 mx-auto py-20"
      >
        <motion.div variants={globalVariants.bounceVariants} viewport={{ once: false }} className="col-span-1">
          <Typography variant="h5" fontWeight={700} className="mb-4">
            Get In Touch
          </Typography>
          {footerData.getInTouch.map((item, index) => (
            <div key={index} className="py-2 flex items-center">
              <LocationOnIcon className="mr-2" />
              <span>{item}</span>
            </div>
          ))}

          <div className="flex gap-x-6 text-2xl my-6">
            <a href="whatsapp://send?phone=+967714846856">
              <FaWhatsapp />
            </a>
            <a href="tel:+967714846856">
              <FaPhone />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        <motion.div variants={childrenVariants} viewport={{ once: false }} className="col-span-1">
          <Typography variant="h5" fontWeight={700} className="mb-4">
            Popular Links
          </Typography>
          {footerData.popularLink.map((item, index) => (
            <div key={index} className="py-2 flex items-center">
              <KeyboardArrowRightIcon className="mr-2" />
              <span className="capitalize">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={childrenVariants} viewport={{ once: false }} className="col-span-1">
          <Typography variant="h5" fontWeight={700} className="mb-4">
            Project Gallery
          </Typography>
          <ImageList cols={3} sx={{ width: 200 }}>
            {footerData.projectGallery.map((item, index) => (
              <ImageListItem key={index}>
                <Image
                  alt={item}
                  src={item}
                  width={100}
                  height={100}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </motion.div>

        <motion.div variants={childrenVariants} viewport={{ once: false }} className="col-span-1">
          <Typography variant="h5" fontWeight={700} className="mb-4">
            Newsletter
          </Typography>
          <p>Subscribe to our newsletter for the latest updates</p>
          <div className="mt-6 flex">
            <input
              type="text"
              placeholder="Your Email"
              className="text-black rounded-full py-3 px-4 flex-1"
            />
            <button className="bg-secondary text-white rounded-full p-3 ml-2">
             
            </button>
          </div>
        </motion.div>
      </motion.div>
      <hr className="w-4/5 mx-auto" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="md:flex md:justify-between w-4/5 mx-auto py-10"
      >
        <motion.h6 variants={childrenVariants} viewport={{ once: false }} className="text-center md:text-start">
          ©{" "}
          <Link href="/" className="cursor-pointer">
            {/* Add your site name or link here */}
            YourSiteName
          </Link>
          , All Rights Reserved. Designed By{" "}
          <Link href="https://yourdesignerlink.com" className="cursor-pointer">
            SalahAldeen Almamari
          </Link>
        </motion.h6>
        <motion.div
          variants={childrenVariants}
          className="flex gap-x-4 capitalize justify-center md:mt-0 mt-4"
        >
          {footerData.assets.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
