// "use client";

// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";

// function Star({ position, speed }) {
//   const ref = useRef();

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.position.y -= speed;
//     if (ref.current.position.y < -5) {
//       ref.current.position.y = 5 + Math.random() * 2;
//       ref.current.position.x = (Math.random() - 0.5) * 20;
//       ref.current.position.z = (Math.random() - 0.5) * 20;
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.01, 3, 3]} />
//       <meshBasicMaterial color="white" />
//     </mesh>
//   );
// }

// function PowderSystem({ count = 800 }) {
//   const stars = Array.from({ length: count }, (_, i) => ({
//     key: i,
//     position: [
//       (Math.random() - 0.5) * 20,
//       Math.random() * 10,
//       (Math.random() - 0.5) * 20,
//     ],
//     speed: 0.002 + Math.random() * 0.003,
//   }));

//   return (
//     <>
//       {stars.map(({ key, position, speed }) => (
//         <Star key={key} position={position} speed={speed} />
//       ))}
//     </>
//   );
// }

// export default function StarryBackground() {
//   return (
//     <Canvas
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: -1,
//         width: "100vw",
//         height: "100vh",
//         pointerEvents: "none",
//       }}
//       camera={{ position: [0, 0, 1], fov: 75 }}
//     >
//       {/* optional light (not needed for meshBasicMaterial) */}
//       <PowderSystem count={800} />
//     </Canvas>
//   );
// }




// "use client";

// import React, { useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, Html } from "@react-three/drei";

// function Star({ position, speed }) {
//   const ref = useRef();

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.position.y -= speed;
//     if (ref.current.position.y < -5) {
//       ref.current.position.y = 5 + Math.random() * 2;
//       ref.current.position.x = (Math.random() - 0.5) * 20;
//       ref.current.position.z = (Math.random() - 0.5) * 20;
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.01, 3, 3]} />
//       <meshBasicMaterial color="white" />
//     </mesh>
//   );
// }

// function PowderSystem({ count = 800 }) {
//   const stars = Array.from({ length: count }, (_, i) => ({
//     key: i,
//     position: [
//       (Math.random() - 0.5) * 20,
//       Math.random() * 10,
//       (Math.random() - 0.5) * 20,
//     ],
//     speed: 0.002 + Math.random() * 0.003,
//   }));

//   return (
//     <>
//       {stars.map(({ key, position, speed }) => (
//         <Star key={key} position={position} speed={speed} />
//       ))}
//     </>
//   );
// }
// function FloatingBurger() {
//   const ref = useRef();
//   const { scene } = useGLTF("/models/burger.glb");

//   // Make all materials transparent with opacity 0.8
//   scene.traverse((child) => {
//     if (child.isMesh) {
//       if (child.material) {
//         child.material.transparent = true;
//       //   child.material.opacity = 0.6;
//       }
//     }
//   });

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       const t = clock.getElapsedTime();

//       ref.current.position.set(0, 0, 0);
//       ref.current.rotation.y = t * 0.5;
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.1} />;
// }



// export default function StarryBackground() {
//   return (
//     <Canvas
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: -1,
//         width: "100vw",
//         height: "100vh",
//         pointerEvents: "none",
//       }}
//       camera={{ position: [0, 0, 8], fov: 50 }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <PowderSystem count={800} />
//       <Suspense fallback={<Html center style={{ color: "white" }}>Loading...</Html>}>
//         <FloatingBurger />
//       </Suspense>
//     </Canvas>
//   );
// }  




















"use client";

import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

function Star({ position, speed }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.y -= speed;
    if (ref.current.position.y < -5) {
      ref.current.position.y = 5 + Math.random() * 2;
      ref.current.position.x = (Math.random() - 0.5) * 20;
      ref.current.position.z = (Math.random() - 0.5) * 20;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.01, 3, 3]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

function PowderSystem({ count = 800 }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    key: i,
    position: [
      (Math.random() - 0.5) * 20,
      Math.random() * 10,
      (Math.random() - 0.5) * 20,
    ],
    speed: 0.002 + Math.random() * 0.003,
  }));

  return (
    <>
      {stars.map(({ key, position, speed }) => (
        <Star key={key} position={position} speed={speed} />
      ))}
    </>
  );
}

function FloatingBurger() {
  const ref = useRef();
  const { scene } = useGLTF("/models/burger.glb");

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.multiplyScalar(0.67); // Makes it darker
      child.material.roughness = 1;              // Makes it less shiny (optional)
      child.material.metalness = 0;              // No metallic shine (optional)
    }
  });

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.set(0, 0, 0);
      ref.current.rotation.y = t * 0.5;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.1} />;
}


function DarkBackground() {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new THREE.Color("#0d0d0d"); // Dark background
  }, [scene]);

  return null;
}

export default function StarryBackground() {
  return (
    <>
      {/* Overlay div for dark effect on top of burger/canvas */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -0.5, // Just above Canvas (zIndex -1)
          backgroundColor: "rgba(0, 0, 0, 0.4)", // semi-transparent black
          pointerEvents: "none", // So it doesn't block user interaction
        }}
      />
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <DarkBackground />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <PowderSystem count={800} />
        <Suspense fallback={<Html center style={{ color: "white" }}>Loading...</Html>}>
          <FloatingBurger />
        </Suspense>
      </Canvas>
    </>
  );
}
