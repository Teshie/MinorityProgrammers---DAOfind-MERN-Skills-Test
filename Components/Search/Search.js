import { SearchIcon } from "@heroicons/react/solid";
const Search = () => {
  return (
    <div className="flex lg:max-w-3xl shadow-md  mt-10 px-10 md:mx-[350px] items-center">
      <SearchIcon
        className=" 
         bg-red-400 h-8
         text-white
         rounded-full p-2 
         md:mx-2
        
         "
      />
      <input
        className=" outline-none
         border-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
