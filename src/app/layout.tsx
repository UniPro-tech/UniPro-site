import { notoSansEn, notoSansJa } from "@/lib/fonts";
import Image from "next/image";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Hamburger from "@/components/hamburger";
import Link from "next/link";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansEn.variable} ${notoSansJa.variable}`}>
      <GoogleAnalytics gaId={"G-TZR9JVPWMG"} />
      <body className="w-full bg-white relative">
        <header className="text-white w-full absolute top-0 left-0 z-50 flex flex-row items-center justify-between p-1">
          <Link href="/" className="flex items-center px-5 flex-row space-x-2">
            <Image
              src={"/img/UniPro_Logo.webp"}
              alt="UniProject's Logo"
              width={50}
              height={50}
            />
            <div className="lg:absoulte flex flex-col items-start justify-center">
              <h2 className="invisible lg:visible text-xs font-bold font-sans lg:relative lg:top-1 h-0 lg:h-auto">
                All-Japan Digital Creative Club
              </h2>
              <h1 className="lg:text-4xl text-3xl font-bold font-sansen">
                UniProject
              </h1>
            </div>
          </Link>
          <Hamburger />
        </header>
        {children}
        <footer className="p-4 bg-gray-800 text-white w-full flex lg:flex-row flex-col items-center justify-center lg:justify-between relative">
          <iframe
            src="https://uniproject.instatus.com/embed-status/3559d5ef/light-md"
            width="230"
            height="61"
            className="border-0"
          />
          <div className="mx-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link
              href={
                "https://github.com/UniPro-tech/UniPro-site/blob/master/LICENSE"
              }
              className="text-center hover:text-blue mx-auto"
            >
              Copyright&copy;2024 UniProject All Rights Reserved. See credits
              here.
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
