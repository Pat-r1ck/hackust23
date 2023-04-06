import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "../context";
import { Navbar } from "../components";
import "../styles/globals.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "localhost";

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider activeChain={activeChain}>
			<StateContextProvider>
                <Navbar />
                <Component {...pageProps} />
			</StateContextProvider>
		</ThirdwebProvider>
	);
}

export default MyApp;
