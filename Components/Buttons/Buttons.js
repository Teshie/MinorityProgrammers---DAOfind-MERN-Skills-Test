import { useState } from "react";
import { doaList } from "../Constants/Constants";

import { useSelector, useDispatch } from "react-redux";
import {
  all,
  protocol,
  service,
  grant,
  media,
  social,
  investment,
  platform,
  collector,
} from "../../actions";

const Buttons = ({
  All,
  Protocol,
  Service,
  Grant,
  Media,
  Social,
  Investment,
  Platform,
  Collector,
}) => {
  //dispatch redux
  const value = useSelector((state) => state.changeValue);
  const dispatch = useDispatch();

  return (
    <div className="flex  justify-evenly lg:max-w-3xl cursor-pointer md:mx-[370px] mt-10 px-4     space-x-2">
      <h2
        onClick={() => dispatch(all())}
        id="btn"
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {All}
      </h2>
      <h3
        onClick={() => dispatch(protocol())}
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {Protocol}
      </h3>
      <h2
        onClick={() => dispatch(service())}
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {Service}
      </h2>
      <h2
        onClick={() => dispatch(grant())}
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {Grant}
      </h2>
      <h2
        onClick={() => dispatch(media())}
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {" "}
        {Media}
      </h2>
      <h2
        onClick={() => dispatch(social())}
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {Social}{" "}
      </h2>
      <h2
        onClick={() => dispatch(investment())}
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {Investment}{" "}
      </h2>
      <h2
        onClick={() => dispatch(platform())}
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {Platform}{" "}
      </h2>
      <h2
        onClick={() => dispatch(collector())}
        className="bg-gray-200 rounded-full active:bg-yellow-500"
      >
        {Collector}{" "}
      </h2>
    </div>
  );
};

export default Buttons;
