import Head from "next/head";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Dashboard from "../Components/Dashboard/Dashboard";
import { doaList, buttons } from "../Components/Constants/Constants";
import Titles from "../Components/Titles/Titles";
import Buttons from "../Components/Buttons/Buttons";
import Search from "../Components/Search/Search";
export default function Home() {
  return (
    <div>
      <Head>
        <title>DAOfind</title>
        <link
          rel="icon"
          href="https://daolist.fyi/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fpe-ple%2Fimage%2Fupload%2Fv1625804406%2Fdao-logo_rv5lis.svg&w=256&q=75"
        />
      </Head>
      <Header />
      <Dashboard />

      <main>
        <div className="">
          {buttons?.map(
            ({
              All,
              Protocol,
              Service,
              Grant,
              Media,
              Social,
              Investment,
              Platform,
              Collector,
            }) => (
              <Buttons
                key={Protocol}
                All={All}
                Protocol={Protocol}
                Service={Service}
                Grant={Grant}
                Media={Media}
                Social={Social}
                Investment={Investment}
                Platform={Platform}
                Collector={Collector}
              />
            )
          )}
        </div>
        <Search />
        <Titles />
        <div className="">
          {doaList?.map(
            ({
              Logo,
              Name,
              Category,
              AUM,
              Followers,
              Founded,
              Website,
              Twitter,
            }) => (
              <Hero
                key={Logo}
                img={Logo}
                name={Name}
                catagory={Category}
                AUM={AUM}
                Followers={Followers}
                Founded={Founded}
                Website={Website}
                Twitter={Twitter}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

//
