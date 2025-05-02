import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { useEffect, useState } from "react";

const mockSession = {
  expires: "2099-10-01T00:00:00.000Z",
  user: { 
    name: "Static User", 
    email: "static@example.com",
    image: null 
  }
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [staticSession, setStaticSession] = useState(session);

  useEffect(() => {
    if (!session && typeof window !== 'undefined') {
      setStaticSession(mockSession);
    }
  }, [session]);

  return (
    <FpjsProvider
      loadOptions={{
        apiKey: process.env.NEXT_PUBLIC_FINGERPRINT_KEY || "dummy-key-for-static-site",
      }}
    >
      <SessionProvider session={staticSession}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </SessionProvider>
    </FpjsProvider>
  );
}
