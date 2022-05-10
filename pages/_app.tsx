import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 pb-7 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
