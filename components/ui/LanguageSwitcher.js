import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaErlang, FaWhatsapp, FaPhone } from "react-icons/fa";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    }
  }, []); 

  const handleChangeLanguage = (newLang) => {
    localStorage.setItem("lang", newLang);
    router.push(router.pathname, router.pathname, { locale: newLang });
    window.location.reload();
  };

  return (
    <div className="flex items-center">
      <label className="switch" label={lang === "ar" ? "en" : "ar"}>
        <input label={lang === "ar" ? "en" : "ar"}
          type="checkbox"
          checked={lang === "ar"}
          onChange={() => handleChangeLanguage(lang === "ar" ? "en" : "ar")}
        />
        <span className="slider round"></span>
      </label>
    
      <span style={{padding:10}} >{lang === "ar" ? "  ar" : " en"}</span>
      <style jsx>{`
        /* The switch - adapted from https://www.w3schools.com/howto/howto_css_switch.asp */
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }
        input:checked + .slider {
          background-color: #2196F3;
        }
        input:focus + .slider {
          box-shadow: 0 0 1px #2196F3;
        }
        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }
        .slider.round {
          border-radius: 34px;
        }
        .slider.round:before {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
