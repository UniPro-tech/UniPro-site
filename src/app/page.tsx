import { Metadata } from "next";
import { Button } from "@/components/button";
import TwitterTimeline from "@/components/twitter-timeline";
import { getRecentPosts } from "@/lib/posts";
import PostList from "@/components/PostList";
import Image from "next/image";

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
  alternates: {
    canonical: "https://www.uniproject.jp/"
  }
};

export default function Home() {
  const images = [
    {
      src: "/img/callboy.webp",
      url: "https://www.nicovideo.jp/watch/sm43837772"
    },
    {
      src: "/img/fixer.webp",
      url: "https://www.nicovideo.jp/watch/sm43126973"
    },
    {
      src: "/img/UniPro-GitTool.webp",
      url: "https://github.com/UniPro-tech/UniPro-Git-Tool"
    },
    {
      src: "/img/arane.webp",
      url: "https://arane.uniproject.jp/"
    }
  ];
  const posts = getRecentPosts("announce", 4);
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white text-black space-y-0">
      <Image
        src="/img/top.webp"
        alt="UniProjectのロゴ"
        width={1920}
        height={0}
      />
      <section
        id="first"
        className="flex space-y-3 w-full items-center lg:p-20 p-10 flex-col bg-gray-100"
      >
        <div className="flex flex-col items-center space-y-1">
          <div className="mb-4">
            <a href="#first">
              <h3 className="text-xl lg:text-2xl text-center">
                全国ネットのデジタル創作サークル
              </h3>
              <h2 className="text-6xl text-center">UniProject</h2>
            </a>
          </div>
          <p className="text-center">
            UniProjectは、プログラミング・音楽制作などのデジタル関連の創作活動を行うサークルです。
            <br />
            活動内容
            <br />
            Web開発/UTAU/デザイン/競技プログラミング/AI/映像制作/インフラ開発(サーバー関連等)/etc...
            <br />
          </p>
          <Button<"button"> href="/about" disabled={false}>
            もっと詳しく
          </Button>
        </div>
      </section>
      <section
        id="announce"
        className="flex flex-col space-y-3 items-center justify-center w-full p-20 bg-gray-200"
      >
        <h3 className="text-2xl">
          <a href="#announce">最新情報</a>
          <p>UniProjectの最新情報をお届けします。</p>
        </h3>
        <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-3">
          <div className="flex flex-col w-87.5 divide-y border-black divide-black">
            <PostList
              dirname="announce"
              posts={posts}
              className="h-[500px] w-full"
              btnClassName="w-full"
            />
          </div>
          <div className="w-87.5">
            <TwitterTimeline />
          </div>
        </div>
      </section>
      <section
        id="join"
        className="flex space-y-3 items-center min-w-full lg:p-20 p-10 flex-col bg-gray-100"
      >
        <h3 className="text-2xl">
          <a href="#join">参加しよう！</a>
        </h3>
        <div className="text-center flex flex-col space-y-4">
          <p>
            UniProjectに参加するには、以下のリンクから参加フォームにアクセスしてください。
            <br />
            また、Discordは登録しなくても普段の活動の様子を見たり、メンバーと話したりできます。
          </p>
          <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-5 lg:space-y-0 space-y-3">
            <Button<"Link">
              href="https://forms.gle/VsRQQ4LwnxvDUyH58"
              className="lg:w-2/5 w-full"
              disabled={false}
            >
              参加フォーム
            </Button>
            <Button<"Link">
              href="/discord"
              className="lg:w-2/5 w-full"
              disabled={false}
            >
              Discord
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
