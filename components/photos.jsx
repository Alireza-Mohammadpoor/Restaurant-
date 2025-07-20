// import React, { useEffect, useState } from "react";

// const images = ["/img/plc/11.jpeg",
// 	 "/img/plc/22.jpg",
// 	"/img/plc/33.jpg",
// 	"/img/plc/55.jpg",
// 	"/img/plc/44.jpg",
// 	"/img/plc/66.jpg"
// 	];



// export default function Photos() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000); // Change image every 2 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div style={{alignItems : "center", textAlign : "center", justifyContent : "center"}}>
//       <img src={images[currentIndex]} alt="img" style={{ width: "250px", height: "150px", border : "1px solid hsl(0, 0%, 80%)", borderRadius : "9px" }} />
//     </div>
//   );
// }










import React, { useEffect, useState } from "react";

const images = [
  "/img/plc/11.jpeg",
  "/img/plc/22.jpg",
  "/img/plc/33.jpg",
  "/img/plc/55.jpg",
  "/img/plc/44.jpg",
  "/img/plc/66.jpg"
];

export default function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={images[currentIndex]}
        alt="img"
        className="responsive-image"
      />
      <style jsx>{`
        .responsive-image {
          width: 500px;
          max-width: 500px;
          height: 300px;
          border: 1px solid hsl(0, 0%, 80%);
          border-radius: 9px;
          transition: all 0.3s ease-in-out;
        }

        @media (max-width: 768px) {
          .responsive-image {
            width: 250px;
				height : 150px;
          }
        }

        @media (max-width: 480px) {
          .responsive-image {
             width: 250px;
				height : 150px;
          }
        }
      `}</style>
    </div>
  );
}
