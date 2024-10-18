import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Nav from "@/components/nav";
import AuthProvider from "@/components/AuthProvider";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '300', '700'],
  subsets: ['latin']
});


export const metadata = {
  title: "FindMyHOtel",
  description: "Find your hotels for holiday",
};

export default function RootLayout({ children }) {


  return (
    <StoreProvider>
      <html lang="en" className={roboto.className}>
        <body
          className={`antialiased`}
        >
          <AuthProvider>
            <Nav />
            <div>
              {/* <BigSpinner /> */}
              {children}
            </div>
          </AuthProvider>
        </body>
      </html>
    </StoreProvider>

  );
}
