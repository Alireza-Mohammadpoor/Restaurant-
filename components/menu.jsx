








// 'use client';

// import styles from '@/styles/menu.module.css';
// import Link from 'next/link';
// import { useState } from 'react';
// import Food from './food';
// import useFoodStore from '@/store/useFood';
// // import menuItems from '@/data/menuItems'; // ✅ Import menuItems
// import menuItems from '@/pages/data/menuItems';

// export default function Menu() {
//   const [counts, setCounts] = useState(
//     menuItems.reduce((acc, item) => {
//       acc[item.id] = 0;
//       return acc;
//     }, {})
//   );

//   const setSelectedFood = useFoodStore((state) => state.setSelectedFood);

//   const changeCount = (id, delta) => {
//     setCounts((prev) => ({
//       ...prev,
//       [id]: Math.max(0, prev[id] + delta),
//     }));
//   };

//   return (
//     <div className={styles.menuContainer}>

		// <h1
		// className={styles.title}
		// style={{
		// 	fontFamily: 'Vazir',
		// 	display: 'flex',
		// 	alignItems: 'center',
		// 	justifyContent: 'center',
		// 	fontSize: '1.2rem',
		// 	gap: '1rem',
		// 	width: '80%',
		// 	textAlign: 'center',
		// 	margin: '0 auto', // This centers the block
		// 	marginBottom : "4rem",
		// 	marginTop : "1rem"
		// }}
		// >
		// 	<span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
		// 	منوی غذاها
		// 	<span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
		// </h1>


//       <div className={styles.grid}>
//         {menuItems.map((item) => (
// 				<Link
// 					key={item.id}
// 					href={`/food/${item.id}`}
// 					onClick={() => setSelectedFood(item)}
// 				>
// 					<Food {...item} />
// 				</Link>
// 			))}
//       </div>
//     </div>
//   );
// }









// 'use client';

// import styles from '@/styles/menu.module.css';
// import { useState } from 'react';
// import Food from './food';
// import ShoppingCart from './shoppingCart';
// import menuItems from '@/pages/data/menuItems';


// export default function Menu() {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x.id === item.id);
//       if (existing) {
//         return prevCart.map((x) =>
//           x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <div className={styles.menuContainer}>
// 		<h1
// 			className={styles.title}
// 			style={{
// 				fontFamily: 'Vazir',
// 				display: 'flex',
// 				alignItems: 'center',
// 				justifyContent: 'center',
// 				fontSize: '1.2rem',
// 				gap: '1rem',
// 				width: '80%',
// 				textAlign: 'center',
// 				margin: '0 auto', 
// 				marginBottom : "4rem",
// 				marginTop : "1rem"
// 			}}
// 			>
// 				<span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
// 				منوی غذاها
// 				<span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
// 				{/* <div style={{fontFamily : "Vazir"}}>رستوران</div> */}
// 		</h1>


//       <div className={styles.grid}>
// 			{menuItems.map((item) => (
// 			<Food key={item.id} {...item} />
// 			))}

//       </div>

//       <ShoppingCart />


//     </div>
//   );
// }














// 'use client';

// import styles from '@/styles/menu.module.css';
// import { useState } from 'react';
// import Food from './food';
// import ShoppingCart from './shoppingCart';
// import menuItems from '@/pages/data/menuItems';

// export default function Menu() {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x.id === item.id);
//       if (existing) {
//         return prevCart.map((x) =>
//           x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <div className={styles.menuContainer}>
//       <h1
//         className={styles.title}
//         style={{
//           fontFamily: 'Vazir',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '1.2rem',
//           gap: '1rem',
//           width: '80%',
//           textAlign: 'center',
//           margin: '0 auto',
//           marginBottom: '4rem',
//           marginTop: '1rem',
//         }}
//       >
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//         منوی غذاها
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//       </h1>

//       <div className={styles.menuLayout}>
//         <div className={styles.foodSection}>
//           {menuItems.map((item, index) => (
//             <div
//               key={item.id}
//               className={styles.foodWrapper}
//               style={{
//                 gridColumn: index % 2 === 0 ? '1' : '2',
//               }}
//             >
//               <Food {...item} />
//             </div>
//           ))}
//         </div>

//         <div className={styles.cartSection}>
//           <ShoppingCart cart={cart} />
//         </div>
//       </div>
//     </div>
//   );
// }












// 'use client';

// import styles from '@/styles/menu.module.css';
// import { useState } from 'react';
// import Food from './food';
// import ShoppingCart from './shoppingCart';
// import menuItems from '@/pages/data/menuItems';

// export default function Menu() {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x.id === item.id);
//       if (existing) {
//         return prevCart.map((x) =>
//           x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <div className={styles.menuContainer}>
//       <h1 className={styles.title}>
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//         منوی غذاها
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//       </h1>

//       <div className={styles.menuLayout}>
//         <div className={styles.cartSection}>
//           <ShoppingCart cart={cart} />
//         </div>

//         <div className={styles.foodSection}>
//           {menuItems.map((item, index) => (
//             <div
//               key={item.id}
//               className={styles.foodWrapper}
//               style={{
//                 gridColumn: index % 2 === 0 ? '2' : '3',
//               }}
//             >
//               <Food {...item} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }








// 'use client';

// import styles from '@/styles/menu.module.css';
// import { useState } from 'react';
// // import Food from './Food';
// import Food from './food';
// // import ShoppingCart from './ShoppingCart';
// import ShoppingCart from './shoppingCart';
// import menuItems from '@/pages/data/menuItems';

// export default function Menu() {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x.id === item.id);
//       if (existing) {
//         return prevCart.map((x) =>
//           x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <div className={styles.menuContainer}>
//       <h1 className={styles.title}>
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//         منوی غذاها
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//       </h1>

//       <div className={styles.menuLayout}>
//         <div className={styles.cartSection}>
//           <ShoppingCart cart={cart} />
//         </div>

//         <div className={styles.foodSection}>
//           {menuItems.map((item, index) => (
//             <div
//               key={item.id}
//               className={styles.foodWrapper}
//               style={{
//                 gridColumn: index % 2 === 0 ? '2' : '3',
//               }}
//             >
//               <Food
//                 name={item.name}
//                 image={item.image}
//                 price={item.price}
//                 onAddToCart={() => handleAddToCart(item)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }











// 'use client';

// import styles from '@/styles/menu.module.css';
// import { useState } from 'react';
// import Food from './food';
// import ShoppingCart from './shoppingCart';
// import menuItems from '@/pages/data/menuItems';
// import Link from 'next/link';

// const categories = [
//   'پیش غذا',
//   'سالاد',
//   'نوشیدنی',
//   'پیتزا',
//   'پاستا',
//   'برگر',
//   'غذای ایرانی',
// ];

// export default function Menu() {
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('پیش غذا');

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x.id === item.id);
//       if (existing) {
//         return prevCart.map((x) =>
//           x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const filteredItems = menuItems.filter(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <div className={styles.menuContainer}>
//       <h1 className={styles.title}>
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//         منوی غذاها
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//       </h1>

//       {/* === Category Tabs === */}
//       <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             style={{
//               backgroundColor: selectedCategory === cat ? '#00e676' : '#333',
//               color: selectedCategory === cat ? '#000' : '#fff',
//               border: 'none',
//               padding: '0.5rem 1rem',
//               borderRadius: '0.5rem',
//               cursor: 'pointer',
//               fontFamily: 'Vazir',
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className={styles.menuLayout}>
//         <div className={styles.cartSection}>
//           <ShoppingCart cart={cart} />
//         </div>

//         <div className={styles.foodSection}>
//           {filteredItems.length > 0 ? (
//             filteredItems.map((item, index) => (
//               <div
//                 key={item.id + index}
//                 className={styles.foodWrapper}
//                 style={{
//                   gridColumn: index % 2 === 0 ? '2' : '3',
//                 }}
//               >
// 					<Link href={`/food/${item.id}`}>
//                 <Food
//                   id={item.id}
//                   name={item.name}
//                   image={item.image}
//                   price={item.price}
//                   onAddToCart={() => handleAddToCart(item)}
//                 />
// 					</Link>
//               </div>
//             ))
//           ) : (
//             <p style={{ color: '#fff', gridColumn: '2 / span 2' }}>
//               موردی در این دسته‌بندی وجود ندارد.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import styles from '@/styles/menu.module.css';
// import { useState } from 'react';
// import Food from './food';
// import ShoppingCart from './shoppingCart';
// import menuItems from '@/pages/data/menuItems';

// const categories = [
//   'پیش غذا',
// //   'سالاد',
//   'نوشیدنی',
// //   'پیتزا',
// //   'پاستا',
// //   'برگر',
//   'غذای اصلی',
// ];

// export default function Menu() {
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('پیش غذا');

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x.id === item.id);
//       if (existing) {
//         return prevCart.map((x) =>
//           x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const filteredItems = menuItems.filter(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <div className={styles.menuContainer}>
//       <h1 className={styles.title}>
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//         <p style={{fontFamily : "Vazir"}}> منوی غذاها </p>
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//       </h1>

//       {/* === Category Tabs === */}
//       <div
//         style={{
//           display: 'flex',
//           gap: '1rem',
//           justifyContent: 'center',
//           marginBottom: '2rem',
//         }}
//       >
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             style={{
//               backgroundColor: selectedCategory === cat ? 'hsl(52, 92%, 38%)' : '#333',
//               color: selectedCategory === cat ? '#000' : '#fff',
//               border: 'none',
//               padding: '0.5rem 1rem',
//               borderRadius: '0.5rem',
//               cursor: 'pointer',
//               fontFamily: 'Vazir',
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className={styles.menuLayout}>
//         <div className={styles.cartSection}>
//           <ShoppingCart cart={cart} />
//         </div>

//         <div className={styles.foodSection}>
//           {filteredItems.length > 0 ? (
//             filteredItems.map((item, index) => (
//               <div
//                 key={item.id + index}
//                 className={styles.foodWrapper}
//                 style={{
//                   gridColumn: index % 2 === 0 ? '2' : '3',
// 						border : "1px hsl(0, 0%, 29%) solid ",
//                 }}
//               >
//                 <Food
//                   id={item.id}
//                   name={item.name}
//                   image={item.image}
//                   price={item.price}
// 						supplies = {item.supplies}
//                   onAddToCart={() => handleAddToCart(item)}
//                 />
//               </div>
//             ))
//           ) : (
//             <p style={{ color: '#fff', gridColumn: '2 / span 2' }}>
//               موردی در این دسته‌بندی وجود ندارد.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
















// 'use client';

// import styles from '@/styles/menu.module.css';
// import { useState, useEffect } from 'react';
// import Food from './food';
// import ShoppingCart from './shoppingCart';
// import menuItems from '@/pages/data/menuItems';

// const categories = [
//   'پیش غذا',
//   'نوشیدنی',
//   'غذای اصلی',
// ];

// export default function Menu() {
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('پیش غذا');
//   const [activeTab, setActiveTab] = useState('menu'); // for mobile

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x.id === item.id);
//       if (existing) {
//         return prevCart.map((x) =>
//           x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const filteredItems = menuItems.filter(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <div className={styles.menuContainer}>
//       <h1 className={styles.title}>
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//         <p style={{ fontFamily: 'Vazir' }}> منوی غذاها </p>
//         <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }}></span>
//       </h1>

//       {/* Category Tabs */}
//       <div
//         style={{
//           display: 'flex',
//           gap: '1rem',
//           justifyContent: 'center',
//           marginBottom: '2rem',
//         }}
//       >
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             style={{
//               backgroundColor: selectedCategory === cat ? 'hsl(52, 92%, 38%)' : '#333',
//               color: selectedCategory === cat ? '#000' : '#fff',
//               border: 'none',
//               padding: '0.5rem 1rem',
//               borderRadius: '0.5rem',
//               cursor: 'pointer',
//               fontFamily: 'Vazir',
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Desktop Layout */}
//       <div className={styles.menuLayout}>
//         <div className={styles.cartSection}>
//           <ShoppingCart cart={cart} />
//         </div>

//         <div className={styles.foodSection}>
//           {filteredItems.length > 0 ? (
//             filteredItems.map((item, index) => (
//               <div
//                 key={item.id + index}
//                 className={styles.foodWrapper}
//                 style={{
//                   gridColumn: index % 2 === 0 ? '2' : '3',
//                   border: '1px hsl(0, 0%, 29%) solid',
//                 }}
//               >
//                 <Food
//                   id={item.id}
//                   name={item.name}
//                   image={item.image}
//                   price={item.price}
//                   supplies={item.supplies}
//                   onAddToCart={() => handleAddToCart(item)}
//                 />
//               </div>
//             ))
//           ) : (
//             <p style={{ color: '#fff', gridColumn: '2 / span 2' }}>
//               موردی در این دسته‌بندی وجود ندارد.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className={styles.mobileLayout}>
//         {activeTab === 'menu' ? (
//           <div className={styles.foodSection}>
//             {filteredItems.length > 0 ? (
//               filteredItems.map((item, index) => (
//                 <div
//                   key={item.id + index}
//                   className={styles.foodWrapper}
//                   style={{
//                     border: '1px hsl(0, 0%, 29%) solid',
//                   }}
//                 >
//                   <Food
//                     id={item.id}
//                     name={item.name}
//                     image={item.image}
//                     price={item.price}
//                     supplies={item.supplies}
//                     onAddToCart={() => handleAddToCart(item)}
//                   />
//                 </div>
//               ))
//             ) : (
//               <p style={{ color: '#fff' }}>موردی در این دسته‌بندی وجود ندارد.</p>
//             )}
//           </div>
//         ) : (
//           <div className={styles.cartSection}>
//             <ShoppingCart cart={cart} />
//           </div>
//         )}
//       </div>

//       {/* Mobile Footer */}
//       <footer className={styles.mobileFooter}>
//         <button
//           onClick={() => setActiveTab('menu')}
//           className={activeTab === 'menu' ? styles.activeTab : ''}
//         >
//           <img src="/img/list.png" alt="dddddd" style={{width : "20px", height : "20px",filter: 'brightness(0) invert(1)',}}/>
//         </button>
//         <button
//           onClick={() => setActiveTab('cart')}
//           className={activeTab === 'cart' ? styles.activeTab : ''}
//         >
//           <img
// 				src="/img/cart.png"
// 				alt="ddddddd"
// 				style={{
// 					height: '30px',
// 					width: '30px',
// 					filter: 'brightness(0) invert(1)',
// 				}}
// 				/>

//         </button>
//       </footer>
//     </div>
//   );
// }










// 'use client';

// import styles from '@/styles/menu.module.css';
// import { useState } from 'react';
// import Food from './food';
// import ShoppingCart from './shoppingCart';
// import menuItems from '@/pages/data/menuItems';

// const categories = ['پیش غذا', 'نوشیدنی', 'غذای اصلی'];

// export default function Menu() {
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('پیش غذا');
//   const [activeTab, setActiveTab] = useState('menu'); // for mobile

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((x) => x.id === item.id);
//       if (existing) {
//         return prevCart.map((x) =>
//           x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const filteredItems = menuItems.filter(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <>
//       <div className={styles.menuContainer}>
//         <h1 className={styles.title}>
//           <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }} />
//           <p style={{ fontFamily: 'Vazir' }}> منوی غذاها </p>
//           <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }} />
//         </h1>

//         {/* Category Tabs */}
//         <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               style={{
//                 backgroundColor: selectedCategory === cat ? 'hsl(52, 92%, 38%)' : '#333',
//                 color: selectedCategory === cat ? '#000' : '#fff',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '0.5rem',
//                 cursor: 'pointer',
//                 fontFamily: 'Vazir',
//               }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Desktop Layout */}
//         <div className={styles.menuLayout}>
//           <div className={styles.cartSection}>
//             <ShoppingCart cart={cart} />
//           </div>

//           <div className={styles.foodSection}>
//             {filteredItems.length > 0 ? (
//               filteredItems.map((item, index) => (
//                 <div
//                   key={item.id + index}
//                   className={styles.foodWrapper}
//                   style={{ gridColumn: index % 2 === 0 ? '2' : '3', border: '1px hsl(0, 0%, 29%) solid' }}
//                 >
//                   <Food {...item} onAddToCart={() => handleAddToCart(item)} />
//                 </div>
//               ))
//             ) : (
//               <p style={{ color: '#fff', gridColumn: '2 / span 2' }}>
//                 موردی در این دسته‌بندی وجود ندارد.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Mobile Layout */}
//         <div className={styles.mobileLayout}>
//           {activeTab === 'menu' ? (
//             <div className={styles.foodSection}>
//               {filteredItems.length > 0 ? (
//                 filteredItems.map((item, index) => (
//                   <div
//                     key={item.id + index}
//                     className={styles.foodWrapper}
//                     style={{ border: '1px hsl(0, 0%, 29%) solid' }}
//                   >
//                     <Food {...item} onAddToCart={() => handleAddToCart(item)} />
//                   </div>
//                 ))
//               ) : (
//                 <p style={{ color: '#fff' }}>موردی در این دسته‌بندی وجود ندارد.</p>
//               )}
//             </div>
//           ) : (
//             <div className={styles.cartSection}>
//               <ShoppingCart cart={cart} />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ✅ Mobile Footer Outside Container for Full Width */}
//       <footer className={styles.mobileFooter}>
//         <button
//           onClick={() => setActiveTab('cart')}
//           className={activeTab === 'cart' ? styles.activeTab : ''}
//         >
//           <img
//             src="/img/cart.png"
//             alt="menu"
//             style={{ width: '25px', height: '25px', filter: 'brightness(0) invert(1)' }}
//           />
// 			 <h1 style={{fontSize : "1rem", fontFamily : "Vazir"}}>مشاهده سفارش</h1>
//         </button>
//         <button
//           onClick={() => setActiveTab('menu')}
//           className={activeTab === 'menu' ? styles.activeTab : ''}
//         >
//           <img
//             src="/img/list.png"
//             alt="cart"
//             style={{ width: '25px', height: '25px', filter: 'brightness(0) invert(1)' }}
//           />
// 			 <h1 style={{fontSize : "1rem", fontFamily : "Vazir"}}>منو</h1>
//         </button>
//       </footer>
//     </>
//   );
// }








'use client';

import styles from '@/styles/menu.module.css';
import { useState } from 'react';
import Food from './food';
import ShoppingCart from './shoppingCart';
import menuItems from '@/pages/data/menuItems';

const categories = ['پیش غذا', 'نوشیدنی', 'غذای اصلی'];

export default function Menu() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('پیش غذا');
  const [activeTab, setActiveTab] = useState('menu'); // for mobile

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((x) => x.id === item.id);
      if (existing) {
        return prevCart.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <>
      <div className={styles.menuContainer} id="menu">
        <h1 className={styles.title}>
          <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }} />
          <p style={{ fontFamily: 'Vazir' }}> منوی غذاها </p>
          <span style={{ flex: 1, height: '1px', backgroundColor: 'white' }} />
        </h1>

        {/* Category Tabs (only show when in menu tab) */}
        {activeTab === 'menu' && (
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor:
                    selectedCategory === cat ? 'hsl(52, 92%, 38%)' : '#333',
                  color: selectedCategory === cat ? '#000' : '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontFamily: 'Vazir',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Desktop Layout */}
        <div className={styles.menuLayout}>
          <div className={styles.cartSection}>
            <ShoppingCart cart={cart} />
          </div>

          <div className={styles.foodSection}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={item.id + index}
                  className={styles.foodWrapper}
                  style={{
                    gridColumn: index % 2 === 0 ? '2' : '3',
                    border: '1px hsl(0, 0%, 29%) solid',
                  }}
                >
                  <Food {...item} onAddToCart={() => handleAddToCart(item)} />
                </div>
              ))
            ) : (
              <p style={{ color: '#fff', gridColumn: '2 / span 2' }}>
                موردی در این دسته‌بندی وجود ندارد.
              </p>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className={styles.mobileLayout}>
          {activeTab === 'menu' ? (
            <div className={styles.foodSection}>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div
                    key={item.id + index}
                    className={styles.foodWrapper}
                    style={{ border: '1px hsl(0, 0%, 29%) solid' }}
                  >
                    <Food {...item} onAddToCart={() => handleAddToCart(item)} />
                  </div>
                ))
              ) : (
                <p style={{ color: '#fff' }}>موردی در این دسته‌بندی وجود ندارد.</p>
              )}
            </div>
          ) : (
            <div className={styles.cartSection}>
              <ShoppingCart cart={cart} />
            </div>
          )}
        </div>
      </div>

      {/* ✅ Mobile Footer Outside Container for Full Width */}
      <footer className={styles.mobileFooter}>
        <button
          onClick={() => setActiveTab('cart')}
          className={activeTab === 'cart' ? styles.activeTab : ''}
        >
          <img
            src="/img/cart.png"
            alt="menu"
            style={{ width: '25px', height: '25px', filter: 'brightness(0) invert(1)' }}
          />
          <h1 style={{ fontSize: '1rem', fontFamily: 'Vazir' }}>مشاهده سفارش</h1>
        </button>
        <button
          onClick={() => setActiveTab('menu')}
          className={activeTab === 'menu' ? styles.activeTab : ''}
        >
          <img
            src="/img/list.png"
            alt="cart"
            style={{ width: '25px', height: '25px', filter: 'brightness(0) invert(1)' }}
          />
          <h1 style={{ fontSize: '1rem', fontFamily: 'Vazir' }}>منو</h1>
        </button>
      </footer>
    </>
  );
}
