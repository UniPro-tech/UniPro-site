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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* ヘッダーセクション */}
      <section className="w-full pt-28 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-sansen tracking-wide text-white animate-slideUp">
              お問い合わせ
            </h1>
            <p className="text-lg text-white/80 font-sansjp tracking-wider animate-fadeInUp animation-delay-300">
              ご質問・ご依頼など、お気軽にご連絡ください
            </p>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* SNSセクション */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fadeInUp">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                SNS
              </h2>
              <a
                href="https://twitter.com/UniPro_digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors group"
              >
                <span className="text-lg">@UniPro_digital</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* メールセクション */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fadeInUp animation-delay-300">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                メール
              </h2>
              <div className="space-y-8">
                {/* HPに関するお問い合わせ */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">HPに関するお問い合わせ</h3>
                  <p className="text-gray-600 font-mono">webmaster[at]uniproject.jp</p>
                  <Button 
                    href="mailto:webmaster@uniproject.jp"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    メールを送る
                  </Button>
                </div>

                {/* その他お問い合わせ */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">その他お問い合わせ</h3>
                  <p className="text-gray-600 font-mono">info[at]uniproject.jp</p>
                  <Button 
                    href="mailto:info@uniproject.jp"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    メールを送る
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
