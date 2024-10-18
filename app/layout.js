import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Nav from "@/components/nav";
import BigSpinner from "@/components/BigSpinner";
import AuthProvider from "@/components/AuthProvider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FindMyHOtel",
  description: "Find your hotels for holiday",
};

export default function RootLayout({ children }) {


  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AuthProvider>
            <Nav />
            <div className="pt-[80px]">
              {/* <BigSpinner /> */}
              {children}
            </div>
          </AuthProvider>
        </body>
      </html>
    </StoreProvider>

  );
}
