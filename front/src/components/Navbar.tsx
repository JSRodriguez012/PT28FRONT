// "use client";

// import { useAuth } from "@/contexts/AuthContext";
// import { NavItems } from "@/utils/NavItems";
// import { PATHROUTES } from "@/utils/PathRoutes";
// import Link from "next/link";
// import React, { useState } from "react";

  

// const Navbar = () => {

//   const { dataUser } = useAuth();

  
//   const [open, setOpen] = useState(false);

//   return (

//  <header className={`flex w-full items-center bg-SecondaryBlueOfColorPalette dark:bg-dark`}>
//       <div className="container">
//         <div className="relative -mx-4 flex items-center justify-between">
//           <div className="w-60 max-w-full px-4">
//             <a href="/#" className="block w-full py-5">
//               <img
//                 src="https://www.edibon.com/img/cms/Logo_Edibon.jpg"
//                 alt="logo"
//                 className="dark:hidden"
//               />
//               <img
//                 src="https://www.edibon.com/img/cms/Logo_Edibon.jpg"
//                 alt="logo"
//                 className="hidden dark:block"
//               />
//             </a>
//           </div>
//           <div className="flex w-full items-center justify-between px-4">
//             <div>
//               <button
//                 onClick={() => setOpen(!open)}
//                 id="navbarToggler"
//                 className={` ${
//                   open && "navbarTogglerActive"
//                 } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
//               >
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//               </button>
//               <nav
//                 id="navbarCollapse"
//                 className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
//                   !open && "hidden"
//                 } `}
//               >
//               </nav>
//             </div>
//             <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
//               <section className="flex-1">
//               <div
//                  className="flex h-full w-full justify-around space-x-7"
//               >
//                 {NavItems.map((navigationItem) => {
//                   return (
//                     <Link key={navigationItem.id} href={navigationItem.route}>
//                     {navigationItem.nameToRender}
//                   </Link>
//                 );
//               })}
//               {dataUser && <p>{dataUser.user.name}</p>}
//               </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


"use client";

import { useAuth } from "@/contexts/AuthContext";
import { NavItems } from "@/utils/NavItems";
import Link from "next/link";

const Navbar = () => {
  const { dataUser } = useAuth();

  return (
    <header className="flex w-full items-center bg-SecondaryBlueOfColorPalette dark:bg-dark">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="w-60 max-w-full px-4">
            <a href="/" className="block w-full py-5">
              <img
                src="https://www.edibon.com/img/cms/Logo_Edibon.jpg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="https://www.edibon.com/img/cms/Logo_Edibon.jpg"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>

          {/* NAV ITEMS */}
          <div className="flex w-full items-center justify-end px-4">
            <nav className="flex space-x-8 items-center">
              {NavItems.map((navigationItem) => (
                <Link key={navigationItem.id} href={navigationItem.route}>
                  {navigationItem.nameToRender}
                </Link>
              ))}

              {/* USUARIO LOGUEADO */}
              {dataUser && (
                <p className="font-semibold text-white">
                  {dataUser.user.name}
                </p>
              )}
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
