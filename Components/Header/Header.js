import Image from "next/image";
import { HomeIcon, AddIcon, LearnIcon } from "@heroicons/react/solid";
const Header = () => {
  return (
    <div className="md:px-10 sticky items-center top-0 z-50  grid grid-cols-2 p-5 bg-white shadow-md">
      <div className="relative flex items-center h-10 cursor-pointer my-auto z-100 mt-2">
        <Image
          src="https://daolist.fyi/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fpe-ple%2Fimage%2Fupload%2Fv1625804406%2Fdao-logo_rv5lis.svg&w=256&q=75"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Header;
