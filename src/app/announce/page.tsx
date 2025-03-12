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
  const posts = getAllPosts("announce");
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black space-y-10 p-5 pt-20 lg:pt-40">
      <h1 className="text-4xl font-bold mt-10">お知らせ一覧</h1>
      <PostList
        dirname="announce"
        posts={posts}
        className="lg:w-2/5 w-4/5 mx-auto mt-10"
        btnDisabled={true}
      />
    </main>
  );
};

export default ContactsPage;
