import { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "src/store/store";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { toast,ToastContainer } from 'react-toastify';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer/>
    </Provider>
  );
}

export default MyApp;
