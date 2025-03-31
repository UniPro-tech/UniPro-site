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
    <>
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
              All-Japan Digital{" "}
              <span className="font-bold italic">Destroy</span> Club
            </h2>
            <h1 className="lg:text-4xl text-3xl font-bold font-sansen">
              <span className="font-bold italic">Some</span>Project
            </h1>
          </div>
        </Link>
        <Hamburger />
      </header>
      <main className="flex min-h-screen w-full flex-col items-center bg-white text-black space-y-0">
        <section
          id="first"
          className="relative w-[100vw] h-[100vh] flex flex-col items-start justify-center"
        >
          <Image
            src="/img/top.webp"
            alt="背景画像"
            loading="eager"
            priority={true}
            fill
            objectFit="cover"
          />
          <div className="lg:invisible visible absolute top-0 left-0 w-full h-full bg-black opacity-20" />
          <div className="relative z-10 text-white bg-opacity-75 md:ml-20 ml-5 flex flex-col items-start space-y-5 lg:w-1/2">
            <a href="#first">
              <h3 className="text-xl lg:text-2xl text-left font-semibold font-sansjp">
                デジタル<span className="italic">破壊</span>サークル
              </h3>
              <h2 className="text-6xl text-center font-sansen font-bold">
                <span className="italic">Some</span>Project
              </h2>
            </a>
            <p className="text-left font-bold font-sansjp text-2xl">
              プログラミング・音楽制作・映像制作などの
              <br />
              デジタル関連の創作活動を行うサークルです。
            </p>
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-x-3 lg:space-y-0">
              <Button<"button"> href="/about" disabled={false}>
                もっと詳しく
              </Button>
              <Button<"button"> href="/join" disabled={false}>
                参加する
              </Button>
            </div>
          </div>
          <Link
            className="absolute bottom-0 left-0 z-10 flex flex-col items-center justify-center w-full p-5 font-sansen"
            href="#recent"
          >
            <Image
              src="data:image/png;base64,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"
              alt="circled-down-2"
              width={50}
              height={50}
            />
            Scroll
          </Link>
        </section>
        <section
          id="recent"
          className="flex flex-col space-y-10 lg:space-y-20 items-center justify-center w-full lg:p-20 bg-gray-200 p-10"
        >
          <h3 className="text-4xl font-bold font-sansen">
            <a href="#recent">最近の出来事</a>
          </h3>
          <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:w-3/5">
            <PostList
              dirname="announce"
              posts={posts}
              className="h-[500px] w-full"
              btnClassName="w-2/3"
            />
          </div>
        </section>
      </main>
    </>
  );
}
