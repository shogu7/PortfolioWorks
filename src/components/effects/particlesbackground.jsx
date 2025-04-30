import React, { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles with slim version...");
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#1a1a1a",
          },
        },
        particles: {
          number: {
            value: 40, 
            density: {
              enable: true,
              value_area: 1200
            }
          },
          color: {
            value: ["#bdc3c7", "#2c3e50", "#95a5a6"] 
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.6 
          },
          size: {
            value: 2 
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: "#bdc3c7",
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          }
        },
        retina_detect: true
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );
};

export default ParticlesBackground;
