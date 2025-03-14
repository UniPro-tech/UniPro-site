import { NextPage } from "next";
import { Button } from "@/components/button";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ - UniProject",
  description:
    "UniProjectのお問い合わせ先です。サークルへのご依頼やご質問は下記連絡先にて受け付けております。どうぞお気軽にご連絡・お問い合わせください。",
  twitter: {
    card: "summary",
    site: "@UniPro_digital",
    title: "お問い合わせ - UniProject",
    description:
      "UniProjectのお問い合わせ先です。サークルへのご依頼やご質問は下記連絡先にて受け付けております。どうぞお気軽にご連絡・お問い合わせください。"
  },
  openGraph: {
    type: "website",
    url: "https://www.uniproject.jp",
    title: "お問い合わせ - UniProject",
    description:
      "UniProjectのお問い合わせ先です。サークルへのご依頼やご質問は下記連絡先にて受け付けております。どうぞお気軽にご連絡・お問い合わせください。"
  },
  alternates: {
    canonical: "https://www.uniproject.jp/contact"
  }
};

const ContactsPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black space-y-0">
      <section
        id="contact"
        className="flex flex-col items-start justify-center flex w-full lg:w-2/5 md:w-4/5 space-y-5 p-5 pt-40 pb-20"
      >
        <h1 className="text-4xl font-bold">お問い合わせ先</h1>
        <p className="text-lg">
          サークルへのご依頼やご質問は下記連絡先にて受け付けております。
          <br />
          どうぞお気軽にご連絡・お問い合わせください。
        </p>
        <div
          id="sns"
          className="flex flex-col items-start justify-center space-y-4"
        >
          <h2 className="text-3xl">SNS</h2>
          <div id="twitter">
            Twitter:
            <a href="https://twitter.com/UniPro_digital">@UniPro_digital</a>
          </div>
        </div>
        <div
          id="mail"
          className="flex flex-col items-start justify-center space-y-4 text-center"
        >
          <h2 id="mail" className="text-3xl">
            メール
          </h2>
          <div id="hp" className="flex flex-col items-start space-y-3">
            <h3 className="text-2xl">HPに関するお問い合わせ</h3>
            webmaster[at]uniproject.jp
            <Button href="mailto:webmaster@uniproject.jp">メールを送る</Button>
          </div>
          <div
            id="othermail"
            className="flex flex-col items-start justify-center"
          >
            <h3 className="text-2xl">その他お問い合わせ</h3>
            info[at]uniproject.jp
            <Button href="mailto:info@uniproject.jp">メールを送る</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
