import { Metadata } from "next";
import { Button } from "@/components/button";
import { getRecentPosts } from "@/lib/posts";
import PostList from "@/components/RecentPostList";
import Image from "next/image";
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
        {/* ベースの背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/20 via-fuchsia-100/10 to-amber-100/20" />

        {/* 上部の暗いグラデーション */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-[5]" />

        <Image
          src="/img/top.webp"
          alt="背景画像"
          loading="eager"
          priority={true}
          fill
          className="object-cover scale-105 transition-all duration-[2s] hover:scale-100 brightness-[0.85] hover:brightness-90 -z-10"
        />
        <div className="relative z-10 text-white md:ml-20 mx-4 flex flex-col items-start space-y-8 lg:w-1/2">
          <div className="animate-fadeIn backdrop-blur-sm bg-white/5 p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <a href="#first" className="group">
              <h3 className="text-lg sm:text-xl lg:text-2xl text-left font-medium tracking-[0.2em] font-sansjp text-white/90 group-hover:text-white transition-all">
                デジタル創作サークル
              </h3>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-left font-sansen font-bold tracking-tight mt-3">
                UniProject
              </h2>
            </a>
            <p className="text-left font-medium font-sansjp text-lg sm:text-xl md:text-2xl text-white/90 mt-8 leading-relaxed tracking-wide">
              プログラミング・音楽制作・映像制作などの
              <br className="hidden sm:block" />
              デジタル関連の創作活動を行うサークルです。
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-x-5 sm:space-y-0 mt-8 sm:mt-10">
              <Button<"button">
                href="/about"
                disabled={false}
                className="hover-lift px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-md bg-white text-gray-500 hover:bg-white/90 font-medium tracking-[0.2em] rounded-xl shadow-xl text-sm sm:text-base"
              >
                もっと詳しく
              </Button>
              <Button<"button">
                href="/join"
                disabled={false}
                className="hover-lift px-6 sm:px-10 py-3 sm:py-4 backdrop-blur-md bg-transparent border-2 border-white/30 hover:bg-white/10 font-medium tracking-[0.2em] rounded-xl shadow-xl text-sm sm:text-base"
              >
                参加する
              </Button>
            </div>
          </div>
        </div>
        <Link
          className="absolute bottom-0 left-0 z-10 w-full pb-4 sm:pb-8 pt-4 font-sansen text-white/80 hover:text-white transition-colors duration-300 group"
          href="#recent"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] relative animate-float">
              <Image
                src="data:image/png;base64,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"
                alt="circled-down-2"
                fill
                className="opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:transform group-hover:translate-y-1 object-contain"
              />
            </div>
            <span className="tracking-[0.5em] uppercase text-xs sm:text-sm">
              Scroll
            </span>
          </div>
        </Link>
      </section>
      <section
        id="recent"
        className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50"
      >
        <div className="w-full px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center space-y-8 sm:space-y-12">
            {/* タイトル部分 */}
            <div className="w-full text-center space-y-3 sm:space-y-4">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sansen tracking-wide animate-slideUp bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                最近の出来事
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-sansjp tracking-wider">
                UniProjectの活動やお知らせをお届けします
              </p>
            </div>

            {/* 投稿一覧とボタン */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full animate-fadeIn pb-6 sm:pb-8">
                <PostList
                  dirname="announce"
                  posts={posts}
                  className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  listClassName="!grid-cols-1 md:!grid-cols-2"
                />
              </div>
              <Link
                href="/announce"
                className="group inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors mt-2"
              >
                <span className="font-sansjp tracking-wider text-sm sm:text-base">
                  もっと見る
                </span>
                <span className="transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
