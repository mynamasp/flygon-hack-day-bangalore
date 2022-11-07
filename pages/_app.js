import "../styles/globals.css";
import WalletProvider from "../useWallet";

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <div className="h-full bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500">
        <Component {...pageProps} />
      </div>
    </WalletProvider>
  );
}

export default MyApp;
