import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

import AuthProvider from "@/components/AuthProvider/AuthProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Portfolio website",
  description: "our project",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
