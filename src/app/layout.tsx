import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Dropdown, Footer, Navbar } from "@/lib/exports";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevScout",
  description:
    "Improving developer experience through easy and seamless access",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <Navbar />
          <Dropdown />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
