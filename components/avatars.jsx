// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange, deepPurple } from '@mui/material/colors';

// export default function LetterAvatars() {
//   return (
//     <div
//       style={{
//         padding: "7px 9px",
//         borderRadius: "16px",
//         background: "rgba(255, 255, 255, 0.1)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(20px)",
//         boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
//         border: "1px solid rgba(255, 255, 255, 0.3)",
//         maxWidth: "fit-content",
//         margin: "2rem auto"
//       }}
//     >
// 		 <h1 style={{fontSize : "0.75rem", justifyContent : "center", textAlign : "center", alignItems : "center"}}> مشتریان خوشحال ما</h1>
// 			<Stack direction="row" spacing={-1}>
// 				<Avatar sx={{ bgcolor: deepOrange[500], width: 28, height: 28, fontSize: "0.75rem" }}>H</Avatar>
// 				<Avatar sx={{ bgcolor: deepPurple[500], width: 28, height: 28, fontSize: "0.75rem" }}>N</Avatar>
// 				<Avatar sx={{ bgcolor: '#4caf50', width: 28, height: 28, fontSize: "0.75rem" }}>O</Avatar>
// 				<Avatar sx={{ bgcolor: '#4caf50', width: 28, height: 28, fontSize: "0.75rem" }}>O</Avatar>
// 				<Avatar sx={{ bgcolor: '#4caf50', width: 28, height: 28, fontSize: "0.75rem" }}>O</Avatar>
// 			</Stack>

//     </div>
	 
//   );
// }











import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function LetterAvatars() {
  return (
    <div
      style={{
        position: "relative", // Make the container the positioning context
        padding: "7px 9px",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        maxWidth: "fit-content",
        margin: "2rem auto"
      }}
    >
      {/* Floating image */}
      <img
        src="/img/support.png"
        alt="support"
        style={{
          position: "absolute",
          top: "-15px",     // Move upward outside the box
          right: "-15px",   // Move right outside the box
          width: "20px",    // Adjust size as needed
          height: "20px",
          zIndex: 2,
			 border : "1px solid white",
			 borderRadius : "50px",
			 padding : "5px",
			 opacity : "0.8",
			 backgroundColor : ""
        }}
      />

      <h1 style={{ fontSize: "0.75rem", textAlign: "center" }}>
        مشتریان خوشحال ما
      </h1>

      <Stack direction="row" spacing={-1}>
        <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30, fontSize: "0.75rem", border : "1px solid white" }} alt="Cindy Baker" src="/img/p/JoyceN.png">H</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500], width: 30, height: 30, fontSize: "0.75rem" , border : "1px solid white"}} alt="Cindy Baker" src="/img/p/PowersL.png">N</Avatar>
        <Avatar sx={{ bgcolor: '#4caf50', width: 30, height: 30, fontSize: "0.75rem" , border : "1px solid white"}} alt="Cindy Baker" src="/img/p/TiddA.png">O</Avatar>
        <Avatar sx={{ bgcolor: '#4caf50', width: 30, height: 30, fontSize: "0.75rem" , border : "1px solid white"}} alt="Cindy Baker" src="/img/p/WellingtonL.png">O</Avatar>
        <Avatar sx={{ width: 30, height: 30, fontSize: "0.75rem", border : "1px solid white" }} alt="Cindy Baker" src="/img/p/HunterS.png">O</Avatar>
      </Stack>
    </div>
  );
}
