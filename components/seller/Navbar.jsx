import React from "react";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <div className="flex items-center px-4 md:px-8 py-3 justify-between border-b">
      <h1
        onClick={() => router.push("/")}
        className="cursor-pointer w-28 md:w-32 text-2xl text-black text-nowrap"
      >
        <b className="text-orange-500">F</b>ast Shop
      </h1>
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
