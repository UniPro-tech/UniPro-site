import { Noto_Sans, Noto_Sans_JP } from "next/font/google";

export const notoSansEn = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans"
});

export const notoSansJa = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp"
});
