

// import React from "react";

// export default function NavBar() {
//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: '100%',
//         height: '80vh',
//         fontFamily: "'Vazir', sans-serif",
//         color: 'white',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Full-width Image */}
//       <img
//         src="/img/4.jpg"
//         alt="navbar"
//         style={{
//           width: '100%',
//           height: '80vh',
//           objectFit: 'cover',
//           filter: 'brightness(0.6)', // darken image
//           transition: 'transform 1.5s ease',
//         }}
//       />

//       {/* Dark overlay */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '80vh',
//           backgroundColor: 'rgba(0, 0, 0, 0.6)',
//           zIndex: 1,
//         }}
//       />

//       {/* Text container positioned on right */}
//       <div
//         style={{
//           position: 'absolute',
//           top: '50%',
//           right: '5%',
//           transform: 'translateY(-50%)',
//           maxWidth: '450px',
//           textAlign: 'right', // for فارسی alignment
//           zIndex: 2,
//           padding: '20px',
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '1.6rem',
//             // marginBottom: '1rem',
//             fontWeight: '700',
//             textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
//             lineHeight: '1.3',
//           }}
//         >
         //  لحظات خوش همراه با طعم‌های <br />  ناب و اصیل
//         </h1>

//         <p
//           style={{
//             fontSize: '0.75rem',
//             letterSpacing: '0.1em',
//             textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
//             lineHeight: '1.7',
//             // marginBottom: '1.5rem',
// 				fontWeight : "400",
// 				color : "hsl(0, 0%, 85%)",
// 				width : "400px"
//           }}
//         >
//           ما به کیفیت غذا اهمیت ویژه‌ای می‌دهیم؛ هر بشقاب با دقت و عشق تهیه شده تا رضایت شما را به‌دست آوریم. لحظاتی خوش و خاطره‌انگیز در کنار خانواده و دوستان را در محیطی گرم و صمیمی برای شما خلق می‌کنیم. از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما، تجربه‌ای فراموش‌نشدنی را تجربه کنید. هر وعده غذایی، داستانی است از سنت، هنر آشپزی و مهمان‌نوازی که با دقت و هنر در کنار هم به‌وجود آمده است. منتظر حضور گرم شما هستیم تا لحظات شیرین زندگی را با هم شریک شویم.
//         </p>

//         {/* Buttons container */}
//         <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
//           <button
//             style={{
//               backgroundColor: 'white',
//               color: '#000',
//               border: 'none',
//               padding: '5px 20px',
//               borderRadius: '8px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               fontSize: '0.8rem',
//               transition: 'background-color 0.3s ease',
// 				  boxShadow: '1px 1px 1px hsl(0, 0%, 50%)',
// 				  fontFamily : "Vazir"
//             }}
//             onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
//             onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'white')}
//           >
//             رزرو میز
//           </button>

//           <button
//             style={{
//               backgroundColor: 'transparent',
//               color: 'white',
//               border: '1px solid white',
//               padding: '10px 20px',
//               borderRadius: '8px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               fontSize: '0.8rem',
//               transition: 'background-color 0.3s ease, color 0.3s ease',
// 				  boxShadow: '1px 1px 1px hsl(0, 0%, 50%)',
// 				  fontFamily : "Vazir"
//             }}
//             onMouseEnter={e => {
//               e.currentTarget.style.backgroundColor = 'white';
//               e.currentTarget.style.color = '#000';
//             }}
//             onMouseLeave={e => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.color = 'white';
//             }}
//           >
//             منو 
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }









// 'use client';
// import React from "react";

// export default function NavBar() {
//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: '100%',
//         height: '80vh',
//         fontFamily: "'Vazir', sans-serif",
//         color: 'white',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background image */}
//       <img
//         src="/img/4.jpg"
//         alt="navbar"
//         style={{
//           width: '100%',
//           height: '80vh',
//           objectFit: 'cover',
//           filter: 'brightness(0.6)',
//           transition: 'transform 1.5s ease',
//         }}
//       />

//       {/* Dark overlay */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '80vh',
//           backgroundColor: 'rgba(0, 0, 0, 0.6)',
//           zIndex: 1,
//         }}
//       />

//       {/* Text container */}
//       <div
//         style={{
//           position: 'absolute',
//           top: '50%',
//           right: '10%',
//           transform: 'translateY(-50%)',
//           maxWidth: '600px',
//           textAlign: 'right',
//           zIndex: 2,
//           padding: '20px',
//           width: '90%',
//         }}
//       >
//         <style jsx>{`
//           @media (max-width: 768px) {
//             div[style*='transform: translateY(-50%)'] {
//               top: 15% !important;
//               transform: none !important;
//               right: 5% !important;
//             }
//           }
//         `}</style>

//         <h1
//           style={{
//             fontSize: 'clamp(1.2rem, 4vw, 2rem)',
//             fontWeight: '700',
//             textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
//             lineHeight: '1.4',
//             marginBottom: '1rem',
//           }}
//         >
//           لحظات خوش همراه با طعم‌های <br /> ناب و اصیل
//         </h1>

//         <p
//           style={{
//             fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)',
//             letterSpacing: '0.05em',
//             textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
//             lineHeight: '1.8',
//             color: "hsl(0, 0%, 85%)",
//             fontWeight: "400",
//             marginBottom: '1.5rem',
//             maxHeight: '40vh',
//             overflowY: 'auto',
//           }}
//         >
//           ما به کیفیت غذا اهمیت ویژه‌ای می‌دهیم؛ هر بشقاب با دقت و عشق تهیه شده تا رضایت شما را به‌دست آوریم. لحظاتی خوش و خاطره‌انگیز در کنار خانواده و دوستان را در محیطی گرم و صمیمی برای شما خلق می‌کنیم. از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما، تجربه‌ای فراموش‌نشدنی را تجربه کنید. هر وعده غذایی، داستانی است از سنت، هنر آشپزی و مهمان‌نوازی که با دقت و هنر در کنار هم به‌وجود آمده است. منتظر حضور گرم شما هستیم تا لحظات شیرین زندگی را با هم شریک شویم.
//         </p>

//         <div
//           style={{
//             display: 'flex',
//             gap: '10px',
//             justifyContent: 'flex-end',
//           }}
//         >
//           <button
//             style={{
//               backgroundColor: 'white',
//               color: '#000',
//               border: 'none',
//               padding: '10px 15px',
//               borderRadius: '8px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               fontSize: '0.75rem',
//               transition: 'background-color 0.3s ease',
//               boxShadow: '1px 1px 1px hsl(0, 0%, 50%)',
//               fontFamily: "Vazir"
//             }}
//           >
//             منوی سفارش
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }















// 'use client';
// import React from "react";

// export default function NavBar() {
//   return (
// 	 <div
// 	   // id="tst-section"
//       className="navbar-container"
//       style={{
//         position: 'relative',
//         width: '100%',
//         height: '80vh',
//         fontFamily: "'Vazir', sans-serif",
//         color: 'white',
//         overflow: 'hidden',
//       }}
//     >

//       {/* Scoped responsive styles */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .navbar-container {
//             height: 60vh !important;
//           }
//           .navbar-image,
//           .navbar-overlay {
//             height: 60vh !important;
//           }
//           .navbar-text-container {
//             top: 15% !important;
//             transform: none !important;
//             right: 0% !important;
//           }
//         }
//       `}</style>

//       {/* Background image */}
//       <img
//         src="/img/pexels-marios-gkortsilas-284432004-13983276.jpg"
//         alt="navbar"
//         className="navbar-image"
//         style={{
//           width: '100%',
//           height: '80vh',
//           objectFit: 'cover',
//           filter: 'brightness(0.3)',
//           transition: 'transform 1.5s ease',
//         }}
//       />

//       {/* Dark overlay */}
//       <div
//         className="navbar-overlay"
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '80vh',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           zIndex: 1,
//         }}
//       />

//       {/* Text container */}
//       <div
//         className="navbar-text-container"
//         style={{
//           position: 'absolute',
//           top: '50%',
//           right: '10%',
//           transform: 'translateY(-50%)',
//           maxWidth: '600px',
//           textAlign: 'right',
//           zIndex: 2,
//           padding: '20px',
//           width: '90%',
//         }}
//       >
// 			<h1
// 			style={{
// 				fontSize: 'clamp(1.2rem, 4vw, 2rem)',
// 				fontWeight: '700',
// 				textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
// 				lineHeight: '1.4',
// 				marginBottom: '1rem',
// 			}}
// 			>
// 			لحظات خوش همراه با طعم‌های <br />
// 			<span
// 				style={{
// 					borderBottom: '1px solid white',
// 					display: 'inline-block',
// 					paddingBottom: '4px',
// 				}}
// 			>
// 				ناب و اصیل
// 			</span>
// 			</h1>


//         <p
//           style={{
//             fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)',
//             letterSpacing: '0.05em',
//             textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
//             lineHeight: '1.8',
//             color: "hsl(0, 0%, 85%)",
//             fontWeight: "600",
//             marginBottom: '1.5rem',
//             maxHeight: '40vh',
//             overflowY: 'auto',
// 				// width : "300px"
//           }}
//         >
//           ما به کیفیت غذا اهمیت ویژه‌ای می‌دهیم؛ هر بشقاب با دقت و عشق تهیه شده تا رضایت شما را به‌دست آوریم. لحظاتی خوش و خاطره‌انگیز در کنار خانواده و دوستان را در محیطی گرم و صمیمی برای شما خلق می‌کنیم. از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما، تجربه‌ای فراموش‌نشدنی را تجربه کنید. هر وعده غذایی، داستانی است از سنت، هنر آشپزی و مهمان‌نوازی که با دقت و هنر در کنار هم به‌وجود آمده است. منتظر حضور گرم شما هستیم تا لحظات شیرین زندگی را با هم شریک شویم.
//         </p>

//         <div
//           style={{
//             display: 'flex',
//             gap: '10px',
//             justifyContent: 'flex-end',
//           }}
//         >
//           <button
//             style={{
//               backgroundColor: 'white',
//               color: '#000',
//               border: 'none',
//               padding: '10px 15px',
//               borderRadius: '8px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               fontSize: '0.75rem',
//               transition: 'background-color 0.3s ease',
//               boxShadow: '1px 1px 1px hsl(0, 0%, 50%)',
//               fontFamily: "Vazir"
//             }}
//           >
//            <a href="#menu" style={{color : "black", textDecoration : "none"}}> منوی سفارش </a> 
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }













// 'use client';

// import React from 'react';
// // import styles from './nav.module.css';
// import styles from '@/styles/nav.module.css'
// // import Image from 'next/image';

// export default function NavBar() {
//   return (
//     <div className={styles.navbarContainer}>
//       <img
//         src="/img/4.jpg"
//         alt="navbar"
//         className={styles.navbarImage}
//       />



//       <div className={styles.navbarOverlay} />

//       <div className={styles.navbarTextContainer}>
//         <h1 className={styles.navbarHeading}>
//           لحظات خوش همراه با طعم‌های <br />
//           <span>ناب و اصیل</span>
//         </h1>

//         <p className={styles.navbarParagraph}>
//           ما به کیفیت غذا اهمیت ویژه‌ای می‌دهیم؛ هر بشقاب با دقت و عشق تهیه شده تا رضایت شما را به‌دست آوریم.
//           لحظاتی خوش و خاطره‌انگیز در کنار خانواده و دوستان را در محیطی گرم و صمیمی برای شما خلق می‌کنیم.
//           از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما، تجربه‌ای فراموش‌نشدنی را تجربه کنید.
//           هر وعده غذایی، داستانی است از سنت، هنر آشپزی و مهمان‌نوازی که با دقت و هنر در کنار هم به‌وجود آمده است.
//           منتظر حضور گرم شما هستیم تا لحظات شیرین زندگی را با هم شریک شویم.
//         </p>

//         <div className={styles.navbarButtonGroup}>
//           <button className={styles.navbarButton}>
//             <a href="#menu">منوی سفارش</a>
//           </button>
//         </div>
//       </div>
//     </div>
	 
//   );
// }













// 'use client';

// import React from 'react';
// import styles from '@/styles/nav.module.css';

// export default function NavBar() {
//   return (
//     <div className={styles.navbarContainer}>
//       {/* LOGO IN TOP LEFT */}
      // <img
      //   src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
      //   alt="logo"
      //   className={styles.logo}
      // />

//       {/* BACKGROUND IMAGE */}
//       <img
//         src="/img/4.jpg"
//         alt="navbar"
//         className={styles.navbarImage}
//       />

//       <div className={styles.navbarOverlay} />

//       <div className={styles.navbarTextContainer}>
//         <h1 className={styles.navbarHeading}>
//           لحظات خوش همراه با طعم‌های <br />
//           <span>ناب و اصیل</span>
//         </h1>

//         <p className={styles.navbarParagraph}>
//           ما به کیفیت غذا اهمیت ویژه‌ای می‌دهیم؛ هر بشقاب با دقت و عشق تهیه شده تا رضایت شما را به‌دست آوریم.
//           لحظاتی خوش و خاطره‌انگیز در کنار خانواده و دوستان را در محیطی گرم و صمیمی برای شما خلق می‌کنیم.
//           از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما، تجربه‌ای فراموش‌نشدنی را تجربه کنید.
//           هر وعده غذایی، داستانی است از سنت، هنر آشپزی و مهمان‌نوازی که با دقت و هنر در کنار هم به‌وجود آمده است.
//           منتظر حضور گرم شما هستیم تا لحظات شیرین زندگی را با هم شریک شویم.
//         </p>

//         <div className={styles.navbarButtonGroup}>
//           <button className={styles.navbarButton}>
//             <a href="#menu">منوی سفارش</a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }













// 'use client';

// import React from 'react';
// import styles from '@/styles/nav.module.css';

// export default function NavBar() {
//   return (
//     <div className={styles.navbarContainer}>
//       {/* LOGO IN TOP LEFT */}
//       <img
//         src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
//         alt="logo"
//         className={styles.logo}
//       />

//       {/* DARK OVERLAY */}
//       <div className={styles.navbarOverlay} />

//       <div className={styles.navbarTextContainer}>
//         <h1 className={styles.navbarHeading}>
//           لحظات خوش همراه با طعم‌های <br />
//           <span>ناب و اصیل</span>
//         </h1>

//         <p className={styles.navbarParagraph}>
//           ما به کیفیت غذا اهمیت ویژه‌ای می‌دهیم؛ هر بشقاب با دقت و عشق تهیه شده تا رضایت شما را به‌دست آوریم.
//           لحظاتی خوش و خاطره‌انگیز در کنار خانواده و دوستان را در محیطی گرم و صمیمی برای شما خلق می‌کنیم.
//           از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما، تجربه‌ای فراموش‌نشدنی را تجربه کنید.
//           هر وعده غذایی، داستانی است از سنت، هنر آشپزی و مهمان‌نوازی که با دقت و هنر در کنار هم به‌وجود آمده است.
//           منتظر حضور گرم شما هستیم تا لحظات شیرین زندگی را با هم شریک شویم.
//         </p>

//         <div className={styles.navbarButtonGroup}>
//           <button className={styles.navbarButton}>
//             <a href="#menu">منوی سفارش</a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
















// "use client"; // for Next.js; remove if CRA

// import React, { Suspense, useRef, useEffect, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import * as THREE from "three";
// import LetterAvatars from "./avatars";
// import Button from "@mui/material/Button";
// import { deepOrange, deepPurple } from "@mui/material/colors";

// // Particle component
// function PowderParticle({ position, speed }) {
//   const ref = useRef();

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.position.y -= speed;
//     // Reset particle to top if below threshold
//     if (ref.current.position.y < 0) {
//       ref.current.position.y = 5 + Math.random() * 2;
//       ref.current.position.x = (Math.random() - 0.5) * 6;
//       ref.current.position.z = (Math.random() - 0.5) * 6;
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.05, 6, 6]} />
//       <meshStandardMaterial color="#f6e27f" emissive="#f6e27f" emissiveIntensity={0.3} />
//     </mesh>
//   );
// }

// // Powder particle system
// function PowderSystem({ count = 100 }) {
//   const particles = [];
//   for (let i = 0; i < count; i++) {
//     particles.push({
//       key: i,
//       position: [
//         (Math.random() - 0.5) * 6,
//         Math.random() * 5 + 1,
//         (Math.random() - 0.5) * 6,
//       ],
//       speed: 0.003 + Math.random() * 0.002,
//     });
//   }

//   return (
//     <>
//       {particles.map(({ key, position, speed }) => (
//         <PowderParticle key={key} position={position} speed={speed} />
//       ))}
//     </>
//   );
// }

// function FloatingBurger() {
//   const ref = useRef();
//   const { scene } = useGLTF("/models/burger.glb");

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.rotation.y = clock.getElapsedTime() * 0.4; // slow rotation
//       ref.current.position.y = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1; // gentle float
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.6} />;
// }


// export default function NavBar() {
//   return (
// 	<div style={{display : "flex"}}>


// 			<div style={{ marginLeft: "80px", fontSize: "1.4rem", width: "450px", fontFamily: "Vazir", textAlign : "right" }}>
// 				<h1>لحظات خوش همراه با طعم‌های ناب و اصیل !</h1>
// 				<p style={{ color: "gray", fontSize: "0.9rem", direction: "rtl" }}>
// 					از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما
// 				</p>

// 				<LetterAvatars />

// 				<div
// 					style={{
// 						display: "flex",
// 						gap: "12px",
// 						marginTop: "20px",
// 						fontFamily: "Vazir, sans-serif",
// 						fontWeight: "600",
// 					}}
// 				>
// 					<button
// 						style={{
// 						backgroundColor: "hsl(0, 100%, 48%)",
// 						color: "white",
// 						padding: "10px 20px",
// 						border: "none",
// 						borderRadius: "17px",
// 						cursor: "pointer",
// 						fontFamily : "Vazir",
// 						boxShadow : "0px 1px 4px hsl(60, 100%, 68%)",
// 						fontWeight : "600"
// 						}}
// 					>
// 						سفارش دهید
// 					</button>

// 					<button
// 						style={{
// 						backgroundColor: "transparent",
// 						color: "yellow",
// 						padding: "10px 20px",
// 						border: "none",
// 						borderRadius: "6px",
// 						cursor: "pointer",
// 						fontFamily : "Vazir",
// 						fontWeight : "600"
// 						}}
// 					>
// 						منو
// 					</button>
// 				</div>
// 				{/* </div> */}



			
// 	 	</div>

// 	<div style={{ width: "auto", height: "100vh", background: "inherit", marginLeft : "280px" }}>
//       <Canvas camera={{ position: [0, 1.5, 44], fov: 45 }}>
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <directionalLight position={[-5, 5, -5]} intensity={0.5} />

//         <Suspense fallback={<Html center style={{ color: "white" }}>Loading...</Html>}>
//           <FloatingBurger />
//         </Suspense>

//         {/* More powder particles */}
//         <PowderSystem count={500} />

//         <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
//       </Canvas>
//     </div>

// 	</div>


//   );
// }















// "use client"; // for Next.js; remove if CRA

// import React, { Suspense, useRef, useEffect, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import * as THREE from "three";
// import LetterAvatars from "./avatars";
// import Button from "@mui/material/Button";
// import { deepOrange, deepPurple } from "@mui/material/colors";

// // Particle component
// function PowderParticle({ position, speed }) {
//   const ref = useRef();

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.position.y -= speed;
//     // Reset particle to top if below threshold
//     if (ref.current.position.y < 0) {
//       ref.current.position.y = 5 + Math.random() * 2;
//       ref.current.position.x = (Math.random() - 0.5) * 6;
//       ref.current.position.z = (Math.random() - 0.5) * 6;
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.05, 6, 6]} />
//       <meshStandardMaterial color="#f6e27f" emissive="#f6e27f" emissiveIntensity={0.3} />
//     </mesh>
//   );
// }

// // Powder particle system
// function PowderSystem({ count = 100 }) {
//   const particles = [];
//   for (let i = 0; i < count; i++) {
//     particles.push({
//       key: i,
//       position: [
//         (Math.random() - 0.5) * 6,
//         Math.random() * 5 + 1,
//         (Math.random() - 0.5) * 6,
//       ],
//       speed: 0.003 + Math.random() * 0.002,
//     });
//   }

//   return (
//     <>
//       {particles.map(({ key, position, speed }) => (
//         <PowderParticle key={key} position={position} speed={speed} />
//       ))}
//     </>
//   );
// }

// function FloatingBurger() {
//   const ref = useRef();
//   const { scene } = useGLTF("/models/burger.glb");

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.rotation.y = clock.getElapsedTime() * 0.4; // slow rotation
//       ref.current.position.y = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1; // gentle float
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.6} />;
// }




// export default function NavBar() {
//   return (
//     <div style={{ display: "flex" }}>
//       {/* Left Text Section */}
//       <div
//         style={{
//           marginLeft: "80px",
//           fontSize: "1.4rem",
//           width: "450px",
//           fontFamily: "Vazir",
//           textAlign: "right",
//         }}
//       >
//         <h1>لحظات خوش همراه با طعم‌های ناب و اصیل !</h1>
//         <p style={{ color: "gray", fontSize: "0.9rem", direction: "rtl" }}>
//           از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما
//         </p>

//         <div
//           style={{
//             display: "flex",
//             gap: "12px",
//             marginTop: "20px",
//             fontFamily: "Vazir, sans-serif",
//             fontWeight: "600",
//           }}
//         >
//           <button
//             style={{
//               backgroundColor: "hsl(0, 100%, 48%)",
//               color: "white",
//               padding: "10px 20px",
//               border: "none",
//               borderRadius: "17px",
//               cursor: "pointer",
//               fontFamily: "Vazir",
//               boxShadow: "0px 1px 4px hsl(60, 100%, 68%)",
//               fontWeight: "600",
//             }}
//           >
//             سفارش دهید
//           </button>

//           <button
//             style={{
//               backgroundColor: "transparent",
//               color: "yellow",
//               padding: "10px 20px",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//               fontFamily: "Vazir",
//               fontWeight: "600",
//             }}
//           >
//             منو
//           </button>
//         </div>
//       </div>

//       {/* Right Canvas Section with Floating Avatars */}
//       <div
//         style={{
//           width: "auto",
//           height: "100vh",
//           marginLeft: "280px",
//           position: "relative", // For absolute positioning
//         }}
//       >
//         {/* Avatar Positioned Absolutely Over the Canvas */}
//         <div style={{ position: "absolute", top: "60px", right: "10px", zIndex: 10 }}>
//           <LetterAvatars />
//         </div>

//         <Canvas camera={{ position: [0, 1.5, 44], fov: 45 }}>
//           <ambientLight intensity={0.4} />
//           <directionalLight position={[5, 5, 5]} intensity={1} />
//           <directionalLight position={[-5, 5, -5]} intensity={0.5} />

//           <Suspense fallback={<Html center style={{ color: "white" }}>Loading...</Html>}>
//             <FloatingBurger />
//           </Suspense>

//           <PowderSystem count={500} />
//           <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
//         </Canvas>
//       </div>
//     </div>
//   );
// }










// "use client"; // for Next.js; remove if CRA

// import React, { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import LetterAvatars from "./avatars";
// import StarryBackground from "./StarryBackground";


// function PowderParticle({ position, speed }) {
//   const ref = useRef(null);

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.position.y -= speed;
//     if (ref.current.position.y < 0) {
//       ref.current.position.y = 5 + Math.random() * 2;
//       ref.current.position.x = (Math.random() - 0.5) * 6;
//       ref.current.position.z = (Math.random() - 0.5) * 6;
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.05, 6, 6]} />
//       <meshStandardMaterial color="#f6e27f" emissive="#f6e27f" emissiveIntensity={0.3} />
//     </mesh>
//   );
// }

// // Particle system
// function PowderSystem({ count = 100 }) {
//   const particles = Array.from({ length: count }, (_, i) => ({
//     key: i,
//     position: [
//       (Math.random() - 0.5) * 6,
//       Math.random() * 5 + 1,
//       (Math.random() - 0.5) * 6,
//     ],
//     speed: 0.003 + Math.random() * 0.002,
//   }));

//   return (
//     <>
//       {particles.map(({ key, position, speed }) => (
//         <PowderParticle key={key} position={position} speed={speed} />
//       ))}
//     </>
//   );
// }

// function FloatingBurger() {
//   const ref = useRef(null);
//   const { scene } = useGLTF("/models/burger.glb");

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.rotation.y = clock.getElapsedTime() * 0.4;
//       ref.current.position.y = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.6} />;
// }

// export default function NavBar() {
//   return (
//     <>
// 	 <div style={{alignItems : "center", textAlign : "center", justifyContent : "center", display : "flex", flexDirection : "column", gap : "0", fontFamily : "Caveat"}}>

// 			 <h1 style={{margin : "0"}} className="caveat">welcome to KFC</h1>
// 	 		<p style={{margin : "0"}}>Experience the best with us</p>

// 	 </div>

//       {/* ✅ Logo in Top Left */}
//       <img
// 			src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
// 			alt="logo"
// 			style={{
// 				position: "absolute",
// 				top: "20px",
// 				left: "20px",
// 				width: "180px",
// 				zIndex: 1000,
// 				filter: "brightness(0) invert(1)", // turns it white
// 			}}
// 			/>


//       <div style={{ display: "flex" }}>
//         {/* ✅ Left Text Section */}
//         <div
//           style={{
//             marginLeft: "80px",
//             fontSize: "1.4rem",
//             width: "450px",
//             fontFamily: "Vazir",
//             textAlign: "right",
// 				marginTop : "200px"
//           }}
//         >
// 			 <p style={{ color: "gray", fontSize: "0.9rem", direction: "rtl", fontWeight : "600" }}>
//             راحت ترین و اسان ترین روش سفارش غذا 
//           </p>
//           <h1>لحظات خوش همراه با طعم‌های ناب و اصیل !</h1>
//           <p style={{ color: "gray", fontSize: "0.9rem", direction: "rtl", fontWeight : "600" }}>
//             از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما
// 				از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما
//           </p>

//           <div
//             style={{
//               display: "flex",
//               gap: "12px",
//               marginTop: "20px",
//               fontFamily: "Vazir, sans-serif",
//               fontWeight: "600",
//             }}
//           >
//             <button
//               style={{
//                 backgroundColor: "hsl(0, 100%, 48%)",
//                 color: "white",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "17px",
//                 cursor: "pointer",
//                 fontFamily: "Vazir",
//                 boxShadow: "0px 1px 4px hsl(60, 100%, 68%)",
//                 fontWeight: "600",
//               }}
//             >
//               سفارش دهید
//             </button>

// 				{/* <button
//               style={{
//                 backgroundColor: "transparent",
//                 color: "yellow",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//                 fontFamily: "Vazir",
//                 fontWeight: "600",
// 					 borderBottom : "1px solid yellow"
//               }}
//             >
//               منو
//             </button>  */}

// 				<button
// 					style={{
// 						backgroundColor: "transparent",
// 						color: "yellow",
// 						padding: "10px 20px 2px 20px", // Less bottom padding
// 						border: "none",
// 						borderRadius: "6px",
// 						cursor: "pointer",
// 						fontFamily: "Vazir",
// 						fontWeight: "600",
// 						borderBottom: "2px solid yellow", // Bottom line
// 						lineHeight: "1", // Tighter line height
// 					}}
// 					>
// 					منو
// 					</button>


//           </div>
//         </div>

//         {/* ✅ 3D Canvas Section */}
//         <div
//           style={{
//             width: "auto",
//             height: "100vh",
//             marginLeft: "280px",
//             position: "relative",
//           }}
//         >
//           {/* ✅ Top Right Avatar */}
//           <div style={{ position: "absolute", top: "60px", right: "10px", zIndex: 10 }}>
//             <LetterAvatars />
//           </div>

//           <Canvas camera={{ position: [0, 1.5, 44], fov: 45 }}>
//             <ambientLight intensity={0.4} />
//             <directionalLight position={[5, 5, 5]} intensity={1} />
//             <directionalLight position={[-5, 5, -5]} intensity={0.5} />

//             <Suspense fallback={<Html center style={{ color: "white" }}>Loading...</Html>}>
//               <FloatingBurger />
//             </Suspense>

//             <PowderSystem count={500} />
//             <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
//           </Canvas>
//         </div>
//       </div>
//     </>
//   );
// }





// "use client"; // for Next.js; remove if CRA

// import React, { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import LetterAvatars from "./avatars";
// import StarryBackground from "./StarryBackground";
// // import { Pacifico } from 'next/font/google';
// // import styles from '@/styles/fonts.module.css'
// // Use only this in your layout or component file
// import { Pacifico } from 'next/font/google';

// const pacifico = Pacifico({
//   subsets: ['latin'],
//   weight: '400',
//   display: 'swap',
// });


// function PowderParticle({ position, speed }) {
//   const ref = useRef(null);

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.position.y -= speed;
//     if (ref.current.position.y < 0) {
//       ref.current.position.y = 5 + Math.random() * 2;
//       ref.current.position.x = (Math.random() - 0.5) * 6;
//       ref.current.position.z = (Math.random() - 0.5) * 6;
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.05, 6, 6]} />
//       <meshStandardMaterial color="#f6e27f" emissive="#f6e27f" emissiveIntensity={0.3} />
//     </mesh>
//   );
// }

// // Particle system
// function PowderSystem({ count = 100 }) {
//   const particles = Array.from({ length: count }, (_, i) => ({
//     key: i,
//     position: [
//       (Math.random() - 0.5) * 6,
//       Math.random() * 5 + 1,
//       (Math.random() - 0.5) * 6,
//     ],
//     speed: 0.003 + Math.random() * 0.002,
//   }));

//   return (
//     <>
//       {particles.map(({ key, position, speed }) => (
//         <PowderParticle key={key} position={position} speed={speed} />
//       ))}
//     </>
//   );
// }

// function FloatingBurger() {
//   const ref = useRef(null);
//   const { scene } = useGLTF("/models/burger.glb");

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.rotation.y = clock.getElapsedTime() * 0.4;
//       ref.current.position.y = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.6} />;
// }

// export default function NavBar() {
//   return (
//     <>
//       {/* 🔭 Full Background Stars */}
//       <StarryBackground />
// 		    <div style={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//     }}>
//       <h1 className={pacifico.className} style={{ fontWeight: "300", margin: "0", fontSize : "1.6rem", textShadow: "0 2px 4px rgba(255, 255, 255, 0.3)",
// }}>
//         welcome to KFC's resturaunt
//       </h1>
// 		<div style={{display : "flex", alignItems : "center", gap : "6px"}}>

//       <p className={pacifico.className} style={{ fontSize: "0.85rem", marginTop: "15px",textShadow: "0 1px 3px rgba(255, 255, 255, 0.4)", }}>
//         Experience the best with us
//       </p>

// 		<img src="/img/earth.png" alt="img" style={{ width: '17px', height: '17px', filter: 'brightness(0) invert(1)'
//  }} />
// 		</div>
//     </div>




//       <img
//         src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
//         alt="logo"
//         style={{
//           position: "absolute",
//           top: "20px",
//           left: "20px",
//           width: "180px",
//           zIndex: 1000,
//           filter: "brightness(0) invert(1)",
//         }}
//       />

//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             marginLeft: "80px",
//             fontSize: "1.4rem",
//             width: "450px",
//             fontFamily: "Vazir",
//             textAlign: "right",
//             marginTop: "150px"
//           }}
//         >
//           <p style={{ color: "gray", fontSize: "0.9rem", direction: "rtl", fontWeight: "600" }}>
//             راحت ترین و اسان ترین روش سفارش غذا 
//           </p>
//           <h1>لحظات خوش همراه با طعم‌های ناب و اصیل !</h1>
//           <p style={{ color: "gray", fontSize: "0.9rem", direction: "rtl", fontWeight: "600" }}>
//             از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما
//             از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما
//           </p>

//           <div
//             style={{
//               display: "flex",
//               gap: "12px",
//               marginTop: "20px",
//               fontFamily: "Vazir, sans-serif",
//               fontWeight: "600",
//             }}
//           >
//             <button
//               style={{
//                 backgroundColor: "hsl(0, 100%, 48%)",
//                 color: "white",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "17px",
//                 cursor: "pointer",
//                 fontFamily: "Vazir",
//                 boxShadow: "0px 1px 4px hsl(60, 100%, 68%)",
//                 fontWeight: "600",
//               }}
//             >
//               سفارش دهید
//             </button>

//             <button
//               style={{
//                 backgroundColor: "transparent",
//                 color: "yellow",
//                 padding: "10px 20px 2px 20px",
//                 border: "none",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//                 fontFamily: "Vazir",
//                 fontWeight: "600",
//                 borderBottom: "2px solid yellow",
//                 lineHeight: "1",
//               }}
//             >
//               منو
//             </button>
//           </div>
//         </div>

//         {/* ✅ 3D Burger on Right */}
//         <div
//           style={{
//             width: "auto",
//             height: "100vh",
//             marginLeft: "280px",
//             position: "relative",
//           }}
//         >
//           <div style={{ position: "absolute", top: "70px", right: "5px", zIndex: 10 }}>
//             <LetterAvatars />
//           </div>

//           <Canvas camera={{ position: [0, 1.5, 44], fov: 45 }}>
//             <ambientLight intensity={0.4} />
//             <directionalLight position={[5, 5, 5]} intensity={1} />
//             <directionalLight position={[-5, 5, -5]} intensity={0.5} />

//             <Suspense fallback={<Html center style={{ color: "white" }}>Loading...</Html>}>
//               <FloatingBurger />
//             </Suspense>

//             {/* OrbitControls optional */}
//             <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
//           </Canvas>
//         </div>
//       </div>
//     </>
//   );
// }















// "use client";

// import { useRef, useEffect, useState, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import { Pacifico } from "next/font/google";
// import LetterAvatars from "./avatars";
// import StarryBackground from "./StarryBackground";

// // Load Google Font
// const pacifico = Pacifico({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap",
// });

// // Powder Particle animation
// function PowderParticle({ position, speed }) {
//   const ref = useRef();

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.position.y -= speed;
//     if (ref.current.position.y < 0) {
//       ref.current.position.y = 5 + Math.random() * 2;
//       ref.current.position.x = (Math.random() - 0.5) * 6;
//       ref.current.position.z = (Math.random() - 0.5) * 6;
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.05, 6, 6]} />
//       <meshStandardMaterial color="#f6e27f" emissive="#f6e27f" emissiveIntensity={0.3} />
//     </mesh>
//   );
// }

// function PowderSystem({ count = 100 }) {
//   const particles = Array.from({ length: count }, (_, i) => ({
//     key: i,
//     position: [
//       (Math.random() - 0.5) * 6,
//       Math.random() * 5 + 1,
//       (Math.random() - 0.5) * 6,
//     ],
//     speed: 0.003 + Math.random() * 0.002,
//   }));

//   return (
//     <>
//       {particles.map(({ key, position, speed }) => (
//         <PowderParticle key={key} position={position} speed={speed} />
//       ))}
//     </>
//   );
// }

// function FloatingBurger() {
//   const ref = useRef();
//   const { scene } = useGLTF("/models/burger.glb");

//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.rotation.y = clock.getElapsedTime() * 0.4;
//       ref.current.position.y = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.6} />;
// }

// export default function NavBar() {
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     setShowText(true);
//   }, []);

//   return (
//     <>
//       <StarryBackground />

//       {/* Logo */}
//       <img
//         src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
//         alt="logo"
//         style={{
//           position: "absolute",
//           top: "20px",
//           left: "20px",
//           width: "180px",
//           zIndex: 1000,
//           filter: "brightness(0) invert(1)",
//         }}
//       />

//       {/* Animated Text Section */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           animation: showText ? "slideDown 0.8s ease-out forwards" : "none",
//           opacity: 0,
//         }}
//       >
//         <style jsx>{`
//           @keyframes slideDown {
//             from {
//               transform: translateY(-60px);
//               opacity: 0;
//             }
//             to {
//               transform: translateY(0);
//               opacity: 1;
//             }
//           }
//         `}</style>

//         <h1
//           className={pacifico.className}
//           style={{
//             fontWeight: "300",
//             margin: "0",
//             fontSize: "1.6rem",
//             textShadow: "0 2px 4px rgba(255, 255, 255, 0.3)",
//           }}
//         >
//           welcome to KFC's restaurant
//         </h1>

//         <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//           <p
//             className={pacifico.className}
//             style={{
//               fontSize: "0.85rem",
//               marginTop: "15px",
//               textShadow: "0 1px 3px rgba(255, 255, 255, 0.4)",
//             }}
//           >
//             Experience the best with us
//           </p>
//           <img
//             src="/img/earth.png"
//             alt="img"
//             style={{
//               width: "17px",
//               height: "17px",
//               filter: "brightness(0) invert(1)",
//             }}
//           />
//         </div>
//       </div>

//       {/* Persian Section + Buttons */}
//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             marginLeft: "80px",
//             fontSize: "1.4rem",
//             width: "450px",
//             fontFamily: "Vazir",
//             textAlign: "right",
//             marginTop: "100px",
//           }}
//         >
//           <p style={{ color: "gray", fontSize: "0.9rem", direction: "rtl", fontWeight: "600" }}>
//             راحت ترین و اسان ترین روش سفارش غذا
//           </p>
//           <h1>لحظات خوش همراه با طعم‌های ناب و اصیل !</h1>
//           <p style={{ color: "gray", fontSize: "0.9rem", direction: "rtl", fontWeight: "600" }}>
//             از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما
//             از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما
//           </p>

//           <div
//             style={{
//               display: "flex",
//               gap: "12px",
//               marginTop: "20px",
//               fontFamily: "Vazir, sans-serif",
//               fontWeight: "600",
//             }}
//           >
//             <button
//               style={{
//                 backgroundColor: "hsl(0, 100%, 48%)",
//                 color: "white",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "17px",
//                 cursor: "pointer",
//                 fontFamily: "Vazir",
//                 boxShadow: "0px 1px 4px hsl(60, 100%, 68%)",
//                 fontWeight: "600",
//               }}
//             >
//               سفارش دهید
//             </button>

//             {/* <button
//               style={{
//                 backgroundColor: "transparent",
//                 color: "yellow",
//                 padding: "10px 20px 2px 20px",
//                 border: "none",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//                 fontFamily: "Vazir",
//                 fontWeight: "600",
//                //  borderBottom: "2px solid yellow",
//                 lineHeight: "1",
//               }}
//             >
//               منو
//             </button> */}
//           </div>
//         </div>

//         {/* 3D Burger */}
//         <div
//           style={{
//             width: "auto",
//             height: "100vh",
//             marginLeft: "280px",
//             position: "relative",
//           }}
//         >
//           <div style={{ position: "absolute", top: "70px", right: "5px", zIndex: 10 }}>
//             <LetterAvatars />
//           </div>

//           <Canvas camera={{ position: [0, 1.5, 44], fov: 45 }}>
//             <ambientLight intensity={0.4} />
//             <directionalLight position={[5, 5, 5]} intensity={1} />
//             <directionalLight position={[-5, 5, -5]} intensity={0.5} />
//             <Suspense fallback={<Html center style={{ color: "white" }}>Loading...</Html>}>
//               <FloatingBurger />
//             </Suspense>
//             <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
//           </Canvas>
//         </div>
//       </div>
//     </>
//   );
// }










// // NavBar.jsx
// "use client";

// import { useRef, useEffect, useState, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import { Pacifico } from "next/font/google";
// import LetterAvatars from "./avatars";
// import StarryBackground from "./StarryBackground";
// // import styles from "./nav.module.css";
// import styles from '@/styles/nav.module.css'

// const pacifico = Pacifico({ subsets: ["latin"], weight: "400", display: "swap" });

// function PowderParticle({ position, speed }) {
//   const ref = useRef();
//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.position.y -= speed;
//     if (ref.current.position.y < 0) {
//       ref.current.position.y = 5 + Math.random() * 2;
//       ref.current.position.x = (Math.random() - 0.5) * 6;
//       ref.current.position.z = (Math.random() - 0.5) * 6;
//     }
//   });
//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={[0.05, 6, 6]} />
//       <meshStandardMaterial color="#f6e27f" emissive="#f6e27f" emissiveIntensity={0.3} />
//     </mesh>
//   );
// }

// function PowderSystem({ count = 100 }) {
//   const particles = Array.from({ length: count }, (_, i) => ({
//     key: i,
//     position: [
//       (Math.random() - 0.5) * 6,
//       Math.random() * 5 + 1,
//       (Math.random() - 0.5) * 6,
//     ],
//     speed: 0.003 + Math.random() * 0.002,
//   }));
//   return <>{particles.map(({ key, position, speed }) => <PowderParticle key={key} position={position} speed={speed} />)}</>;
// }

// function FloatingBurger() {
//   const ref = useRef();
//   const { scene } = useGLTF("/models/burger.glb");
//   useFrame(({ clock }) => {
//     if (ref.current) {
//       ref.current.rotation.y = clock.getElapsedTime() * 0.4;
//       ref.current.position.y = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
//     }
//   });
//   return <primitive ref={ref} object={scene} scale={0.6} />;
// }

// export default function NavBar() {
//   const [showText, setShowText] = useState(false);
//   useEffect(() => setShowText(true), []);

//   return (
//     <>
//       <StarryBackground />
//       <img src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png" alt="logo" className={styles.logo} />



// 		<div className={`welcome ${showText ? 'slide-down' : ''}`}>
// 			<style jsx>{`
// 				.welcome {
// 					display: flex;
// 					flex-direction: column;
// 					align-items: center;
// 					justify-content: center;
// 					opacity: 0;
// 					animation: none;
// 				}

// 				.slide-down {
// 					animation: slideDown 0.8s ease-out forwards;
// 				}

// 				@keyframes slideDown {
// 					from {
// 					transform: translateY(-60px);
// 					opacity: 0;
// 					}
// 					to {
// 					transform: translateY(0);
// 					opacity: 1;
// 					}
// 				}

// 				.welcome h1 {
// 					font-weight: 300;
// 					margin: 0;
// 					font-size: 1.6rem;
// 					text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
// 					text-align: center;
// 				}

// 				.welcome .subtitle {
// 					display: flex;
// 					align-items: center;
// 					gap: 6px;
// 					margin-top: 0.5rem;
// 				}

// 				.welcome .subtitle p {
// 					font-size: 0.85rem;
// 					margin: 0;
// 					text-shadow: 0 1px 3px rgba(255, 255, 255, 0.4);
// 				}

// 				.welcome .subtitle img {
// 					width: 17px;
// 					height: 17px;
// 					filter: brightness(0) invert(1);
// 				}

// 				@media (max-width: 600px) {
// 					.welcome h1 {
// 					font-size: 0.9rem;
// 					}

// 					.welcome .subtitle p {
// 					font-size: 0.6rem;
// 					}

// 					.welcome .subtitle {
// 					gap: 5px;
// 					}

// 					.welcome .subtitle img {
// 					width: 11px;
// 					height: 11px;
// 					}
// 				}
// 			`}</style>

// 			<h1 className={pacifico.className}>welcome to KFC's restaurant</h1>

// 			<div className="subtitle">
// 				<p className={pacifico.className}>Experience the best with us</p>
// 				<img src="/img/earth.png" alt="img" />
// 			</div>
// 			</div>


//       <div className={styles.navWrapper}>
//         <div className={styles.textSection}>
//           <p>راحت ترین و اسان ترین روش سفارش غذا</p>
//           <h1>لحظات خوش همراه با طعم‌های ناب و اصیل !</h1>
// 			 <div className={styles.btns}>

// 				<p>از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما</p>
// 				<div className={styles.buttonGroup}>
// 					<button>سفارش دهید</button>
// 				</div>
// 			 </div>
//         </div>

//         <div className={styles.burgerCanvasWrapper}>
//           <div style={{ position: "absolute", top: "70px", right: "5px", zIndex: 10 }}>
//             <LetterAvatars />
//           </div>
//           <Canvas camera={{ position: [0, 1.5, 44], fov: 45 }}>
//             <ambientLight intensity={0.4} />
//             <directionalLight position={[5, 5, 5]} intensity={1} />
//             <directionalLight position={[-5, 5, -5]} intensity={0.5} />
//             <Suspense fallback={<Html center style={{ color: "white" }}>Loading...</Html>}>
//               <FloatingBurger />
//             </Suspense>
//             <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
//           </Canvas>
//         </div>
//       </div>
//     </>
//   );
// }






// "use client";

// import { useRef, useEffect, useState, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import { Pacifico } from "next/font/google";
// import LetterAvatars from "./avatars";
// import StarryBackground from "./StarryBackground";
// import styles from '@/styles/nav.module.css';
// import Photos from "./photos";

// const pacifico = Pacifico({ subsets: ["latin"], weight: "400", display: "swap" });

// function PowderParticle({ position, speed }) {
// 	const ref = useRef();
// 	useFrame(() => {
// 		if (!ref.current) return;
// 		ref.current.position.y -= speed;
// 		if (ref.current.position.y < 0) {
// 			ref.current.position.y = 5 + Math.random() * 2;
// 			ref.current.position.x = (Math.random() - 0.5) * 6;
// 			ref.current.position.z = (Math.random() - 0.5) * 6;
// 		}
// 	});
// 	return (
// 		<mesh ref={ref} position={position}>
// 			<sphereGeometry args={[0.05, 6, 6]} />
// 			<meshStandardMaterial color="#f6e27f" emissive="#f6e27f" emissiveIntensity={0.3} />
// 		</mesh>
// 	);
// }

// function PowderSystem({ count = 100 }) {
// 	const particles = Array.from({ length: count }, (_, i) => ({
// 		key: i,
// 		position: [
// 			(Math.random() - 0.5) * 6,
// 			Math.random() * 5 + 1,
// 			(Math.random() - 0.5) * 6,
// 		],
// 		speed: 0.003 + Math.random() * 0.002,
// 	}));
// 	return <>{particles.map(({ key, position, speed }) => <PowderParticle key={key} position={position} speed={speed} />)}</>;
// }

// function FloatingBurger() {
// 	const ref = useRef();
// 	const { scene } = useGLTF("/models/burger.glb");
// 	useFrame(({ clock }) => {
// 		if (ref.current) {
// 			ref.current.rotation.y = clock.getElapsedTime() * 0.4;
// 			ref.current.position.y = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
// 		}
// 	});
// 	return <primitive ref={ref} object={scene} scale={0.6} />;
// }

// export default function NavBar() {
// 	const [showText, setShowText] = useState(false);
// 	useEffect(() => setShowText(true), []);

// 	return (
// 		<>
// 			<StarryBackground />

			
// 			<div className={styles.logoWelcomeWrapper}>
// 				<div className="logo-container">
// 					<img
// 						src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
// 						alt="logo"
// 						className={styles.logo}
// 					/>
// 				</div>

// 				<div className={`${styles.welcome} ${showText ? styles.slideDown : ''}`}>
// 					<h1 className={pacifico.className}>welcome to KFC's restaurant</h1>
// 					<div className={styles.subtitle}>
// 						<p className={pacifico.className}>Experience the best with us</p>
// 						<img src="/img/earth.png" alt="img" />
// 					</div>
// 				</div>
// 				</div>

				// <div className={styles.photos}>
				// <Photos />
				// </div>






			

			
// 		</>
// 	);
// }




// "use client";

// import { useRef, useEffect, useState, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import { Pacifico } from "next/font/google";
// import LetterAvatars from "./avatars";
// import StarryBackground from "./StarryBackground";
// import styles from '@/styles/nav.module.css';
// import Photos from "./photos";

// const pacifico = Pacifico({ subsets: ["latin"], weight: "400", display: "swap" });

// function PowderParticle({ position, speed }) {
// 	const ref = useRef();
// 	useFrame(() => {
// 		if (!ref.current) return;
// 		ref.current.position.y -= speed;
// 		if (ref.current.position.y < 0) {
// 			ref.current.position.y = 5 + Math.random() * 2;
// 			ref.current.position.x = (Math.random() - 0.5) * 6;
// 			ref.current.position.z = (Math.random() - 0.5) * 6;
// 		}
// 	});
// 	return (
// 		<mesh ref={ref} position={position}>
// 			<sphereGeometry args={[0.05, 6, 6]} />
// 			<meshStandardMaterial color="#f6e27f" emissive="#f6e27f" emissiveIntensity={0.3} />
// 		</mesh>
// 	);
// }

// function PowderSystem({ count = 100 }) {
// 	const particles = Array.from({ length: count }, (_, i) => ({
// 		key: i,
// 		position: [
// 			(Math.random() - 0.5) * 6,
// 			Math.random() * 5 + 1,
// 			(Math.random() - 0.5) * 6,
// 		],
// 		speed: 0.003 + Math.random() * 0.002,
// 	}));
// 	return <>{particles.map(({ key, position, speed }) => <PowderParticle key={key} position={position} speed={speed} />)}</>;
// }

// function FloatingBurger() {
// 	const ref = useRef();
// 	const { scene } = useGLTF("/models/burger.glb");
// 	useFrame(({ clock }) => {
// 		if (ref.current) {
// 			ref.current.rotation.y = clock.getElapsedTime() * 0.4;
// 			ref.current.position.y = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
// 		}
// 	});
// 	return <primitive ref={ref} object={scene} scale={0.6} />;
// }

// export default function NavBar() {
// 	const [showText, setShowText] = useState(false);
// 	useEffect(() => setShowText(true), []);

// 	return (
// 		<>
// 			<StarryBackground />

			
// 			<div className={styles.logoWelcomeWrapper}>
// 				<div className={styles.logoTextContainer}>
// 					<div className={styles.logoContainer}>
// 						<img
// 						src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
// 						alt="logo"
// 						className={styles.logo}
// 						/>
// 					</div>

// 					<div className={`${styles.welcome} ${showText ? styles.slideDown : ''}`}>
// 						<h1 className={`${pacifico.className} ${styles.pacifico}`}>welcome to KFC's restaurant</h1>
// 						<div className={styles.subtitle}>
// 						<p className={`${pacifico.className} ${styles.pacifico}`}>Experience the best with us</p>
// 						<img src="/img/earth.png" alt="img" />
// 						</div>
// 					</div>
// 				</div>
// 				</div>

// 								<div className={styles.photos}>
// 				<Photos />
// 				</div>
			
// 		</>
// 	);
// }



"use client";

import { useRef, useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import StarryBackground from "./StarryBackground";
import Photos from "./photos";
import styles from '@/styles/nav.module.css';

const pacifico = Pacifico({ subsets: ["latin"], weight: "400", display: "swap" });

export default function NavBar() {
  const [showText, setShowText] = useState(false);
  useEffect(() => setShowText(true), []);

  return (
    <>
      <StarryBackground />

      <div className={styles.logoWelcomeWrapper}>
        <div className={styles.logoContainer}>
          <img
            src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
            alt="logo"
            className={styles.logo}
          />
        </div>

        <div className={`${styles.welcome} ${showText ? styles.slideDown : ''}`}>
          <h1 className={`${pacifico.className} ${styles.pacifico}`}>
            Welcome to KFC's restaurant
          </h1>
          <div className={styles.subtitle}>
            <p className={`${pacifico.className} ${styles.pacifico}`}>
              Experience the best with us
            </p>
            <img src="/img/earth.png" alt="img" />
          </div>
        </div>
      </div>

      <div className={styles.photos}>
        <Photos />
      </div>
    </>
  );
}
