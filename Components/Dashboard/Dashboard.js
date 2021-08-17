import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { doaList } from "../Constants/Constants";
const Dashboard = () => {
  const totalAum = doaList.reduce((total, aum) => {
    const value = parseInt(aum.AUM); //change string value to integer
    return total + value;
  }, 0);
  const tot = totalAum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const res = (tot / 1000000).toFixed(1) + "M";
  console.log(tot);
  const len = doaList.length;
  return (
    <div>
      <section className="pt-6 max-w-3xl mx-auto px-8 grid grid-cols-1 lg:flex sm:grid-cols-2">
        <div className="md:w-[400px] h-[120px]  p-5 shadow-md border-2 rounded-sm">
          <p>Number of DAOs</p>
          <div className="flex">
            <p className="flex-1 text-lg font-bold text-yellow-600">{len}</p>
            <div className="flex rounded-full bg-green-100 items-center ">
              <ArrowUpwardIcon className="text-green-400  text-xs" />
              <p className="mr-4">27</p>
            </div>
          </div>
          <p className="hidden lg:inline sm:inline ">from 84</p>
        </div>
        <div className="md:w-[400px] h-[120px]  p-5 shadow-md border-2 rounded-sm">
          <p>Total AUM (USD)</p>
          <div className="flex">
            <p className="flex-1 text-lg font-bold text-yellow-600">{res}</p>
            <div className="flex rounded-full bg-green-100 items-center ">
              <ArrowUpwardIcon className="text-green-400  text-xs" />
              <p className="mr-4">27bhdnhfgnhfnjg</p>
            </div>
          </div>
          <p className="hidden lg:inline sm:inline ">from 84</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
