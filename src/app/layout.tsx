import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import Hamburger from "@/components/hamburger";
import Link from "next/link";

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
          <nav className="hidden lg:flex items-center justify-between p-2">
            <Link href="/">
              <h1 className="lg:text-2xl font-bold space-x-4 flex items-center">
                <Image
                  src={"/img/UniPro_Logo.webp"}
                  alt="UniProject's Logo"
                  width={50}
                  height={50}
                />
                <div>
                  UniProject公式サイト(仮)
                </div>
              </h1>
            </Link>
            <ul className="flex right-4 text-right space-x-5">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Hamburger />
        </header>
        {children}
        <footer className="p-4 bg-gray-800 text-white text-center w-full">
          <p>
            <Link href={"https://github.com/UniPro-tech/UniPro-site/blob/master/LICENSE"} className="hover:text-blue">
              Copyright&copy;2024 UniProject All Rights Reserved.See credits here.
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
