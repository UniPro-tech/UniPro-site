import { notoSansEn, notoSansJa } from "@/lib/fonts";
import Image from "next/image";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Hamburger from "@/components/hamburger";
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansEn.variable} ${notoSansJa.variable} scroll-smooth`}
    >
      <GoogleAnalytics gaId={"G-TZR9JVPWMG"} />
      <body className="w-full bg-white relative">
        <header className="text-white w-full absolute top-0 left-0 z-50 flex flex-row items-center justify-between px-4 py-3">
          <Link href="/" className="hover-lift">
            <Image
              src={"/img/logotype_white.png"}
              alt="UniProject's Logotype"
              width={280}
              height={64}
              className="animate-float"
              quality={100}
            />
          </Link>
          <Hamburger />
        </header>
        {children}
        <footer className="pt-10 px-2 lg:px-10 pb-5 bg-gray-600 text-white w-full relative flex flex-col items-center justify-center space-y-5">
          <div className="w-full flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0 space-y-5 justify-center items-center">
            <div className="flex h-full flex-col items-start justify-center space-y-5">
              <Link href="/" className="hover-lift">
                <Image
                  src={"/img/logotype_white.png"}
                  alt="UniProject's Logotype"
                  width={280}
                  height={64}
                  quality={100}
                />
              </Link>
              <div className="font-sansjp">
                デジタル創作サークル UniProject
                <br />
                所在地: 日本
                <br />
                (私たちは住所を持たず、オンラインで活動しています)
              </div>
              <div className="font-sansen">
                Digital Creative Club UniProject
                <br />
                Location: Japan
                <br />
                (We do not have a physical address and operate online)
              </div>
            </div>
            <div className="flex flex-col items-start w-[240px] justify-start space-y-3 h-full">
              <h3 className="text-2xl font-bold font-sansjp mb-5">
                関連サイト
              </h3>
              <div className="flex flex-col items-start justify-center space-y-3">
                <Link
                  href={"https://arane.uniproject.jp"}
                  className="text-center hover:text-blue mx-auto"
                >
                  <Image
                    src={"/img/aranenoyoru.png"}
                    alt="aranenoyoru"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
            </div>
            <div className="h-full flex flex-col items-start justify-center space-y-3">
              <h3 className="text-2xl font-bold font-sansjp">SNS</h3>
              <div className="flex flex-row p-1 items-start justify-center space-x-3 space-y-0">
                <Link
                  href={"https://twitter.com/UniPro_digital"}
                  className="text-center hover:text-blue mx-auto"
                >
                  <FaTwitter size={25} />
                </Link>
                <Link
                  href={"https://github.com/UniPro-tech"}
                  className="text-center hover:text-blue mx-auto"
                >
                  <FaGithub size={25} />
                </Link>
              </div>
              <iframe
                src="https://uniproject.instatus.com/embed-status/3559d5ef/light-md"
                width="230"
                height="61"
                className="border-0"
              />
            </div>
          </div>
          <div className="mt-3 lg:mx-20 flex flex-col text-sm items-center justify-center lg:space-x-3 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            <span className="flex-grow font-sansen order-2 lg:order-1 mt-5 lg:mt-0">
              Copyright&copy;2024 UniProject All Rights Reserved.
            </span>
            <div className="flex flex-row items-center justify-center space-x-3 order-1 lg:order-2">
              <Link
                href={
                  "https://wiki.uniproject.jp/share/6777ac6f4158e2abe61f39f3"
                }
                className="text-center hover:text-blue-200 font-sansjp"
              >
                &gt; サークル規約
              </Link>
              <Link
                href={"/cookie"}
                className="text-center hover:text-blue-200 font-sansjp"
              >
                &gt; Cookieについて
              </Link>
              <Link
                href={"/lisence"}
                className="text-center hover:text-blue-200 font-sansjp"
              >
                &gt; ライセンス
              </Link>
              <Link
                href={"/contact"}
                className="text-center hover:text-blue-200 font-sansjp"
              >
                &gt; 問い合わせ
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
