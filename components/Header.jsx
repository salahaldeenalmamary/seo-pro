import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Button from "./ui/Button";
import LanguageSwitcher from "./ui/LanguageSwitcher";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const navItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Header({ navData }) {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${
        header ? "bg-white text-black p-3 shadow-lg" : "text-white p-6"
      } shadow-lg fixed left-0 right-0 flex justify-between items-center 
      w-full mx-auto max-w-full z-10`}
    >
      <Link href="/" className={`${header ? "text-primary" : "text-secondary"} flex items-center`} variants={navItemVariants}>
        <SearchIcon sx={{ fontSize: "4rem" }}></SearchIcon>
        <Typography variant="h4" fontWeight={700}>
          SEO
        </Typography>
        <Typography variant="h6">Master</Typography>
      </Link>

      <div className="lg:flex hidden gap-x-6 items-center">
        <Navbar navData={navData}></Navbar>
        <SearchIcon className="text-paleBlue"></SearchIcon>
      </div>

      <LanguageSwitcher></LanguageSwitcher>

      <motion.div
        className="lg:hidden cursor-pointer"
        onClick={() => setNavMobile(!navMobile)}
        variants={navItemVariants}
      >
        <MenuIcon
          sx={{ fontSize: "2rem" }}
          className={`${header && "text-primary"}`}
        ></MenuIcon>
      </motion.div>

      <motion.div
        className={`${
          navMobile ? "max-h-[500px]" : "max-h-0"
        } lg:hidden max-w-[200px] bg-white text-black absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all duration-200`}
        variants={navItemVariants}
      >
        <NavbarMobile navData={navData} />
      
      </motion.div>
    </motion.header>
  );
}
