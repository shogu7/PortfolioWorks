import React from "react";
import "./buttonCV.css";

const buttonCV = () => (
  <motion.a
    href="https://drive.google.com/file/d/1-51UWO2-nfReUW5ZNipYOwfnAAyB0i0A/view?usp=sharing"
    target="_blank"
    className="btn-primary"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    📄 Télécharger mon CV
  </motion.a>
);

export default buttonCV;
