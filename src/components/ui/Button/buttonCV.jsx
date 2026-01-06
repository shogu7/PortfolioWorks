import React from "react";
import { motion } from "framer-motion";
import "./buttonCV.css";

const ButtonCV = () => (
  <motion.a
    href="https://drive.google.com/file/d/1v3PolCHJjS1wOum_T89ZuuwZ6qXIl1_U/view?usp=sharing"
    target="_blank"
    className="btn-primary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    📄 Télécharger mon CV
  </motion.a>
);

export default ButtonCV;
