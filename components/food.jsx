
// 'use client';

// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import useCartStore from '@/store/useCart';

// const Food = ({ id, image, name, rate, time, supplies, price }) => {
//   const addItem = useCartStore((state) => state.addItem);

//   return (
//     <div style={{ position: 'relative' }}>
//       <Link href={`/food/${id}`} passHref legacyBehavior>
//         <div
//           style={{
//             backgroundColor: 'inherit',
//             boxShadow: '0 2px 4px hsl(0, 0%, 50%)',
//             width: '300px',
//             borderRadius: '7px',
//             height: '320px',
//             border: '1.5px solid hsl(0, 0%, 50%)',
//             padding: '1px',
//             fontFamily: 'Vazir',
//           }}
//         >
//           <div
//             style={{
//               position: 'relative',
//               width: '100%',
//               height: '180px',
//               borderRadius: '5px',
//               overflow: 'hidden',
//             }}
//           >
//             <img
//               src={image}
//               alt={name}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 filter: 'brightness(38%)',
//               }}
//             />
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 color: 'white',
//                 fontSize: '1rem',
//                 fontWeight: 'bold',
//               }}
//             >
//               {name}
//             </div>
//           </div>

//           <div
//             style={{
//               fontSize: '0.8rem',
//               fontWeight: '600',
//               margin: '20px 15px',
//             }}
//           >
//             <div style={{ display: 'flex', gap: '2px', color: '#f09b0a' }}>
//               <span style={{ fontSize: '0.7rem', fontWeight: '600', fontFamily: 'Arvo' }}>{rate}</span>
//             </div>
//             <div>{time}</div>
//             <p>ترکیبات: {supplies.join(', ')}</p>
//             <div>{price.toLocaleString()} تومان</div>
//           </div>
//         </div>
//       </Link>

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           e.preventDefault();
//           addItem({ id, name, price });
//         }}
//         style={{
//           position: 'absolute',
//           top: '10px',
//           right: '10px',
//           backgroundColor: '#f09b0a',
//           border: 'none',
//           borderRadius: '50%',
//           width: '35px',
//           height: '35px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: 'white',
//           cursor: 'pointer',
//         }}
//       >
//         <FontAwesomeIcon icon={faCartPlus} />
//       </button>
//     </div>
//   );
// };

// export default Food;




// 'use client';

// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus, faStar, faClock, faLeaf } from '@fortawesome/free-solid-svg-icons';
// import useCartStore from '@/store/useCart';

// const Food = ({ id, image, name, rate, time, supplies, price }) => {
//   const addItem = useCartStore((state) => state.addItem);

//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: 320,
//         borderRadius: 12,
// 		  border: '1.5px solid hsl(0, 0%, 50%)',
// 		  backgroundColor: 'inherit',
//         fontFamily: "'Vazir', sans-serif",
//         cursor: 'pointer',
//         overflow: 'hidden',
//         // Removed boxShadow and hover effects here
//         transition: 'none',
//       }}
//     >
//       <Link href={`/food/${id}`} passHref legacyBehavior>
//         <a style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
//           {/* <div
//             style={{
//               position: 'relative',
//               height: 190,
//               borderRadius: '12px 12px 0 0',
//               overflow: 'hidden',
//             }}
//           >
//             <img
//               src={image}
//               alt={name}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 display: 'block',
//                 transition: 'none',
//               }}
//               loading="lazy"
//             />
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background:
//                   'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.8) 100%)',
//               }}
//             />
// 				<h3
// 				style={{
// 					position: 'absolute',
// 					top: '50%',
// 					left: '50%',
// 					transform: 'translate(-50%, -50%)',
// 					margin: 0,
// 					color: '#fff',
// 					fontWeight: '700',
// 					fontSize: '1.5rem',
// 					textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
// 					maxWidth: '85%',
// 					textAlign: 'center',
// 					whiteSpace: 'nowrap', // optional: keeps name in one line
// 				}}
// 				>
// 				{name}
// 				</h3>

//           </div> */}

// 				<div
// 					style={{
// 						position: 'relative',
// 						height: 190,
// 						borderRadius: '12px 12px 0 0',
// 						overflow: 'hidden',
// 					}}
// 					>
// 					<img
// 						src={image}
// 						alt={name}
// 						style={{
// 							width: '100%',
// 							height: '100%',
// 							objectFit: 'cover',
// 							display: 'block',
// 							transition: 'none',
// 							filter: 'brightness(0.89)', // darkens image a bit
// 						}}
// 						loading="lazy"
// 					/>
// 					<div
// 						style={{
// 							position: 'absolute',
// 							inset: 0,
// 							background:
// 							'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.85) 100%)',
// 							pointerEvents: 'none',
// 						}}
// 					/>
// 					<h3
// 						style={{
// 							position: 'absolute',
// 							top: '50%',
// 							left: '50%',
// 							transform: 'translate(-50%, -50%)',
// 							margin: 0,
// 							color: '#fff',
// 							fontWeight: '700',
// 							fontSize: '1.5rem',
// 							textShadow: '1px 1px 6px rgba(0,0,0,0.9)',
// 							maxWidth: '85%',
// 							textAlign: 'center',
// 							whiteSpace: 'nowrap',
// 							userSelect: 'none',
// 						}}
// 					>
// 						{name}
// 					</h3>
// 					</div>


//           <div
//             style={{
//               padding: '16px 18px',
//               fontSize: '0.9rem',
//               color: '#333',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '12px',
//             }}
//           >
//             <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#f09b0a', fontWeight: '600' }}>
//               <FontAwesomeIcon icon={faStar} />
//               <span>{rate}</span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#555' }}>
//               <FontAwesomeIcon icon={faClock} />
//               <span>{time}</span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#3c763d', fontStyle: 'italic' }}>
//               <FontAwesomeIcon icon={faLeaf} />
//               <span>ترکیبات: {supplies.join(', ')}</span>
//             </div>
//             <div
//               style={{
//                 marginTop: 'auto',
//                 fontWeight: '700',
//                 fontSize: '1.1rem',
//                 color: '#f09b0a',
//                 textAlign: 'right',
//               }}
//             >

//               {price.toLocaleString()} تومان
//             </div>
//           </div>
//         </a>
//       </Link>

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           e.preventDefault();
//           addItem({ id, name, price });
//         }}
//         aria-label={`Add ${name} to cart`}
//         style={{
//           position: 'absolute',
//           top: 14,
//           right: 14,
//           backgroundColor: '#f09b0a',
//           border: 'none',
//           borderRadius: '50%',
//           width: 40,
//           height: 40,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: 'white',
//           cursor: 'pointer',
//           boxShadow: 'none',
//           transition: 'none',
//         }}
//       >
//         <FontAwesomeIcon icon={faCartPlus} size="lg" />
//       </button>
//     </div>
//   );
// };

// export default Food;


// 'use client';

// import React from 'react';

// export default function Food({ name, image, price, onAddToCart }) {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         borderBottom: '1px solid #444',
//         color: 'white',
//         fontFamily: 'Vazir',
//       }}
//     >
//       {/* Image */}
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '80px',
//           height: '80px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//       />

//       {/* Info and Add Button */}
//       <div style={{ flex: 1 }}>
//         <h3 style={{ margin: 0 }}>{name}</h3>
//         <p style={{ margin: '4px 0', color: '#aaa' }}>
//           {price.toLocaleString()} تومان
//         </p>
//         <button
//           onClick={onAddToCart}
//           style={{
//             background: '#00e676',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '0.4rem 0.8rem',
//             cursor: 'pointer',
//             color: '#000',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//           }}
//         >
//           افزودن به سبد 🛒
//         </button>
//       </div>
//     </div>
//   );
// }












// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';

// export default function Food({ id, name, image, price }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         borderBottom: '1px solid #444',
//         color: 'white',
//         fontFamily: 'Vazir',
// 		//   width : "300px"
//       }}
//     >
// 		<div></div>
//       {/* Image */}
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '80px',
//           height: '80px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//       />

//       {/* Info and Add Button */}
//       <div style={{ flex: 1 }}>
//         <h3 style={{ margin: 0 }}>{name}</h3>
//         <p style={{ margin: '4px 0', color: '#aaa' }}>
//           {price.toLocaleString()} تومان
//         </p>
//         <button
//           onClick={handleAddToCart}
//           style={{
//             background: '#00e676',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '0.4rem 0.8rem',
//             cursor: 'pointer',
//             color: '#000',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//           }}
//         >
//           افزودن به سبد 🛒
//         </button>
//       </div>
//     </div>
//   );
// }









// // food.js
// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';

// export default function Food({ id, name, image, price }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         borderBottom: '1px solid #444',
//         color: 'white',
//         fontFamily: 'Vazir',
//         maxWidth: '220px',
//       }}
//     >
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '80px',
//           height: '80px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//       />

//       <div style={{ flex: 1 }}>
//         <h3 style={{ margin: 0 }}>{name}</h3>
//         <p style={{ margin: '4px 0', color: '#aaa' }}>{price.toLocaleString()} تومان</p>
//         <button
//           onClick={handleAddToCart}
//           style={{
//             background: '#00e676',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '0.4rem 0.8rem',
//             cursor: 'pointer',
//             color: '#000',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//           }}
//         >
//           افزودن به سبد 🛒
//         </button>
//       </div>
//     </div>
//   );
// }






// // food.js
// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';

// export default function Food({ id, name, image, price }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         borderBottom: '1px solid #444',
//         color: 'white',
//         fontFamily: 'Vazir',
//         maxWidth: '220px',
//       }}
//     >
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '80px',
//           height: '80px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//       />

//       <div style={{ flex: 1 }}>
//         <h3 style={{ margin: 0 }}>{name}</h3>
//         <p style={{ margin: '4px 0', color: '#aaa' }}>{price.toLocaleString()} تومان</p>
//         <button
//           onClick={handleAddToCart}
//           style={{
//             background: '#00e676',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '0.4rem 0.8rem',
//             cursor: 'pointer',
//             color: '#000',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//           }}
//         >
//           افزودن به سبد 🛒
//         </button>
//       </div>
//     </div>
//   );
// }









// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';
// import Link from 'next/link'; // <-- Add this

// export default function Food({ id, name, image, price }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         borderBottom: '1px solid #444',
//         color: 'white',
//         fontFamily: 'Vazir',
//         maxWidth: '220px',
//       }}
//     >
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '80px',
//           height: '80px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//       />

//       <div style={{ flex: 1 }}>
//         <h3 style={{ margin: 0 }}>
//           <Link
//             href={`/food/${id}`}
//             style={{
//               color: '#00e676',
//               textDecoration: 'none',
//               fontWeight: 'bold',
//             }}
//           >
//             {name}
//           </Link>
//         </h3>
// 		  <h6>{supplies.join(', ')}</h6>
//         <p style={{ margin: '4px 0', color: '#aaa' }}>
//           {price.toLocaleString()} تومان
//         </p>
//         <button
//           onClick={handleAddToCart}
//           style={{
//             background: '#00e676',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '0.4rem 0.8rem',
//             cursor: 'pointer',
//             color: '#000',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//           }}
//         >
//           افزودن به سبد 🛒
//         </button>
//       </div>
//     </div>
//   );
// }










// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';
// import Link from 'next/link';

// export default function Food({ id, name, image, price, supplies }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         borderBottom: '1px solid #444',
//         color: 'white',
//         fontFamily: 'Vazir',
//         maxWidth: '240px',
		  
// 		  borderRadius : "7px",
		  
//       }}
//     >
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '80px',
//           height: '80px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//       />

//       <div style={{ flex: 1 }}>
//         <h3 style={{ margin: 0 }}>
//           <Link
//             href={`/food/${id}`}
//             style={{
//               color: '#00e676',
//               textDecoration: 'none',
//               fontWeight: 'bold',
//             }}
//           >
//             {name}
//           </Link>
//         </h3>

//         {/* ✅ Show supplies */}
//         <h6 style={{ margin: '4px 0', color: '#ccc' }}>
//           {supplies?.join(', ')}
//         </h6>

//         <p style={{ margin: '4px 0', color: '#aaa' }}>
//           {price.toLocaleString()} تومان
//         </p>
//         <button
//           onClick={handleAddToCart}
//           style={{
//             background: '#00e676',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '0.4rem 0.8rem',
//             cursor: 'pointer',
//             color: '#000',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//           }}
//         >
//           افزودن به سبد 🛒
//         </button>
//       </div>
//     </div>
//   );
// }










// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';
// import { ShoppingCart } from 'lucide-react'; // Add this at the top
// import Link from 'next/link';

// export default function Food({ id, name, image, price, supplies }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         // borderBottom: '1px solid #444', ← Removed this line
//         color: 'white',
//         fontFamily: 'Vazir',
//         maxWidth: '240px',
//         borderRadius: '7px',
//       }}
//     >
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '80px',
//           height: '80px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//       />

//       <div style={{ flex: 1 }}>
//         <h3 style={{ margin: 0 }}>
//           <Link
//             href={`/food/${id}`}
//             style={{
//               color: 'hsl(52, 92%, 40%)',
//               textDecoration: 'none',
//               fontWeight: 'bold',
//             }}
//           >
//             {name}
//           </Link>
//         </h3>

//         <h6 style={{ margin: '4px 0', color: '#ccc' }}>
//           {supplies?.join(', ')}
//         </h6>

//         <p style={{ margin: '4px 0', color: '#aaa' }}>
//           {price.toLocaleString()} تومان
//         </p>
//         {/* <button
//           onClick={handleAddToCart}
//           style={{
//             background: '#00e676',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '0.4rem 0.8rem',
//             cursor: 'pointer',
//             color: '#000',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//           }}
//         >
//           افزودن به سبد 🛒
//         </button> */}
// 		  {/* // ... inside the component: */}
// 			<button
// 			onClick={handleAddToCart}
// 			style={{
// 				background: 'hsl(52, 92%, 38%)',
// 				border: 'none',
// 				borderRadius: '6px',
// 				padding: '0.28rem 0.5rem',
// 				cursor: 'pointer',
// 				color: 'white',
// 				fontWeight: '800',
// 				fontSize: '0.9rem',
// 				display: 'flex',
// 				alignItems: 'center',
// 				justifyContent: 'center',
// 			}}
// 			>
// 			<ShoppingCart size={14} />
// 			</button>

//       </div>
//     </div>
//   );
// }







// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';
// import { ShoppingCart } from 'lucide-react';
// import Link from 'next/link';

// export default function Food({ id, name, image, price, supplies }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         color: 'white',
//         fontFamily: 'Vazir',
//         maxWidth: '240px',
//         borderRadius: '7px',
//       }}
//     >
//       <img
//         src={image}
//         alt={name}
//         style={{
//           width: '80px',
//           height: '80px',
//           objectFit: 'cover',
//           borderRadius: '8px',
//         }}
//       />

//       <div style={{ flex: 1 }}>
//         <h3 style={{ margin: 0 }}>
//           <Link
//             href={`/food/${id}`}
//             style={{
//               color: 'hsl(52, 92%, 40%)',
//               textDecoration: 'none',
//               fontWeight: 'bold',
//             }}
//           >
//             {name}
//           </Link>
//         </h3>

//         <h6 style={{ margin: '4px 0', color: '#ccc', fontSize : "0.68rem", fontWeight : "500" }}>
//           {supplies?.join(', ')}
//         </h6>

//         {/* Price and Add-to-Cart button side by side */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '1.9rem',
//             marginTop: '4px',
//           }}
//         >
//           <p style={{ margin: 0, color: '#aaa', fontWeight: '600', fontSize : "0.8rem" }}>
//             {price.toLocaleString()} تومان
//           </p>
//           <button
//             onClick={handleAddToCart}
//             style={{
//               background: 'hsl(52, 92%, 38%)',
//               border: 'none',
//               borderRadius: '6px',
//               padding: '0.3rem 0.6rem',
//               cursor: 'pointer',
//               color: 'white',
//               fontWeight: '800',
//               fontSize: '0.9rem',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <ShoppingCart size={14} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';
// import { ShoppingCart } from 'lucide-react';
// import Link from 'next/link';

// export default function Food({ id, name, image, price, supplies }) {
//   const addItem = useCartStore((state) => state.addItem);
//   const items = useCartStore((state) => state.items);
//   const quantity = items.find((item) => item.id === id)?.quantity || 0;

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.5rem 1rem',
//         color: 'white',
//         fontFamily: 'Vazir',
//         maxWidth: '240px',
//         borderRadius: '7px',
//       }}
//     >
      // <img
      //   src={image}
      //   alt={name}
      //   style={{
      //     width: '80px',
      //     height: '80px',
      //     objectFit: 'cover',
      //     borderRadius: '8px',
      //   }}
      // />

//       <div style={{ flex: 1 }}>
//         {/* Name and quantity badge row */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <h3 style={{ margin: 0 }}>
//             <Link
//               href={`/food/${id}`}
//               style={{
//                 color: 'hsl(52, 92%, 40%)',
//                 textDecoration: 'none',
//                 fontWeight: 'bold',
//                 fontSize: '1rem',
//               }}
//             >
//               {name}
//             </Link>
//           </h3>

//           {quantity > 0 && (
//             <span
//               style={{
//                 backgroundColor: 'hsl(52, 92%, 38%)',
//                 color: 'black',
//                 fontSize: '0.7rem',
//                 padding: '3px 3px',
//                 borderRadius: '12px',
//                 fontWeight: '600',
//                 minWidth: '24px',
//                 textAlign: 'center',
//                 marginRight: '8px',
//               }}
//             >
//               {quantity}
//             </span>
//           )}
//         </div>

//         <h6 style={{ margin: '4px 0', color: '#ccc', fontSize: '0.68rem', fontWeight: '500' }}>
//           {supplies?.join(', ')}
//         </h6>

//         {/* Price and Add-to-Cart button side by side */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '1.9rem',
//             marginTop: '4px',
//           }}
//         >
//           <p style={{ margin: 0, color: '#aaa', fontWeight: '600', fontSize: '0.8rem' }}>
//             {price.toLocaleString()} تومان
//           </p>
//           <button
//             onClick={handleAddToCart}
//             style={{
//               background: 'hsl(52, 92%, 38%)',
//               border: 'none',
//               borderRadius: '6px',
//               padding: '0.3rem 0.6rem',
//               cursor: 'pointer',
//               color: 'white',
//               fontWeight: '800',
//               fontSize: '0.9rem',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <ShoppingCart size={14} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';
// import { ShoppingCart } from 'lucide-react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

// export default function Food({ id, name, image, price, rating = 4.5 }) {
//   const addItem = useCartStore((state) => state.addItem);
//   const items = useCartStore((state) => state.items);
//   const quantity = items.find((item) => item.id === id)?.quantity || 0;

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

//   const renderStars = () => {
//     const fullStars = Math.floor(rating);
//     const hasHalf = rating % 1 >= 0.25;
//     const stars = [];

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} style={{ color: '#ffc107', marginRight: 4 }} />);
//     }

//     if (hasHalf) {
//       stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} style={{ color: '#ffc107', marginRight: 4 }} />);
//     }

//     return <div style={{ marginTop: '0.5rem' }}>{stars}</div>;
//   };

//   return (
//    //  <div
//    //    style={{
//    //      position: 'relative',
//    //      backgroundColor: '#222',
//    //      color: 'white',
//    //      fontFamily: 'Vazir',
//    //      padding: '0.6rem',
// 	// 	  paddingInline : "2.5rem",
//    //    //   paddingTop: '2.5rem',
//    //      borderRadius: '10px',
//    //      maxWidth: '300px',
//    //    }}
//    //  >

// 	<div
// 		style={{
// 			position: 'relative',
// 			// background: 'linear-gradient(to bottom, hsl(0, 0%, 80%) 0%, #111111 30%)', // ✅ gradient
// 			background: 'linear-gradient(to bottom, #2c2c2c 0%, #1f1f1f 40%, #151515 80%, #0d0d0d 100%)',
// 			color: 'white',
// 			fontFamily: 'Vazir',
// 			padding: '0.6rem',
// 			paddingInline: '2.5rem',
// 			borderRadius: '10px',
// 			width: '100%',
// 			maxWidth: '500px',
// 			minWidth: '150px',
// 			margin: '0 auto',
// 		}}
// 		>


//       <img
//         src={image}
//         alt={name}
//         style={{
//           position: 'absolute',
//           top: '-30px',
//           left: '-20px',
//           width: '80px',
//           height: '80px',
//           borderRadius: '100px',
//           objectFit: 'cover',
//           boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
			 
//         }}
//       />

//       <h3 style={{ margin: '0 0 0.5rem' }}>
//         <Link
//           href={`/food/${id}`}
//           style={{
//             color: 'hsl(52, 92%, 40%)',
//             textDecoration: 'none',
//             fontWeight: 'bold',
//             fontSize: '1.1rem',
//           }}
//         >
//           {name}
//         </Link>
//       </h3>

//       {renderStars()}

//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginTop: '1rem',
//         }}
//       >
//         <p
//           style={{
//             margin: 0,
//             color: '#aaa',
//             fontWeight: '600',
//             fontSize: '0.8rem',
//           }}
//         >
//           {price.toLocaleString()} تومان
//         </p>

//         <button
//           onClick={handleAddToCart}
//           style={{
//             background: 'hsl(52, 92%, 38%)',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '0.3rem 0.6rem',
//             cursor: 'pointer',
//             color: 'white',
//             fontWeight: '800',
//             fontSize: '0.9rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <ShoppingCart size={14} />
//         </button>
//       </div>
//     </div>
//   );
// }












// 'use client';

// import React from 'react';
// import useCartStore from '@/store/useCart';
// import { ShoppingCart } from 'lucide-react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

// export default function Food({ id, name, image, price, rating = 4.5 }) {
//   const addItem = useCartStore((state) => state.addItem);
//   const items = useCartStore((state) => state.items);
//   const quantity = items.find((item) => item.id === id)?.quantity || 0;

//   const handleAddToCart = () => {
//     addItem({
//       id,
//       name,
//       image,
//       price,
//       quantity: 1,
//     });
//   };

// //   const renderStars = () => {
// //     const fullStars = Math.floor(rating);
// //     const hasHalf = rating % 1 >= 0.25;
// //     const stars = [];

// //     for (let i = 0; i < fullStars; i++) {
// //       stars.push(
// //         <FontAwesomeIcon
// //           key={`full-${i}`}
// //           icon={faStar}
// //           style={{ color: '#ffc107', marginRight: 4 }}
// //         />
// //       );
// //     }

// //     if (hasHalf) {
// //       stars.push(
// //         <FontAwesomeIcon
// //           key="half"
// //           icon={faStarHalfAlt}
// //           style={{ color: '#ffc107', marginRight: 4 }}
// //         />
// //       );
// //     }

// //     return <div>{stars}</div>;
// //   };

// 		const renderStars = () => {
// 		const fullStars = Math.floor(rating);
// 		const hasHalf = rating % 1 >= 0.25;
// 		const stars = [];

// 		for (let i = 0; i < fullStars; i++) {
// 			stars.push(
// 				<FontAwesomeIcon
// 				key={`full-${i}`}
// 				icon={faStar}
// 				style={{ color: '#ffc107' /* removed marginRight */ }}
// 				/>
// 			);
// 		}

// 		if (hasHalf) {
// 			stars.push(
// 				<FontAwesomeIcon
// 				key="half"
// 				icon={faStarHalfAlt}
// 				style={{ color: '#ffc107' /* removed marginRight */ }}
// 				/>
// 			);
// 		}

// 		return <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.6rem', gap: 1 }}>{stars}</div>;
// 		};


//   return (
//     <div
//       style={{
//         position: 'relative',
//         background:
//           'linear-gradient(to bottom, #2c2c2c 0%, #1f1f1f 40%, #151515 80%, #0d0d0d 100%)',
//         color: 'white',
//         fontFamily: 'Vazir',
//         padding: '0.6rem 2.5rem 3rem 2.5rem', // extra bottom padding for button & text
//         borderRadius: '10px',
//         width: '100%',
//         maxWidth: '500px',
//         minWidth: '150px',
//         margin: '0 auto',
//         boxSizing: 'border-box',
//       }}
//     >
//       <img
//         src={image}
//         alt={name}
//         style={{
//           position: 'absolute',
//           top: '-30px',
//           left: '-20px',
//           width: '80px',
//           height: '80px',
//           borderRadius: '100px',
//           objectFit: 'cover',
//           boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
// 			 border : "2px solid white"
//         }}
//       />

//       {/* Centered food name */}
//       <h3
//         style={{
//           margin: '0 0 0.5rem',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '1.6rem',
//           fontWeight: 'bold',
//           fontSize: '1.1rem',
//         }}
//       >
//         <Link
//           href={`/food/${id}`}
//           style={{
//             color: 'hsl(52, 92%, 40%)',
//             textDecoration: 'none',
//             width: '100%',
//             textAlign: 'center',
// 				marginLeft : "10px"
//           }}
//         >
//           {name}
//         </Link>
//       </h3>

//       {/* Stars and price side by side */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginTop: '0.5rem',
// 			 gap : "20px"
//         }}
//       >
//         <p
//           style={{
//             margin: 0,
//             color: '#aaa',
//             fontWeight: '600',
//             fontSize: '0.8rem',
//           }}
//         >
//           {price.toLocaleString()} تومان
//         </p>

//         <div style={{ display: 'flex', alignItems: 'center', fontSize : "0.6rem", marginLeft : "10px" }}>{renderStars()}</div>
//       </div>

//       {/* Cart button partially out of box bottom-right */}
//       <button
//         onClick={handleAddToCart}
//         style={{
//           position: 'absolute',
//           bottom: '-12px',
//           right: '-15px',
//           background: 'hsl(52, 92%, 38%)',
//           border: 'none',
//           borderRadius: '6px',
//           padding: '0.4rem 0.7rem',
//           cursor: 'pointer',
//           color: 'white',
//           fontWeight: '800',
//           fontSize: '0.98rem',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
//         }}
//       >
//         <ShoppingCart size={14} />
//       </button>

//       <p
// 			style={{
// 				position: 'absolute',
// 				bottom: '10px',
// 				left: '50%',
// 				transform: 'translateX(-50%)',
// 				margin: 0,
// 				lineHeight: 1,
// 				borderBottom: '1px solid gray',
// 				fontWeight: '500',
// 				cursor: 'pointer',
// 				userSelect: 'none',
// 				fontSize: '0.75rem',
// 				color: 'gray',
// 				whiteSpace: 'nowrap',

// 			}}
// 			>
// 			سفارش دهید
// 			</p>

//     </div>
//   );
// }









'use client';

import React from 'react';
import useCartStore from '@/store/useCart';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import styles from '@/styles/food.module.css'; // Make sure this path matches your structure
import styles from '@/styles/food.module.css'

export default function Food({ id, name, image, price, rating = 4.5 }) {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);
  const quantity = items.find((item) => item.id === id)?.quantity || 0;

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      image,
      price,
      quantity: 1,
    });
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.25;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          style={{ color: '#ffc107' }}
        />
      );
    }

    if (hasHalf) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfAlt}
          style={{ color: '#ffc107' }}
        />
      );
    }

    return <div className={styles.rating}>{stars}</div>;
  };

  return (
    <div className={styles.foodCard}>
      <img src={image} alt={name} className={styles.foodImage} />

      <h3 className={styles.foodName}>
        <Link href={`/food/${id}`} className={styles.foodNameLink}>
          {name}
        </Link>
      </h3>

      <div className={styles.priceRating}>
        <p className={styles.price}>{price.toLocaleString()} تومان</p>
        {renderStars()}
      </div>

      <button onClick={handleAddToCart} className={styles.cartButton}>
        <ShoppingCart size={14} />
      </button>

      <p className={styles.orderText}>سفارش دهید</p>
    </div>
  );
}
