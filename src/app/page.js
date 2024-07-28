// pages/index.js
import Navigation from "./components/Navigation";

const songs = [
  "We Are x Hiroshi Kitadani (One Piece)",
  "Departure x Masatoshi Ono (HxH)",
  "Again x You (FMA:Brotherhood)",
  "Tank x Yoko Kanno and Seatbelts (Cowboy Bebop)",
  "Unravel x TK from Ling Toshite Sigure (Tokyo Ghoul)",
  "Gurenge x LiSA (Demon Slayer)",
  "The World x VAP Official (Death Note)",
  "Guren no Yumiya x Linked Horizon (Attack on Titan)",
];

// const Home = () => {
//   return (
//     <div className="bg-babyblue min-h-screen">
//       <Navigation />
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-4 text-brown">Anime Openings</h1>
//         <ul className="list-disc pl-6">
//           {songs.map((song, index) => (
//             <li key={index} className="text-lg text-brown mb-2">
//               {song}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

export default Home;
