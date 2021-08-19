import SearchIcon from "@material-ui/icons/Search";
import TwitterIcon from "@material-ui/icons/Twitter";
import { doaList, test } from "../Constants/Constants";
import { GlobeAltIcon } from "@heroicons/react/solid";

const Hero = ({
  img,
  name,
  catagory,
  AUM,
  Followers,
  Founded,
  Website,
  Twitter,
}) => {
  return (
    <div className="flex flex-auto lg:max-w-4xl   md:mx-[370px] mt-10 px-4  transition duration-250 ease-out hover:rounded-md hover:bg-yellow-100 hover:scale-105 items-center  space-x-4 ">
      <div className=" flex  flex-auto items-center space-x-4">
        <img src={img} className="rounded-lg h-10 w-10" />
        <h2>{name}</h2>
      </div>
      <h3 className="text-gray-400 hidden sm:inline md:inline lg:inline">
        {catagory}
      </h3>
      <h2 className="hidden md:inline sm:inline  lg:inline">
        {AUM != 0 ? AUM : "N/A"}
      </h2>
      <h2 className="hidden md:inline  sm:inline lg:inline">{Followers}</h2>
      <h2 className="hidden md:inline sm:inline lg:inline">{Founded}</h2>
      <a target="_blank" href={Website}>
        <GlobeAltIcon className="h-6 hover:text-yellow-600 cursor-pointer" />
      </a>
      <a target="_blank" href={Twitter}>
        <TwitterIcon className="h-6 hover:text-yellow-600 cursor-pointer" />
      </a>
      <h2 className="hidden md:inline sm:inline lg:inline">`</h2>
    </div>
  );
};

export default Hero;
