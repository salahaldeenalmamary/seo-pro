import React, { useState } from "react";
import Heading from "./ui/Heading";
import { Button, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { motion } from "framer-motion";
import { globalVariants } from "../constants";
import { FaFacebookF, FaInstagram, FaTwitter, faemail, FaWhatsapp, FaPhone } from "react-icons/fa";

const { containerVariants, scrollUpVariants } = globalVariants;

export default function Contact({ contactData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    appType: "WhatsApp"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, subject, message, appType } = formData;

    let url;
    switch(appType) {
      case "WhatsApp":
        url = `https://wa.me/+967714846856?text=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        )}`;
        break;
      case "SMS":
        url = `sms:+967714846856?body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        )}`;
        break;
      case "Email":
        url = `mailto:salahalmamary5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        break;
      default:
        return;
    }

    window.open(url, "_blank");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.div variants={scrollUpVariants} className="text-center">
        <Heading>{contactData}</Heading>
      </motion.div>
      <motion.form
        variants={scrollUpVariants}
        className="lg:w-2/5 md:w-1/2 w-full px-4 mx-auto flex flex-col gap-y-6"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 grid-cols-2">
          <TextField
            className="cols-span-1"
            id="name"
            label="Your Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            className="cols-span-1"
            id="email"
            label="Your Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <TextField
          fullWidth
          id="subject"
          label="Subject"
          variant="outlined"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="appType-label">Send Via</InputLabel>
          <Select
            labelId="appType-label"
            id="appType"
            name="appType"
            value={formData.appType}
            onChange={handleChange}
            label="Send Via"
          >
            <MenuItem value="WhatsApp">
              <FaWhatsapp /> WhatsApp
            </MenuItem>
            <MenuItem value="SMS">
              <FaPhone /> SMS
            </MenuItem>
            <MenuItem value="Email">
              Email
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="py-4 px-6 bg-primary w-full text-white rounded-md"
        >
          Send Message
        </Button>
      </motion.form>
    </motion.div>
  );
}
