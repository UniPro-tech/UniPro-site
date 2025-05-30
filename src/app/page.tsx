import { Metadata } from "next";
import { Button } from "@/components/button";
import { getRecentPosts } from "@/lib/posts";
import PostList from "@/components/PostList";
import Image from "next/image";
import Hamburger from "@/components/hamburger";
import Link from "next/link";

export const metadata: Metadata = {
  title: "全国ネットのデジタル創作サークル - UniProject",
  description:
    "全国ネットのデジタル創作サークル『UniProject』の公式サイトです！普段の活動や、その他お知らせなどをお届けします。",
  twitter: {
    card: "summary",
    site: "@UniPro_digital",
    title: "全国ネットのデジタル創作サークル - UniProject",
    description:
      "全国ネットのデジタル創作サークル『UniProject』の公式サイトです！普段の活動や、その他お知らせなどをお届けします。",
    images: [
      {
        url: "https://www.uniproject.jp/img/UniPro_Logo.webp",
        width: 128,
        height: 134,
        alt: "UniProjectのロゴ"
      }
    ]
  },
  openGraph: {
    type: "website",
    url: "https://www.uniproject.jp",
    title: "全国ネットのデジタル創作サークル - UniProject",
    description:
      "全国ネットのデジタル創作サークル『UniProject』の公式サイトです！普段の活動や、その他お知らせなどをお届けします。",
    images: [
      {
        url: "https://www.uniproject.jp/img/UniPro_Logo.webp",
        width: 128,
        height: 134,
        alt: "UniProjectのロゴ"
      }
    ]
  },
  alternates: { canonical: "https://www.uniproject.jp/" }
};

export default function Home() {
  const posts = getRecentPosts(4);
  return (
    <main className="flex min-h-screen w-full flex-col items-center text-gray-800 space-y-0">
      <section
        id="first"
        className="relative w-[100vw] h-[100vh] flex flex-col items-start justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-fuchsia-900/10 to-amber-900/20" />
        <Image
          src="/img/top.webp"
          alt="背景画像"
          loading="eager"
          priority={true}
          fill
          className="object-cover scale-105 transition-all duration-[2s] hover:scale-100 brightness-[0.85] hover:brightness-90 -z-10"
        />
        <div className="relative z-10 text-white md:ml-20 ml-5 flex flex-col items-start space-y-8 lg:w-1/2">
          <div className="animate-fadeIn backdrop-blur-sm bg-white/5 p-12 rounded-3xl border border-white/10 shadow-2xl">
            <a href="#first" className="group">
              <h3 className="text-xl lg:text-2xl text-left font-medium tracking-[0.2em] font-sansjp text-white/90 group-hover:text-white transition-all">
                デジタル創作サークル
              </h3>
              <h2 className="text-7xl text-left font-sansen font-bold tracking-tight mt-3">
                UniProject
              </h2>
            </a>
            <p className="text-left font-medium font-sansjp text-2xl text-white/90 mt-8 leading-relaxed tracking-wide">
              プログラミング・音楽制作・映像制作などの
              <br />
              デジタル関連の創作活動を行うサークルです。
            </p>
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-x-5 lg:space-y-0 mt-10">
              <Button<"button">
                href="/about"
                disabled={false}
                className="hover-lift px-10 py-4 backdrop-blur-md bg-white text-gray-500 hover:bg-white/90 font-medium tracking-[0.2em] rounded-xl shadow-xl"
              >
                もっと詳しく
              </Button>
              <Button<"button">
                href="/join"
                disabled={false}
                className="hover-lift px-10 py-4 backdrop-blur-md bg-transparent border-2 border-white/30 hover:bg-white/10 font-medium tracking-[0.2em] rounded-xl shadow-xl"
              >
                参加する
              </Button>
            </div>
          </div>
        </div>
        <Link
          className="absolute bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full p-5 font-sansen text-white/80 hover:text-white transition-colors duration-300 animate-float group"
          href="#recent"
        >
          <Image
            src="data:image/png;base64,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"
            alt="circled-down-2"
            width={50}
            height={50}
            className="opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:transform group-hover:translate-y-1"
          />
          <span className="tracking-[0.5em] uppercase text-sm mt-2">
            Scroll
          </span>
        </Link>
      </section>
      <section
        id="recent"
        className="flex flex-col space-y-10 lg:space-y-20 items-center justify-center w-full lg:p-20 bg-gradient-to-br from-slate-100 via-white to-slate-50 p-10 min-h-screen"
      >
        <h3 className="text-5xl font-bold font-sansen animate-slideUp tracking-wide relative group cursor-default">
          <span className="absolute -inset-1 rounded-lg bg-slate-100 blur-xl transition-all duration-500 group-hover:bg-slate-200" />
          <span className="relative bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">
            最近の出来事
          </span>
        </h3>
        <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:w-3/5 animate-fadeIn relative">
          <PostList
            dirname="announce"
            posts={posts}
            className="h-[500px] w-full bg-white shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_0_50px_-6px_rgba(0,0,0,0.25)] transition-all duration-500 rounded-3xl overflow-hidden border border-slate-100/50"
            btnClassName="w-2/3 hover-lift bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white tracking-[0.2em] font-medium rounded-xl shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
