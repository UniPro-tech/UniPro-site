import { NextPage } from "next";
import React from "react";
import { Metadata } from "next";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "お知らせ一覧 - UniProject",
  description:
    "UniProjectのお知らせ一覧です。運営情報や各種イベントなどの情報も掲載しています。",
  twitter: {
    card: "summary",
    site: "@UniPro_digital",
    title: "お知らせ一覧 - UniProject",
    description:
      "UniProjectのお知らせ一覧です。運営情報や各種イベントなどの情報も掲載しています。"
  },
  openGraph: {
    type: "website",
    url: "https://www.uniproject.jp",
    title: "お知らせ一覧 - UniProject",
    description:
      "UniProjectのお知らせ一覧です。運営情報や各種イベントなどの情報も掲載しています。"
  },
  alternates: {
    canonical: "https://www.uniproject.jp/announce"
  }
};

const ContactsPage: NextPage = () => {
  const posts = getAllPosts().sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* ヘッダーセクション */}
      <section className="w-full pt-28 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-sansen tracking-wide text-white animate-slideUp">
              お知らせ一覧
            </h1>
            <p className="text-lg text-white/80 font-sansjp tracking-wider animate-fadeInUp animation-delay-300">
              UniProjectの活動やイベント情報をお届けします
            </p>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-6">
          <PostList
            dirname="announce"
            posts={posts}
            className="w-full bg-white backdrop-blur-sm rounded-2xl overflow-hidden"
          />
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
