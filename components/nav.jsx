

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
//           لحظات خوش همراه با طعم‌های <br />  ناب و اصیل
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













'use client';

import React from 'react';
// import styles from './nav.module.css';
import styles from '@/styles/nav.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbarContainer}>
      <img
        src="/img/pexels-marios-gkortsilas-284432004-13983276.jpg"
        alt="navbar"
        className={styles.navbarImage}
      />

      <div className={styles.navbarOverlay} />

      <div className={styles.navbarTextContainer}>
        <h1 className={styles.navbarHeading}>
          لحظات خوش همراه با طعم‌های <br />
          <span>ناب و اصیل</span>
        </h1>

        <p className={styles.navbarParagraph}>
          ما به کیفیت غذا اهمیت ویژه‌ای می‌دهیم؛ هر بشقاب با دقت و عشق تهیه شده تا رضایت شما را به‌دست آوریم.
          لحظاتی خوش و خاطره‌انگیز در کنار خانواده و دوستان را در محیطی گرم و صمیمی برای شما خلق می‌کنیم.
          از طعم‌های اصیل ایرانی لذت ببرید و با سرویس‌دهی بی‌نظیر ما، تجربه‌ای فراموش‌نشدنی را تجربه کنید.
          هر وعده غذایی، داستانی است از سنت، هنر آشپزی و مهمان‌نوازی که با دقت و هنر در کنار هم به‌وجود آمده است.
          منتظر حضور گرم شما هستیم تا لحظات شیرین زندگی را با هم شریک شویم.
        </p>

        <div className={styles.navbarButtonGroup}>
          <button className={styles.navbarButton}>
            <a href="#menu">منوی سفارش</a>
          </button>
        </div>
      </div>
    </div>
  );
}
