import "../styles/globals.css";
import "../styles/forms.css";
import "../styles/mediaqueries.css";

import "react-toastify/dist/ReactToastify.css";

import { CONTEXTPROVIDER } from "../context/useContext";

function MyApp({ Component, pageProps }) {
  return (
    <CONTEXTPROVIDER>
      <Component {...pageProps} />
    </CONTEXTPROVIDER>
  );
}

export default MyApp;
