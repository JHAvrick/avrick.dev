import React, { useState } from 'react';
import Variants from "../variants";
import { motion } from "framer-motion";
import Tilt from 'react-tilt';
import './contact.css';

function Contact(props) {
    return (
        <motion.section className="contact" initial="initial" animate="enter" exit="exit" variants={Variants.Page}>
            Contact Section


            {props.children}
        </motion.section>
    );
}

export default Contact;
