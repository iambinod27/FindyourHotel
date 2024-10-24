import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Nav from "@/components/nav";
import AuthProvider from "@/components/AuthProvider";

import { Montserrat, Roboto } from 'next/font/google';
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
}
)

export const metadata = {
  title: "FindMyHOtel",
  description: "Find your hotels for holiday",
};

export default function RootLayout({ children }) {


  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`antialiased ${montserrat.className}`}
        >
          <AuthProvider>
            <Nav />
            <div className="pt-[80px] min-h-screen">
              {/* <BigSpinner /> */}
              {children}
            </div>
            <Footer />
          </AuthProvider>
        </body>
      </html>
    </StoreProvider>

  );
}
