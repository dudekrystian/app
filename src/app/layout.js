import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Portfolio website",
  description: "website with our project",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
