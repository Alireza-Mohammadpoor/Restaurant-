// 'use client';

// // import useCartStore from '@/store/useCart';
// import useCartStore from '@/store/useCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';


// export default function ShoppingCart() {
//   const { items, increment, decrement, removeItem } = useCartStore();

//   if (items.length === 0) {
//     // Return nothing if cart is empty
//     return null;
//   }

//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         bottom: '30px',
//         right: '30px',
//         background: '#222',
//         color: 'white',
//         padding: '1rem',
//         borderRadius: '10px',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
//         minWidth: '280px',
//         fontFamily: 'Vazir',
//         zIndex: 1000,
//       }}
//     >
//       <h3 style={{ marginBottom: '0.5rem' }}>🛒 سبد خرید</h3>
//       <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
//         {items.map((item) => (
//           <li
//             key={item.id}
//             style={{
//               marginBottom: '0.5rem',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               gap: '0.5rem',
//             }}
//           >
//             <div style={{ flex: 1 }}>
//               {item.name} <br />
//               <small>{(item.price * item.quantity).toLocaleString()} تومان</small>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
//               <button
//                 onClick={() => decrement(item.id)}
//                 style={{
//                   background: 'transparent',
//                   border: '1px solid white',
//                   borderRadius: '5px',
//                   padding: '2px 6px',
//                   color: 'white',
//                   cursor: 'pointer',
//                 }}
//               >
//                 <FontAwesomeIcon icon={faMinus} />
//               </button>
//               <span>{item.quantity}</span>
//               <button
//                 onClick={() => increment(item.id)}
//                 style={{
//                   background: 'transparent',
//                   border: '1px solid white',
//                   borderRadius: '5px',
//                   padding: '2px 6px',
//                   color: 'white',
//                   cursor: 'pointer',
//                 }}
//               >
//                 <FontAwesomeIcon icon={faPlus} />
//               </button>
//               <button
//                 onClick={() => removeItem(item.id)}
//                 style={{
//                   background: 'transparent',
//                   border: 'none',
//                   color: '#f44336',
//                   cursor: 'pointer',
//                   marginLeft: '5px',
//                 }}
//               >
//                 <FontAwesomeIcon icon={faTrash} />
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <hr style={{ borderColor: '#555', margin: '1rem 0' }} />
//       <strong>جمع کل: {total.toLocaleString()} تومان</strong>
//     </div>
//   );
// }















// 'use client';

// import useCartStore from '@/store/useCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

// export default function ShoppingCart() {
//   const { items, increment, decrement, removeItem } = useCartStore();

//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div
//       style={{
//         background: '#222',
//         color: 'white',
//         padding: '1.5rem',
//         borderRadius: '12px',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
//         minWidth: '320px',
//         fontFamily: 'Vazir',
//         zIndex: 1000,
//         height: '100%',
//         position: 'sticky',
//         top: '2rem',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}
//     >
//       <div>
//         <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>🛒 سبد خرید</h3>

//         {items.length === 0 ? (
//           <p style={{ color: '#aaa', textAlign: 'center', marginTop: '2rem' }}>
//             سبد خرید شما خالی است.
//           </p>
//         ) : (
//           <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
//             {items.map((item) => (
//               <li
//                 key={item.id}
//                 style={{
//                   marginBottom: '1rem',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '0.5rem',
//                 }}
//               >
//                 {/* Food Image */}
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{
//                     width: '50px',
//                     height: '50px',
//                     borderRadius: '8px',
//                     objectFit: 'cover',
//                   }}
//                 />

//                 {/* Name and price */}
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>{item.name}</div>
//                   <small style={{ color: '#ccc' }}>
//                     {item.price.toLocaleString()} × {item.quantity} ={' '}
//                     {(item.price * item.quantity).toLocaleString()} تومان
//                   </small>
//                 </div>

//                 {/* Controls */}
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
//                   <button
//                     onClick={() => decrement(item.id)}
//                     style={buttonStyle}
//                   >
//                     <FontAwesomeIcon icon={faMinus} />
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() => increment(item.id)}
//                     style={buttonStyle}
//                   >
//                     <FontAwesomeIcon icon={faPlus} />
//                   </button>
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     style={trashButtonStyle}
//                   >
//                     <FontAwesomeIcon icon={faTrash} />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Total */}
//       <div style={{ marginTop: '2rem', borderTop: '1px solid #444', paddingTop: '1rem' }}>
//         <strong>جمع کل: {total.toLocaleString()} تومان</strong>
//       </div>
//     </div>
//   );
// }

// // Reusable button styles
// const buttonStyle = {
//   background: 'transparent',
//   border: '1px solid white',
//   borderRadius: '5px',
//   padding: '2px 6px',
//   color: 'white',
//   cursor: 'pointer',
// };

// const trashButtonStyle = {
//   background: 'transparent',
//   border: 'none',
//   color: '#f44336',
//   cursor: 'pointer',
//   marginLeft: '5px',
// };














// 'use client';

// import useCartStore from '@/store/useCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMinus, faPlus, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// export default function ShoppingCart() {
//   const { items, increment, decrement, removeItem } = useCartStore();

//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div
//       style={{
//       //   position: 'fixed',
//         bottom: '30px',
//         right: '30px',
//         background: '#1e1e1e',
//         color: '#fff',
//         padding: '1.5rem',
//         borderRadius: '20px',
//         boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
//         minWidth: '360px',
//         maxHeight: '80vh',
//         overflowY: 'auto',
//         fontFamily: 'Vazir',
//         zIndex: 1000,
//       }}
//     >
//       {/* Header */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//         <FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: '0.5rem', color: 'hsl(52, 92%, 43%)' }} />
//         <h3 style={{ fontSize: '1.5rem', margin: 0 }}>سبد خرید شما</h3>
//       </div>

//       {/* Empty Cart */}
//       {items.length === 0 ? (
//         <p style={{ color: '#aaa', textAlign: 'center', padding: '2rem 0' }}>
//           🧺 هنوز هیچ آیتمی به سبد خرید اضافه نکردید!<br />
//           خوشمزه‌ها منتظر شما هستن 😋
//         </p>
//       ) : (
//         <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
//           {items.map((item) => (
//             <li
//               key={item.id}
//               style={{
//                 marginBottom: '1rem',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.75rem',
//                 background: '#2c2c2c',
//                 padding: '0.5rem',
//                 borderRadius: '10px',
//               }}
//             >
//               {/* Image */}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{
//                   width: '60px',
//                   height: '60px',
//                   borderRadius: '10px',
//                   objectFit: 'cover',
//                 }}
//               />

//               {/* Name and price */}
//               <div style={{ flex: 1 }}>
//                 <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{item.name}</div>
//                 <div style={{ fontSize: '0.85rem', color: '#ccc' }}>
//                   {item.price.toLocaleString()} × {item.quantity} ={' '}
//                   {(item.price * item.quantity).toLocaleString()} تومان
//                 </div>
//               </div>

//               {/* Controls */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
//                 <button onClick={() => decrement(item.id)} style={iconButton}>
//                   <FontAwesomeIcon icon={faMinus} />
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => increment(item.id)} style={iconButton}>
//                   <FontAwesomeIcon icon={faPlus} />
//                 </button>
//                 <button onClick={() => removeItem(item.id)} style={trashButton}>
//                   <FontAwesomeIcon icon={faTrash} />
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Total */}
//       <div
//         style={{
//           marginTop: '1.5rem',
//           borderTop: '1px solid #444',
//           paddingTop: '1rem',
//           textAlign: 'center',
//         }}
//       >
//         <strong style={{ fontSize: '1.2rem', color: 'white' }}>
//           💰 جمع کل : {total.toLocaleString()} تومان
//         </strong>
//         <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#aaa' }}>
//           از خرید شما سپاسگزاریم! ❤️
//         </p>
//       </div>
//     </div>
//   );
// }

// // Button styles
// const iconButton = {
//   background: '#333',
//   border: 'none',
//   borderRadius: '6px',
//   padding: '4px 6px',
//   color: '#fff',
//   cursor: 'pointer',
//   transition: 'background 0.2s',
// };

// const trashButton = {
//   background: '#f44336',
//   border: 'none',
//   borderRadius: '6px',
//   padding: '4px 6px',
//   color: 'white',
//   cursor: 'pointer',
//   marginLeft: '4px',
// };












// 'use client';

// import useCartStore from '@/store/useCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMinus, faPlus, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// export default function ShoppingCart() {
//   const { items, increment, decrement, removeItem } = useCartStore();
//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <>
//       <div className="shopping-cart">
//         {/* Header */}
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//           <FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: '0.5rem', color: 'hsl(52, 92%, 43%)' }} />
//           <h3 style={{ fontSize: '1.5rem', margin: 0 }}>سبد خرید شما</h3>
//         </div>

//         {/* Empty Cart */}
//         {items.length === 0 ? (
//           <p style={{ color: '#aaa', textAlign: 'center', padding: '2rem 0' }}>
//             🧺 هنوز هیچ آیتمی به سبد خرید اضافه نکردید!<br />
//             خوشمزه‌ها منتظر شما هستن 😋
//           </p>
//         ) : (
//           <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
//             {items.map((item) => (
//               <li
//                 key={item.id}
//                 style={{
//                   marginBottom: '1rem',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '0.75rem',
//                   background: '#2c2c2c',
//                   padding: '0.5rem',
//                   borderRadius: '10px',
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{
//                     width: '60px',
//                     height: '60px',
//                     borderRadius: '10px',
//                     objectFit: 'cover',
//                   }}
//                 />

//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{item.name}</div>
//                   <div style={{ fontSize: '0.85rem', color: '#ccc' }}>
//                     {item.price.toLocaleString()} × {item.quantity} ={' '}
//                     {(item.price * item.quantity).toLocaleString()} تومان
//                   </div>
//                 </div>

//                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
//                   <button onClick={() => decrement(item.id)} style={iconButton}>
//                     <FontAwesomeIcon icon={faMinus} />
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => increment(item.id)} style={iconButton}>
//                     <FontAwesomeIcon icon={faPlus} />
//                   </button>
//                   <button onClick={() => removeItem(item.id)} style={trashButton}>
//                     <FontAwesomeIcon icon={faTrash} />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Total */}
//         <div
//           style={{
//             marginTop: '1.5rem',
//             borderTop: '1px solid #444',
//             paddingTop: '1rem',
//             textAlign: 'center',
//           }}
//         >
//           <strong style={{ fontSize: '1.2rem', color: 'white' }}>
//             💰 جمع کل : {total.toLocaleString()} تومان
//           </strong>
//           <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#aaa' }}>
//             از خرید شما سپاسگزاریم! ❤️
//           </p>
//         </div>
//       </div>

//       {/* Responsive Styling */}
//       <style jsx>{`
//         .shopping-cart {
//          //  position: fixed;
//           bottom: 30px;
//           right: 30px;
//           background: #1e1e1e;
//           color: #fff;
//           padding: 1.5rem;
//           border-radius: 20px;
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
//           min-width: 360px;
//           max-height: 80vh;
//           overflow-y: auto;
//           font-family: Vazir;
//           z-index: 1000;
//         }

//         @media (max-width: 768px) {
//           .shopping-cart {
//             left: 50%;
//             right: auto;
//             transform: translateX(-50%);
//             min-width: 90vw;
//             max-width: 95vw;
// 				justifyContent : "center";
				
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// // Button styles
// const iconButton = {
//   background: '#333',
//   border: 'none',
//   borderRadius: '6px',
//   padding: '4px 6px',
//   color: '#fff',
//   cursor: 'pointer',
//   transition: 'background 0.2s',
// };

// const trashButton = {
//   background: '#f44336',
//   border: 'none',
//   borderRadius: '6px',
//   padding: '4px 6px',
//   color: 'white',
//   cursor: 'pointer',
//   marginLeft: '4px',
// };












'use client';

import useCartStore from '@/store/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function ShoppingCart() {
  const { items, increment, decrement, removeItem } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="shopping-cart">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: '0.5rem', color: 'hsl(52, 92%, 43%)' }} />
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>سبد خرید شما</h3>
        </div>

        {/* Empty Cart */}
        {items.length === 0 ? (
          <p style={{ color: '#aaa', textAlign: 'center', padding: '2rem 0' }}>
            🧺 هنوز هیچ آیتمی به سبد خرید اضافه نکردید!<br />
            
          </p>
        ) : (
          <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: '#2c2c2c',
                  padding: '0.5rem',
                  borderRadius: '10px',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{item.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#ccc' }}>
                    {item.price.toLocaleString()} × {item.quantity} ={' '}
                    {(item.price * item.quantity).toLocaleString()} تومان
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <button onClick={() => decrement(item.id)} style={iconButton}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)} style={iconButton}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button onClick={() => removeItem(item.id)} style={trashButton}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Total */}
        <div
          style={{
            marginTop: '1.5rem',
            borderTop: '1px solid #444',
            paddingTop: '1rem',
            textAlign: 'center',
          }}
        >
          <strong style={{ fontSize: '1.2rem', color: 'white' }}>
            💰 جمع کل : {total.toLocaleString()} تومان
          </strong>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#aaa' }}>
            از خرید شما سپاسگزاریم! ❤️
          </p>
        </div>
      </div>

      {/* Responsive Styling */}
      <style jsx>{`
			.shopping-cart {
				background: #1e1e1e;
				color: #fff;
				padding: 1.5rem;
				border-radius: 20px;
				box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
				width: 100%;
				max-width: 480px;
				margin: 2rem auto; /* centers the cart */
				font-family: Vazir;
			}

			@media (max-width: 768px) {
				.shopping-cart {
					width: 90%;
					margin: 1rem auto;
				}
			}
			`}</style>

				</>
			);
			}

// Button styles
const iconButton = {
  background: '#333',
  border: 'none',
  borderRadius: '6px',
  padding: '4px 6px',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

const trashButton = {
  background: '#f44336',
  border: 'none',
  borderRadius: '6px',
  padding: '4px 6px',
  color: 'white',
  cursor: 'pointer',
  marginLeft: '4px',
};







