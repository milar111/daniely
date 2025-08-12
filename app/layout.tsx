import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ui/ClickSpark";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DanielYordanov",
  description: "PortfolioWebsite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClickSpark sparkColor="#a3a3a3" sparkCount={8} sparkSize={10} sparkRadius={25} extraScale={1}>
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
