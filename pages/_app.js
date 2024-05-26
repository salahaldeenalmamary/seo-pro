import "@/styles/globals.css";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { circularProgressClasses } from "@mui/material";



export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 text-black">
      <Suspense  fallback={<circularProgressClasses />} >
        <Component {...pageProps} />
      </Suspense>
    </div>
  );
}
