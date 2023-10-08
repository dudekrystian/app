import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Portfolio website",
  description: "website with our project",
};

export default function RootLayout({ children }) {
  return (
    <div className="container">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </div>
  );
}
