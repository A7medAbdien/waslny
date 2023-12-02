import React from "react";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

export const contactData = {
    header: "",
    contactInfo1Title: "Contact Information",
    contactInfo1: [
        { icon: React.createElement(MdLocationPin), title: "Address", description: "Address Address Address Address Address " },
        { icon: React.createElement(MdPhone), title: "Phone", description: "Phone Phone Phone Phone Phone Phone " },
        { icon: React.createElement(MdEmail), title: "Email", description: "Email Email Email Email Email Email " },
    ],
    contactInfo2Title: "Contact Information 2",
    contactInfo2: [
        { icon: React.createElement(MdLocationPin), title: "Address", description: "Address Address Address Address Address " },
        { icon: React.createElement(MdPhone), title: "Phone", description: "Phone Phone Phone Phone Phone Phone " },
        { icon: React.createElement(MdEmail), title: "Email", description: "Email Email Email Email Email Email " },
    ],
}