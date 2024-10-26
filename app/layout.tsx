"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

//declare the metadata directly in the page component instead.
const metadata = {
  title: "Daniel Yordanov",
  description: "Portfolio website.",
};

function updateCursorPaths() {
  const isLocalhost = window.location.hostname === 'localhost';
  const basePath = isLocalhost ? '' : '/daniely';

  const updateCursorClass = (className: string, cursorPath: string) => {
    const elements = document.querySelectorAll<HTMLElement>(`.` + className);
    elements.forEach((el) => {
      el.style.cursor = `url('${basePath}${cursorPath}'), ${className.includes('link') ? 'pointer' : 'auto'}`;
    });
  };

  updateCursorClass('cursor-custom-card', '/cursor/default.svg');
  updateCursorClass('cursor-custom-default', '/cursor/default.svg');
  updateCursorClass('cursor-custom-text', '/cursor/text.svg');
  updateCursorClass('cursor-custom-link', '/cursor/link.svg');
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    updateCursorPaths();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
