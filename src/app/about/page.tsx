import { Button } from "@/components/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UniProjectとは - UniProject",
  description:
    "UniProjectは、デジタル創作活動を後半に行うオンラインサークルです。UniProjectとは何なのかを解説しています。",
  twitter: {
    card: "summary",
    site: "@UniPro_digital",
    title: "UniProjectとは - UniProject",
    description:
      "UniProjectは、デジタル創作活動を後半に行うオンラインサークルです。UniProjectとは何なのかを解説しています。"
  },
  openGraph: {
    type: "website",
    url: "https://www.uniproject.jp/about",
    title: "UniProjectとは - UniProject",
    description:
      "UniProjectは、デジタル創作活動を後半に行うオンラインサークルです。UniProjectとは何なのかを解説しています。"
  },
  alternates: {
    canonical: "https://www.uniproject.jp/about"
  }
};

const markdownString = `
# UniProjectとは

UniProjectは、デジタル創作活動を後半に行うオンラインサークルです。

## 名前の由来

UniProjectという名前には2つの意味が込められています。

Uniという言葉には「1つの」という言葉があります。

そこから、「同じ界隈の人でも別の界隈の人でも普段関わらない世界の人でも1つになれる」、「デジタル創作界隈で唯一無二の存在になる」という意味が込められています。[^1]

[^1]:実はこの名前は0期メンバー募集開始の5日前に決まりました。元々はUniProjectではなく、UntitledProjectという名前でした。しかし、「名もなきものを」というよりは、「みんなで集まれる」というのを重視したかったため、この名前になりました。

## 活動内容

UniProjectでは以下のような活動をしています。

- プログラミング
  - Web開発
  - ゲーム開発
  - ツール開発
  - アプリ開発
- イラスト
- 音楽
  - UTAU/合成音声
  - 作曲
- デザイン
- その他デジタル創作活動

## 活動場所

UniProjectでは、主にDiscordを使用しています。

Discordはこちら！

https://uniproject.jp/discord
`;

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white text-black space-y-0 pt-20 pb-10">
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
        {markdownString}
      </ReactMarkdown>
    </main>
  );
};

export default Home;
