import Image from "next/image";
import { HomeIcon, AddIcon, LearnIcon } from "@heroicons/react/solid";
import { doaList } from "../Constants/Constants";
import { useState } from "react";
const Header = () => {
  const [dao, setDao] = useState([]);
  const addDoa = (e) => {
    e.preventDefault();
    const newDao = [
      {
        Logo: "https://pbs.twimg.com/profile_images/1242184851152928769/wG2eTAfD_normal.jpg",
        Name: "Uniswap",
        Category: "Protocol",
        Followers: "562397",
        AUM: "3,297,518,399",
        Founded: "April 2018",
        Website: "https://uniswap.org/",
        Twitter: "https://twitter.com/Uniswap",
        "Twitter handle": "Uniswap",
      },
    ];
    const newDaoList = [...doaList, newDao];
    setDao(newDaoList);
    doaList.push(newDaoList);
    console.log(doaList);
  };
  return (
    <div className="md:px-10 justify-evenly sticky items-center top-0 z-50  grid grid-cols-2 p-5 bg-white shadow-md">
      <div className="relative flex items-center h-10 cursor-pointer my-auto z-100 mt-2">
        <Image
          onClick={addDoa}
          src="https://daolist.fyi/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fpe-ple%2Fimage%2Fupload%2Fv1625804406%2Fdao-logo_rv5lis.svg&w=256&q=75"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className="lg:flex justify-evenly hidden ">
        <p className="text-purple-500 my-3  hover:shadow-xl bg-white px-10 font-bold py-4 shadow-md rounded-full active:scale-90 transition duration-150 cursor-pointer">
          Home
        </p>
        <p className="text-purple-500 my-3 hover:shadow-xl bg-white px-10 font-bold py-4 shadow-md rounded-full active:scale-90 transition duration-150 cursor-pointer">
          Add
        </p>
        <p className="text-purple-500 my-3 hover:shadow-xl bg-white px-10 font-bold py-4 shadow-md rounded-full active:scale-90 transition duration-150 cursor-pointer">
          Learn
        </p>
        <p className="text-purple-500 my-3 hover:shadow-xl bg-white px-10 font-bold py-4 shadow-md rounded-full active:scale-90 transition duration-150 cursor-pointer">
          Sponsor
        </p>
      </div>
    </div>
  );
};

export default Header;
