import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import { createStore, combinedReducers } from "redux";
import changeValueReducer from "../Reducer/ChangeValue";
import reducer from "../reducer";

function MyApp({ Component, pageProps }) {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
