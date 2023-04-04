import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
        <Navbar />
        <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
