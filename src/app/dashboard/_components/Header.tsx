import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className=" flex bg-white justify-between p-5 shadow-sm border-b-2 items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md mx-w-lg bg-white">
        <Search />
        <input
          type="text"
          placeholder="Search....."
          className="outline-none "
        />
      </div>
      <div>
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">
          🔥 Join Membership just for $9.99 per month!
        </h2>
      </div>
    </div>
  );
};

export default Header;
