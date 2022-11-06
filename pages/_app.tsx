import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
