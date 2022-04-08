import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
