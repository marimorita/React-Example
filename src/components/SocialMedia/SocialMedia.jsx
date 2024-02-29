import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import "./SocialMedia.css"

export const SocialMedia = () => {
    return(
        <div className="SocialFather">
            <a className="social" href=""><BsLinkedin /></a>
            <a className="social" href=""><BsFacebook /></a>
            <a className="social" href=""><BsInstagram /></a>
            <a className="social" href=""><BsTwitter /></a>
            <a className="social" href=""><BsWhatsapp /></a>
        </div>
    )
}