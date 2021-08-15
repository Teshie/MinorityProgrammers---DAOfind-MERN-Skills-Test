import SearchIcon from "@material-ui/icons/Search";
import TwitterIcon from "@material-ui/icons/Twitter";

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
    <div className="flex flex-auto max-w-3xl mx-[370px] mt-10 px-4   cursor-pointer transition duration-200 ease-out hover:rounded-md hover:bgy hover:scale-105 items-center  space-x-4 ">
      <div className=" flex  flex-auto items-center space-x-4">
        <img src={img} className="rounded-lg h-10 w-10" />
        <h2>{name}</h2>
      </div>
      <h3 className="text-gray-400">{catagory}</h3>
      <h2>{AUM}</h2>
      <h2>{Followers}</h2>
      <h2>{Founded}</h2>
      <a target="_blank" href={Website}>
        <GlobeAltIcon className="h-6 hover:text-yellow-600" />
      </a>
      <a target="_blank" href={Twitter}>
        <TwitterIcon className="h-6 hover:text-yellow-600" />
      </a>
    </div>
  );
};

export default Hero;
