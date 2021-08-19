import { doaList } from "../Components/Constants/Constants";
const totalAum = doaList.reduce((total, aum) => {
  const value = parseInt(aum.AUM); //change string value to integer
  return total + value;
}, 0);
const total = totalAum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
function Protocol() {
  return doaList.reduce(function (sum, record) {
    return record.Category !== "Protocol" ? sum : sum + parseInt(record.AUM);
  }, 0);
}
function Service() {
  return doaList.reduce(function (sum, record) {
    return record.Category !== "Service" ? sum : sum + parseInt(record.AUM);
  }, 0);
}
function Grant() {
  return doaList.reduce(function (sum, record) {
    return record.Category !== "Grant" ? sum : sum + parseInt(record.AUM);
  }, 0);
}
function Media() {
  return doaList.reduce(function (sum, record) {
    return record.Category !== "Media" ? sum : sum + parseInt(record.AUM);
  }, 0);
}
function Social() {
  return doaList.reduce(function (sum, record) {
    return record.Category !== "Social" ? sum : sum + parseInt(record.AUM);
  }, 0);
}
function Investment() {
  return doaList.reduce(function (sum, record) {
    return record.Category !== "Investment" ? sum : sum + parseInt(record.AUM);
  }, 0);
}
function Platform() {
  return doaList.reduce(function (sum, record) {
    return record.Category !== "Platform" ? sum : sum + parseInt(record.AUM);
  }, 0);
}
function Collector() {
  return doaList.reduce(function (sum, record) {
    return record.Category !== "Collector" ? sum : sum + parseInt(record.AUM);
  }, 0);
}

const changeValueReducer = (state = 0, action) => {
  switch (action.type) {
    case "ALL":
      return total;
      break;
    case "Protocols":
      return Protocol();
      break;
    case "Services":
      return Service();
      break;
    case "Grants":
      return Grant();
      break;
    case "Medias":
      return Media();
      break;
    case "Socials":
      return Social();
      break;
    case "Investments":
      return Investment();
      break;
    case "Platforms":
      return Platform();
      break;
    case "Collectors":
      return Collector();
      break;
    default:
      return totalAum;
      break;
  }
};

export default changeValueReducer;
