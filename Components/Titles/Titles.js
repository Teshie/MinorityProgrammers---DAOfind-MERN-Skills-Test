const Titles = () => {
  return (
    <div className="flex shadow-md lg:max-w-3xl mt-10 px-10 md:mx-[350px] items-center text-yellow-500  space-x-4 ">
      <h2 className="flex-1 ">Name</h2>
      <h3 className="hidden lg:inline sm:inline">CATEGORY</h3>
      <h2 className="hidden lg:inline sm:inline">AUM(USD)</h2>
      <div className="grid">
        <h2 className="hidden lg:inline sm:inline">TWITTER</h2>
        <h2 className="hidden lg:inline sm:inline">FOLLOWERS</h2>
      </div>
      <div className="">
        <h2 className="hidden lg:inline sm:inline">FOUNDED </h2>
        <h2 className="hidden lg:inline sm:inline">DATE</h2>
      </div>
    </div>
  );
};

export default Titles;
