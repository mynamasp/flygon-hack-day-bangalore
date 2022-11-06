import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
