import React from "react";
import { motion } from "framer-motion";
import "./buttonCV.css";

const buttonCV = () => (
  <motion.a
    href="https://drive.google.com/file/d/1lQMrCumAnEJAwL65bmKNVE2D_mjnfJ4J/view?usp=sharing" 
    target="_blank"
    className="btn-primary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    📄 Télécharger mon CV
  </motion.a>
);

export default buttonCV;
