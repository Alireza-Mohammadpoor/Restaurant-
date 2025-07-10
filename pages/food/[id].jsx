// // import { useRouter } from 'next/router';

// // export default function FoodPage() {
// //   const router = useRouter();
// //   const { id } = router.query;
// //   const { image } = router.query
// //   const { name } = router.query

// //   if (!id) return <p>Loading...</p>;

// //   return(

// // 	<div>
// // 		<img src={image} alt={id} />
// // 		<h1>{name}</h1>
// // 	</div>

// //   ) 
// // }



// // 'use client';

// // import { useRouter } from 'next/router';
// // // import menuItems from '@/data/menuItems'; // Import shared data
// // import menuItems from '../data/menuItems';

// // export default function FoodPage() {
// //   const router = useRouter();
// //   const { id } = router.query;

// //   const selectedFood = menuItems.find(item => item.id === id);

// //   if (!id || !selectedFood) return <p>Loading...</p>;

// //   return (
// //     <div>
// //       <img src={selectedFood.image} alt={selectedFood.name} />
// //       <h1>{selectedFood.name}</h1>
// //       <p>قیمت: {selectedFood.price}</p>
// //       <p>زمان آماده‌سازی: {selectedFood.time}</p>
// //       <p>ترکیبات: {selectedFood.supplies.join(', ')}</p>
// //       <p>امتیاز: {selectedFood.rate}</p>
// //     </div>
// //   );
// // }



// 'use client';

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import menuItems from '../../data/menuItems';
// import Image from 'next/image';

// const fadeInStyle = {
//   animation: 'fadeIn 0.7s ease forwards',
//   opacity: 0,
//   animationFillMode: 'forwards',
// };

// const styles = {
//   pageWrapper: {
//     minHeight: '100vh',
//     padding: '24px',
//     backgroundColor: 'hsl(0, 0%, 10%)', // dark background
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   card: {
//     maxWidth: '64rem',
//     width: '100%',
//     backgroundColor: 'hsl(0, 0%, 15%)', // slightly lighter dark for card
//     borderRadius: '24px',
//     boxShadow: '0 20px 40px rgba(255, 255, 255, 0.15)', // subtle white glow shadow
//     padding: '32px',
//     opacity: 0,
//     animation: 'fadeIn 0.7s ease forwards',
//     color: 'white',
//   },
//   flexRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '32px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   imageWrapper: {
//     width: '100%',
//     maxWidth: '400px',
//     overflow: 'hidden',
//     borderRadius: '24px',
//     boxShadow: '0 10px 20px rgba(255, 255, 255, 0.2)', // subtle white glow
//     cursor: 'pointer',
//     transition: 'transform 0.5s',
//   },
//   imageWrapperHover: {
//     transform: 'scale(1.05)',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//     objectFit: 'cover',
//     aspectRatio: '1 / 1',
//     display: 'block',
//     borderRadius: '24px',
//   },
//   textContainer: {
//     flex: '1',
//     minWidth: '280px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//     color: 'white',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     fontWeight: '800',
//     color: '#F87171', // a nice soft red-pink for heading on dark bg
//     margin: 0,
//   },
//   ratingRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   star: {
//     width: '24px',
//     height: '24px',
//     color: '#FBBF24', // yellow-400 (bright star color)
//   },
//   ratingNumber: {
//     fontWeight: '600',
//     color: '#FFD700', // gold-ish for rating number
//     fontSize: '1.125rem',
//   },
//   infoText: {
//     fontSize: '1.125rem',
//     color: '#E5E7EB', // light gray (tailwind gray-200)
//     margin: 0,
//   },
//   infoLabel: {
//     fontWeight: '600',
//     color: '#FBBF24', // yellow-400 for labels to stand out
//   },
//   suppliesContainer: {
//     marginTop: '8px',
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '8px',
//   },
//   supplyBadge: {
//     backgroundColor: 'rgba(251, 191, 36, 0.15)', // transparent yellow background
//     color: '#FBBF24', // yellow-400 text
//     padding: '4px 12px',
//     borderRadius: '9999px',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     boxShadow: '0 1px 3px rgba(255,255,255,0.1)',
//   },
//   loadingWrapper: {
//     minHeight: '100vh',
//     backgroundColor: 'hsl(0, 0%, 10%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loadingText: {
//     fontSize: '1.25rem',
//     color: '#E5E7EB',
//     animation: 'pulse 2s infinite',
//   },
// };

// export default function FoodPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [imageHover, setImageHover] = useState(false);

//   useEffect(() => {
//     if (id) {
//       const food = menuItems.find(item => item.id === id);
//       setSelectedFood(food);
//     }
//   }, [id]);

//   if (!id || !selectedFood) {
//     return (
//       <div style={styles.loadingWrapper}>
//         <p style={styles.loadingText}>در حال بارگذاری...</p>
//       </div>
//     );
//   }

// const renderStars = (rate) => {
//   const stars = [];
//   const fullStars = Math.floor(rate);
//   const hasHalfStar = rate - fullStars >= 0.5;
//   const totalStars = 5;

//   for (let i = 0; i < fullStars; i++) {
//     stars.push(
//       <svg
//         key={`full-star-${i}`}
//         style={styles.star}
//         fill="#FBBF24" // yellow
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z" />
//       </svg>
//     );
//   }

//   if (hasHalfStar) {
//     stars.push(
//       <svg
//         key={`half-star`}
//         style={styles.star}
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <linearGradient id="halfGrad">
//             <stop offset="50%" stopColor="#FBBF24" />
//             <stop offset="50%" stopColor="transparent" />
//           </linearGradient>
//         </defs>
//         <path
//           fill="url(#halfGrad)"
//           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z"
//         />
//       </svg>
//     );
//   }

//   const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

//   for (let i = 0; i < emptyStars; i++) {
//     stars.push(
//       <svg
//         key={`empty-star-${i}`}
//         style={{ ...styles.star, color: '#6B7280' }} // Tailwind gray-500 for empty star
//         fill="currentColor"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z" />
//       </svg>
//     );
//   }

//   return stars;
// };

// //     return stars;
// //   };

//   return (
//     <div style={styles.pageWrapper}>
// 		<button
// 			onClick={() => router.push('/')}
// 			style={{
// 				alignSelf: 'flex-start',
// 				backgroundColor: '#F87171', // soft red-pink
// 				color: 'white',
// 				border: 'none',
// 				padding: '12px 24px',
// 				borderRadius: '9999px',
// 				fontSize: '1rem',
// 				fontWeight: '600',
// 				marginBottom: '24px',
// 				cursor: 'pointer',
// 				boxShadow: '0 4px 12px rgba(248, 113, 113, 0.4)',
// 				transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// 			}}
// 			onMouseEnter={e => {
// 				e.currentTarget.style.transform = 'scale(1.05)';
// 				e.currentTarget.style.boxShadow = '0 6px 16px rgba(248, 113, 113, 0.6)';
// 			}}
// 			onMouseLeave={e => {
// 				e.currentTarget.style.transform = 'scale(1)';
// 				e.currentTarget.style.boxShadow = '0 4px 12px rgba(248, 113, 113, 0.4)';
// 			}}
// 			>
// 			← بازگشت به خانه
// 			</button>

//       <div style={{ ...styles.card, ...fadeInStyle }}>
//         <div style={styles.flexRow}>
//           <div
//             style={{
//               ...styles.imageWrapper,
//               ...(imageHover ? styles.imageWrapperHover : {}),
//             }}
//             onMouseEnter={() => setImageHover(true)}
//             onMouseLeave={() => setImageHover(false)}
//           >
//             {/* import Image from 'next/image'; */}

// 				{/* // inside JSX */}
// 				<Image
// 				src={selectedFood.image}
// 				alt={selectedFood.name}
// 				width={400}
// 				height={400}
// 				style={styles.image}
// 				/>

//           </div>
//           <div style={styles.textContainer}>
//             <h1 style={styles.heading}>{selectedFood.name}</h1>
//             <div style={styles.ratingRow}>
//               {renderStars(selectedFood.rate)}
//               <span style={styles.ratingNumber}>{selectedFood.rate.toFixed(1)}</span>
//             </div>
//             <p style={styles.infoText}>
//               <span style={styles.infoLabel}>قیمت: </span>
//               {selectedFood.price}
//             </p>
//             <p style={styles.infoText}>
//               <span style={styles.infoLabel}>زمان آماده‌سازی: </span>
//               {selectedFood.time}
//             </p>
//             <div>
//               <span style={{ ...styles.infoLabel, color: '#E5E7EB' }}>
//                 ترکیبات:
//               </span>
//               <div style={styles.suppliesContainer}>
//                 {selectedFood.supplies.map((supply, idx) => (
//                   <span key={idx} style={styles.supplyBadge}>
//                     {supply}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes pulse {
//           0%, 100% {opacity: 1;}
//           50% {opacity: 0.5;}
//         }
//       `}</style>
//     </div>
//   );
// }









// 'use client';

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import menuItems from '../../data/menuItems';
// import Image from 'next/image';

// const fadeInStyle = {
//   animation: 'fadeIn 0.7s ease forwards',
//   opacity: 0,
//   animationFillMode: 'forwards',
// };

// const styles = {
//   pageWrapper: {
//     minHeight: '100vh',
//     padding: '24px',
//     backgroundColor: 'hsl(0, 0%, 10%)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   card: {
//     maxWidth: '64rem',
//     width: '100%',
//     backgroundColor: 'hsl(0, 0%, 15%)',
//     borderRadius: '24px',
//     boxShadow: '0 20px 40px rgba(255, 255, 255, 0.15)',
//     padding: '32px',
//     opacity: 0,
//     animation: 'fadeIn 0.7s ease forwards',
//     color: 'white',
//   },
//   flexRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '32px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   imageWrapper: {
//     width: '100%',
//     maxWidth: '400px',
//     overflow: 'hidden',
//     borderRadius: '24px',
//     boxShadow: '0 10px 20px rgba(255, 255, 255, 0.2)',
//     cursor: 'pointer',
//     transition: 'transform 0.5s',
//   },
//   imageWrapperHover: {
//     transform: 'scale(1.05)',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//     objectFit: 'cover',
//     aspectRatio: '1 / 1',
//     display: 'block',
//     borderRadius: '24px',
//   },
//   textContainer: {
//     flex: '1',
//     minWidth: '280px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//     color: 'white',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     fontWeight: '800',
//     color: '#FFFFFF', // changed to white
//     margin: 0,
//   },
//   ratingRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   star: {
//     width: '24px',
//     height: '24px',
//     color: '#FBBF24',
//   },
//   ratingNumber: {
//     fontWeight: '600',
//     color: '#FFD700',
//     fontSize: '1.125rem',
//   },
//   infoText: {
//     fontSize: '1.125rem',
//     color: '#E5E7EB',
//     margin: 0,
//   },
//   infoLabel: {
//     fontWeight: '600',
//     color: '#FBBF24',
//   },
//   suppliesContainer: {
//     marginTop: '8px',
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '8px',
//   },
//   supplyBadge: {
//     backgroundColor: 'rgba(251, 191, 36, 0.15)',
//     color: '#FBBF24',
//     padding: '4px 12px',
//     borderRadius: '9999px',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     boxShadow: '0 1px 3px rgba(255,255,255,0.1)',
//   },
//   loadingWrapper: {
//     minHeight: '100vh',
//     backgroundColor: 'hsl(0, 0%, 10%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loadingText: {
//     fontSize: '1.25rem',
//     color: '#E5E7EB',
//     animation: 'pulse 2s infinite',
//   },
// };

// export default function FoodPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [imageHover, setImageHover] = useState(false);

//   useEffect(() => {
//     if (id) {
//       const food = menuItems.find(item => item.id === id);
//       setSelectedFood(food);
//     }
//   }, [id]);

//   if (!id || !selectedFood) {
//     return (
//       <div style={styles.loadingWrapper}>
//         <p style={styles.loadingText}>در حال بارگذاری...</p>
//       </div>
//     );
//   }

//   const renderStars = (rate) => {
//     const stars = [];
//     const fullStars = Math.floor(rate);
//     const hasHalfStar = rate - fullStars >= 0.5;
//     const totalStars = 5;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <svg key={`full-star-${i}`} style={styles.star} fill="#FBBF24" viewBox="0 0 20 20">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z" />
//         </svg>
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(
//         <svg key={`half-star`} style={styles.star} viewBox="0 0 20 20">
//           <defs>
//             <linearGradient id="halfGrad">
//               <stop offset="50%" stopColor="#FBBF24" />
//               <stop offset="50%" stopColor="transparent" />
//             </linearGradient>
//           </defs>
//           <path
//             fill="url(#halfGrad)"
//             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z"
//           />
//         </svg>
//       );
//     }

//     const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <svg
//           key={`empty-star-${i}`}
//           style={{ ...styles.star, color: '#6B7280' }}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z" />
//         </svg>
//       );
//     }

//     return stars;
//   };

//   return (
//     <div style={styles.pageWrapper}>
//       <button
//         onClick={() => router.push('/')}
//         style={{
//           alignSelf: 'flex-start',
//           backgroundColor: 'transparent',
//           color: '#FFFFFF',
//           border: 'none',
//           padding: '0',
//           fontSize: '1.15rem',
//           fontWeight: '600',
//           marginBottom: '24px',
//           cursor: 'pointer',
//           textDecoration: 'none',
// 			 fontFamily : "Vazir"
//         }}
//       >
//         ← بازگشت به خانه
//       </button>

//       <div style={{ ...styles.card, ...fadeInStyle }}>
//         <div style={styles.flexRow}>
//           <div
//             style={{
//               ...styles.imageWrapper,
//               ...(imageHover ? styles.imageWrapperHover : {}),
//             }}
//             onMouseEnter={() => setImageHover(true)}
//             onMouseLeave={() => setImageHover(false)}
//           >
//             <Image
//               src={selectedFood.image}
//               alt={selectedFood.name}
//               width={400}
//               height={400}
//               style={styles.image}
//             />
//           </div>

//           <div style={styles.textContainer}>
//             <h1 style={styles.heading}>{selectedFood.name}</h1>
//             <div style={styles.ratingRow}>
//               {renderStars(selectedFood.rate)}
//               <span style={styles.ratingNumber}>{selectedFood.rate.toFixed(1)}</span>
//             </div>
//             <p style={styles.infoText}>
//               <span style={styles.infoLabel}>قیمت: </span>
//               {selectedFood.price}
//             </p>
//             <p style={styles.infoText}>
//               <span style={styles.infoLabel}>زمان آماده‌سازی: </span>
//               {selectedFood.time}
//             </p>
//             <div>
//               <span style={{ ...styles.infoLabel, color: '#E5E7EB' }}>ترکیبات:</span>
//               <div style={styles.suppliesContainer}>
//                 {selectedFood.supplies.map((supply, idx) => (
//                   <span key={idx} style={styles.supplyBadge}>
//                     {supply}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes pulse {
//           0%, 100% {opacity: 1;}
//           50% {opacity: 0.5;}
//         }
//       `}</style>
//     </div>
//   );
// }








'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import menuItems from '../../data/menuItems';
import Image from 'next/image';
// import styles from './id.module.css';
import styles from '@/styles/id.module.css'

export default function FoodPage() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedFood, setSelectedFood] = useState(null);
  const [imageHover, setImageHover] = useState(false);

  useEffect(() => {
    if (id) {
      const food = menuItems.find(item => item.id === id);
      setSelectedFood(food);
    }
  }, [id]);

  if (!id || !selectedFood) {
    return (
      <div className={styles.loadingWrapper}>
        <p className={styles.loadingText}>در حال بارگذاری...</p>
      </div>
    );
  }

  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate - fullStars >= 0.5;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-star-${i}`} className={styles.star} fill="#FBBF24" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half-star" className={styles.star} viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z"
          />
        </svg>
      );
    }

    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-star-${i}`}
          className={styles.star}
          style={{ color: '#6B7280' }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.957z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className={styles.pageWrapper}>
      <button onClick={() => router.push('/')} className={styles.backButton}>
        ← بازگشت به خانه
      </button>

      <div className={styles.card}>
        <div className={styles.flexRow}>
          <div
            className={`${styles.imageWrapper} ${imageHover ? styles.imageWrapperHover : ''}`}
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
          >
            <Image
              src={selectedFood.image}
              alt={selectedFood.name}
              width={400}
              height={400}
              className={styles.image}
            />
          </div>

          <div className={styles.textContainer}>
            <h1 className={styles.heading}>{selectedFood.name}</h1>
            <div className={styles.ratingRow}>
              {renderStars(selectedFood.rate)}
              <span className={styles.ratingNumber}>{selectedFood.rate.toFixed(1)}</span>
            </div>
            <p className={styles.infoText}>
              <span className={styles.infoLabel}>قیمت: </span>
              {selectedFood.price}
            </p>
            <p className={styles.infoText}>
              <span className={styles.infoLabel}>زمان آماده‌سازی: </span>
              {selectedFood.time}
            </p>
            <div>
              <span className={styles.infoLabel} style={{ color: '#E5E7EB' }}>ترکیبات:</span>
              <div className={styles.suppliesContainer}>
                {selectedFood.supplies.map((supply, idx) => (
                  <span key={idx} className={styles.supplyBadge}>
                    {supply}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
