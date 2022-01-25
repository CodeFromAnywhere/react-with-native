import React from "react";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { setDarkMode, useDarkMode, useIsDark } from "../context/store";

const DarkModeToggle = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className || ""}`}>
      <label className="flex items-center cursor-pointer"></label>
    </div>
  );
};

// const DarkModeToggle = ({ className }: { className?: string }) => {
//   const isDark = useIsDark();
//   const dispatch = useDispatch();
//   const toggleDark = () => {
//     const newMode = {
//       mode: (isDark ? "light" : "dark") as "light" | "dark",
//       updatedAt: Date.now(),
//     };
//     setDarkMode(dispatch, newMode);
//   };
// return (
//     <div className={`flex items-center justify-center ${className || ""}`}>
//       <label className="flex items-center cursor-pointer">
//         <div className="relative">
//           <input
//             id="toggle"
//             type="checkbox"
//             className="sr-only"
//             checked={isDark}
//             onChange={toggleDark}
//           />
//           <div
//             className={`block h-8 rounded-full w-14 transition duration-700 ease-in-out border-2 border-gray-300
//             ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
//           >
//             <div className="flex justify-between m-1.5">
//               <Image src="/moon.svg" width={15} height={15} alt="dark" />
//               <Image src="/sun.svg" width={15} height={15} alt="light" />
//             </div>
//           </div>
//           <div
//             className={`absolute w-4 h-4 transition duration-700 ease-in-out rounded-full dot left-2 top-2
//             ${isDark ? "bg-gray-100" : "bg-gray-900"}`}
//           ></div>
//         </div>
//       </label>
//     </div>
//   );
// };

export default DarkModeToggle;
