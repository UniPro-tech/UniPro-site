import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Logo from "@/img/UniPro_Logo.webp";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleAnalytics gaId={"G-TZR9JVPWMG"} />
      <body className="w-full">
        <header className="bg-gray-800 text-white w-full">
          <nav className="flex items-center justify-between p-2">
            <a href="/">
              <h1 className="text-2xl font-bold flex items-center">
                <Image
                  src={Logo}
                  alt="UniProject's Logo"
                  width={50}
                  height={50}
                />UniProject公式サイト(仮)
              </h1>
            </a>
            <ul className="flex right-4 text-right space-x-5">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="p-4 bg-gray-800 text-white text-center w-full">
          <p>
            &copy;2024 UniProject All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
