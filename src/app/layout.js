import "./globals.css";
// import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shuvo-Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
