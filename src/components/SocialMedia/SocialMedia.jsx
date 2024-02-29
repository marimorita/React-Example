import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./SocialMedia.css"

export const SocialMedia = () => {
    return(
        <div className="SocialFather">
              <FaLinkedinIn className="social" />
              <FaFacebookF  className="social" />
              <FaInstagram  className="social" />
              <FaTwitter    className="social" />
              <FaWhatsapp   className="social" />
        </div>
    )
}