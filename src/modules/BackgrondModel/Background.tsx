import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './BackgroundCSS.css';

export const BackgroundRandom: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
  }, []);

  return (
    <div id="particles-container">
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{ background: { color: { value: "#171717" } }, fpsLimit: 100, particles: { links: { distance: 150, enable: true, opacity: 0.2, width: 0.3 }, collisions: { enable: true }, move: {enable: true, outModes: { default: "bounce" }, random: false, speed: 2, straight: false }, number: { density: { enable: true, area: 850 }, value: 86 }, opacity: { value: 0.5 }, shape: { type: "triangle" }, size: { value: { min: 1, max: 1 } } }, detectRetina: false }}/>
    </div>
  );
};

