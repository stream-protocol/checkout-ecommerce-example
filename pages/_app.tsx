import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StreamPayProvider } from "@streampay/react-checkout-sdk";
import { createContext, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export const ProductContext = createContext<any>(null);
function MyApp({ Component, pageProps }: AppProps) {
  const [prod, setProd] = useState<any[]>([]);
  return (
    <>
      <ProductContext.Provider value={{ prod, setProd }}>
        <StreamPayProvider
          publicApiKey={process.env.NEXT_PUBLIC_STREAMPAY_PUBLIC_API_KEY!}
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </StreamPayProvider>
      </ProductContext.Provider>
    </>
  );
}

export default MyApp;
