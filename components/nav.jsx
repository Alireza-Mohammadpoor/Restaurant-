


// "use client";

// import { useRef, useEffect, useState } from "react";
// import { Pacifico } from "next/font/google";
// import StarryBackground from "./StarryBackground";
// import Photos from "./photos";
// import styles from '@/styles/nav.module.css';

// const pacifico = Pacifico({ subsets: ["latin"], weight: "400", display: "swap" });

// export default function NavBar() {
//   const [showText, setShowText] = useState(false);
//   useEffect(() => setShowText(true), []);

//   return (
//     <>
//       <StarryBackground />

//       <div className={styles.logoWelcomeWrapper}>
//         <div className={styles.logoContainer}>
//           <img
//             src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
//             alt="logo"
//             className={styles.logo}
//           />
//         </div>

//         <div className={`${styles.welcome} ${showText ? styles.slideDown : ''}`}>
//           <h1 className={`${pacifico.className} ${styles.pacifico}`}>
//             Welcome to KFC's restaurant
//           </h1>
//           <div className={styles.subtitle}>
//             <p className={`${pacifico.className} ${styles.pacifico}`}>
//               Experience the best with us
//             </p>
//             <img src="/img/earth.png" alt="img" />
//           </div>
//         </div>
//       </div>

//       <div className={styles.photos}>
//         <Photos />
//       </div>
//     </>
//   );
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

      {/* <div className={styles.logoWelcomeWrapper}> */}


        {/* <div className={styles.logoContainer}>
          <img
            src="/img/Brown_Simple_Circle_Restaurant_Logo-removebg-preview.png"
            alt="logo"
            className={styles.logo}
          />
        </div> */}

        {/* <div className={`${styles.welcome} ${showText ? styles.slideDown : ''}`}>
          <h1 className={`${pacifico.className} ${styles.pacifico}`}>
            Welcome to KFC's restaurant
          </h1>
          <div className={styles.subtitle}>
            <p className={`${pacifico.className} ${styles.pacifico}`}>
              Experience the best with us
            </p>
            <img src="/img/earth.png" alt="img" />
          </div>
        </div> */}
      {/* </div> */}

					<div style={{ backgroundColor: "black" }}>
				<img
					src="/img/Recipe.png"
					alt="recipe"
					style={{
						width: "100%",
						height: "auto",
						// border: "0.5px solid white",
						// margin: "2px",
						// borderRadius: "8px",
						boxSizing: "border-box"
					}}
				/>
				</div>

				<div
					style={{
						direction: "rtl",
						width: "80%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
						margin: "0 auto"
					}}
					>
					<h1
						style={{
							textShadow: "0 2px 4px rgba(255, 255, 255, 0.55)",
							color: "aliceblue",
							fontSize: "1.5rem"
						}}
					>
						بهترین لحظات، با طعمی فراموش‌ نشدنی
					</h1>
					</div>


      <div className={styles.photos}>
        <Photos />
      </div>
    </>
  );
}
