import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI DASHBOARD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screens  bg-[#F8F9FA] flex relative">
        <Sidebar/>
        <div className="pt-6 pr-10 w-full">{children}</div>
      </body>
    </html>
  );
}
