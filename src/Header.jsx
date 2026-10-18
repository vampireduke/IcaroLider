// import { tsParticles } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";

// (async () => {
//   await loadSlim(tsParticles);
//   await tsParticles.load({
//     id: "tsparticles",
//     options: {
//       fullScreen: { enable: false },
//       background: { color: "#0d1117" },
//       particles: {
//         shape: { type: "circle" },
//         size: { value: {min:30, max:500} },
//           paint: {
//             fill: {
//               color: { value: ["#46ddf8cc", "#4ecdc4", "#fa7b90"] },
//             },
//           },
//         number: { value: 30},
//         move: { enable: true, speed: 3 },
//         opacity: {
//           value: 0.5,
//         },
//       },
//     },
//   });
// })();

// export default function Header() {
//   return (
//   <div style={{
//   position: "absolute",
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   }}>
//      <div style={{
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100vh",
//     zIndex: 0,
//   }}>

//   <header id="tsparticles" style={{ width: '100%', height: '1500px' }}>       
//   </header>
//   </div>
//   <h1 style={{ position: "relative", zIndex: 1, textAlign: "center", margin: 0, top: '-350px'  }}> Icaro Lider</h1>
//   </div>
//   );
// }

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import VantaClouds from 'vanta/dist/vanta.clouds.min';
import SocialLinks from './SocialLinks';
import myLogoImg from './assets/output-onlinepngtools.png';

// Make THREE globally available to Vanta
if (typeof window !== 'undefined') {
  window.THREE = THREE;
}

export default function Header() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Check if Vanta loaded as a direct function or via .default
    const initClouds = typeof VantaClouds === 'function' ? VantaClouds : VantaClouds.default;

    if (!vantaEffect.current && vantaRef.current && typeof initClouds === 'function') {
      vantaEffect.current = initClouds({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: '#1a7ef0',
        cloudColor: 0xadc1d3,
        cloudShadowColor: 0x183550,
        sunColor: '#e66c1a',
        sunGlareColor: 0xff6600,
        sunlightColor: 0xff9900,
        speed: 1.0
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <header
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ zIndex: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={myLogoImg}
          style={{
            width: '700px',
            height: '700px',
            objectFit: 'contain',
            marginBottom: '1.5rem',
            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))'
          }}
        />
      </div>
      <SocialLinks/>
    </header>
  );
}