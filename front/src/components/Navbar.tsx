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
            <a href="./home" className="block w-full py-5">
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

          {/* NAV ITEMS - LOGGED IN */}
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

          
          {/* NAV ITEMS - LOGGED OUT */}
          <div className="flex w-full items-center justify-end px-4">
            <nav className="flex space-x-8 items-center">
              
              
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
