import { notoSansEn, notoSansJa } from "@/lib/fonts";
import Image from "next/image";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Hamburger from "@/components/hamburger";
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#3699d5"
};

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
        <header className="text-white w-full absolute top-0 left-0 z-50">
          <div className="flex flex-row items-center justify-between h-28 px-4 sm:px-6 lg:px-8">
            <Link href="/" className="hover-lift h-20 flex items-center">
              <Image
                src={"/img/logotype_white.png"}
                alt="UniProject's Logotype"
                width={400}
                height={92}
                className="w-auto h-full"
                quality={100}
                priority
              />
            </Link>
            <div className="flex items-center h-full">
              <Hamburger />
            </div>
          </div>
        </header>
        {children}
        <footer className="pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-20 bg-slate-900 text-white w-full relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* メイン情報 */}
              <div className="md:col-span-1 lg:col-span-5 space-y-1">
                <Link href="/" className="hover-lift inline-block">
                  <Image
                    src={"/img/logotype_white.png"}
                    alt="UniProject's Logotype"
                    width={200}
                    height={46}
                    className="w-auto h-auto sm:scale-110 md:scale-120"
                    quality={100}
                  />
                </Link>
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2 text-slate-300">
                    <p className="font-sansjp text-sm sm:text-base">
                      デジタル創作サークル UniProject
                      <br />
                      所在地: 日本
                      <br />
                      (私たちは住所を持たず、オンラインで活動しています)
                    </p>
                    <p className="font-sansen text-xs sm:text-sm text-slate-400">
                      Digital Creative Club UniProject
                      <br />
                      Location: Japan
                      <br />
                      (We do not have a physical address and operate online)
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link
                      href="https://twitter.com/UniPro_digital"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FaTwitter size={18} className="sm:w-5 sm:h-5" />
                    </Link>
                    <Link
                      href="https://github.com/UniPro-tech"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={18} className="sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 関連サイト */}
              <div className="md:col-span-1 lg:col-span-4">
                <h3 className="text-base sm:text-lg font-bold font-sansjp mb-4 sm:mb-6">
                  関連サイト
                </h3>
                <Link
                  href="https://arane.uniproject.jp"
                  className="inline-block hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src="/img/aranenoyoru.png"
                    alt="aranenoyoru"
                    width={300}
                    height={300}
                    className="rounded-lg w-[220px] sm:w-[260px] md:w-[300px] h-auto shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </Link>
              </div>

              {/* ステータス */}
              <div className="md:col-span-2 lg:col-span-3">
                <h3 className="text-base sm:text-lg font-bold font-sansjp mb-4 sm:mb-6">
                  サービス稼働状況
                </h3>
                <iframe
                  src="https://uniproject.instatus.com/embed-status/3559d5ef/light-md"
                  width="230"
                  height="61"
                  className="border-0 scale-90 sm:scale-100 origin-left"
                />
              </div>
            </div>

            {/* 下部リンク */}
            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800">
              <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                <p className="text-slate-400 text-xs sm:text-sm font-sansen">
                  Copyright © 2024 UniProject All Rights Reserved.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
                  <Link
                    href="https://wiki.uniproject.jp/share/6777ac6f4158e2abe61f39f3"
                    className="hover:text-white transition-colors"
                  >
                    サークル規約
                  </Link>
                  <Link
                    href="/cookie"
                    className="hover:text-white transition-colors"
                  >
                    Cookieについて
                  </Link>
                  <Link
                    href="/license"
                    className="hover:text-white transition-colors"
                  >
                    ライセンス
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    問い合わせ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
