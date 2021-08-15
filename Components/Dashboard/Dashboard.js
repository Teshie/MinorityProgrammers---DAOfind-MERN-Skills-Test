import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Dashboard = () => {
  return (
    <div>
      <section className="pt-6 max-w-3xl mx-auto px-8 grid grid-cols-1 lg:flex sm:grid-cols-2">
        <div className="w-[400px] h-[120px]  p-5 shadow-md border-2 rounded-sm">
          <p>Number of DAOs</p>
          <div className="flex">
            <p className="flex-1 text-lg font-bold text-yellow-600">111</p>
            <div className="flex rounded-full bg-green-100 items-center ">
              <ArrowUpwardIcon className="text-green-400  text-xs" />
              <p className="mr-4">27</p>
            </div>
          </div>
          <p>from 84</p>
        </div>
        <div className="w-[400px] h-[120px]  p-5 shadow-md border-2 rounded-sm">
          <p>Number of DAOs</p>
          <div className="flex">
            <p className="flex-1 text-lg font-bold text-yellow-600">111</p>
            <div className="flex rounded-full bg-green-100 items-center ">
              <ArrowUpwardIcon className="text-green-400  text-xs" />
              <p className="mr-4">27bhdnhfgnhfnjg</p>
            </div>
          </div>
          <p>from 84</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
