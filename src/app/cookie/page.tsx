import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookieについて - UniProject公式HP",
  description:
    "当サイトのCookieについての説明です。当サイトでは、アクセス解析のためにCookieを使用しています。",
  twitter: {
    card: "summary",
    site: "@UniPro_digital",
    title: "Cookieについて - UniProject公式HP",
    description:
      "当サイトのCookieについての説明です。当サイトでは、アクセス解析のためにCookieを使用しています。"
  },
  openGraph: {
    type: "website",
    siteName: "デジタル創作サークルUniProject",
    url: "https://www.uniproject.jp/cookie",
    title: "Cookieについて - UniProject公式HP",
    description:
      "当サイトのCookieについての説明です。当サイトでは、アクセス解析のためにCookieを使用しています。"
  },
  alternates: {
    canonical: "https://www.uniproject.jp/cookie"
  }
};

const markdownString = `
# クッキーポリシー

デジタル創作サークルUniProject N/S Branch（以下、「当団体」といいます。）は、お客様のウェブサイト利用状況を分析し、または個々のお客様に対してカスタマイズされたサービス・広告を提供する等の目的のため、クッキーを使用して一定の情報を収集します。

## クッキーについて

クッキーとはお客様のウェブサイト閲覧情報を、そのお客様のコンピューター（PCやスマートフォン、タブレットなどインターネット接続可能な機器）に記憶させる機能のことです。

クッキーには、当団体によって設定されるもの（ファーストパーティークッキー）と、当団体と提携する第三者によって設定されるもの（サードパーティークッキー）があります。

## クッキーの利用目的

当団体では、クッキーを、お客様がウェブサイトを閲覧する際に同じ情報を繰り返し入力することがなくなるなど、お客様の利便性向上のために使用しています。
当団体では、クッキーを使用して収集した情報を利用して、お客様のウェブサイトの利用状況（アクセス状況、トラフィック、ルーティング等）を分析し、ウェブサイト自体のパフォーマンス改善や、当団体からお客様に提供するサービスの向上、改善のために使用することがあります。

また、この分析にあたっては、主に以下のツールが利用され、ツール提供者に情報提供されることがあります。

- Google Analytics
- Google Tag Manager

この他、クッキーは、提携する広告配信サービス提供会社における行動ターゲティング広告の配信に使用される場合があります。

## クッキーの拒否方法

お客様がブラウザの設定を変更することによりクッキーを無効にすることが可能です。ただし、クッキーを無効にした場合は、一部のサービスが受けられない場合があります。
クッキーの設定の変更方法については、各ブラウザの製造元へご確認ください。

## サードパーティクッキーによる送信情報

本サービスでは、アクセス解析と広告配信の目的で、サードパーティークッキーを使用しています。
サードパーティークッキーによる送信情報等は以下のとおりです。

### Google Analytics/Google Tag Manager

#### ツール提供者

Google Inc.

#### 取得する情報

皆様のWebサイトの利用状況（アクセス状況、トラフィック、ルーティング等）

#### 利用目的

利便性の向上やサイトの改善のため

#### その他特記事項

皆様のWebサイトの利用状況については、Google社も取得し、利用します。
詳細については、以下のURLをご確認ください。

- [Google Analytics利用規約（外部サイトへリンク）](https://marketingplatform.google.com/about/analytics/terms/jp/)
- [Google のサービスを使用するサイトやアプリから収集した情報の Google による使用（外部サイトへリンク）](https://policies.google.com/technologies/partner-sites?hl=ja)

google社のプライバシーポリシーについては、以下のとおりです。

- [Googleのプライバシーポリシー（外部サイトへリンク）](https://policies.google.com/privacy?hl=ja)

Google Analyticsに関する情報は、以下のサイトからも入手できます。

- [Google Analyticsに関する詳細情報（外部サイトへリンク）](https://marketingplatform.google.com/about/analytics/)

アナリティクスヘルプ > データのプライバシーとセキュリティ > データの保護
`;

const Home = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">
      {/* ヘッダーセクション */}
      <section className="w-full pt-28 pb-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-sansen tracking-wide text-white animate-slideUp">
              Cookieポリシー
            </h1>
            <p className="text-lg text-white/80 font-sansjp tracking-wider animate-fadeInUp animation-delay-300">
              当サイトのCookieの使用について説明します
            </p>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 backdrop-blur-xs rounded-2xl shadow-xs p-8 md:p-12 animate-fadeIn">
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: props => (
                  <h1
                    {...props}
                    className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-gray-200"
                  />
                ),
                // リンクをカスタマイズ
                a: props => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200 underline decoration-blue-400/30 hover:decoration-blue-400"
                  />
                ),
                // セクションの見出しをカスタマイズ
                h2: props => (
                  <h2
                    {...props}
                    className="text-2xl font-bold text-gray-900 mb-6 mt-10 pb-2 border-b border-gray-200"
                  />
                ),
                // サブセクションの見出しをカスタマイズ
                h3: props => (
                  <h3
                    {...props}
                    className="text-xl font-semibold text-gray-800 mb-4 mt-8"
                  />
                ),
                // h4のスタイリングを追加
                h4: props => (
                  <h4
                    {...props}
                    className="text-lg font-semibold text-gray-700 mb-3 mt-6"
                  />
                ),
                // リストをカスタマイズ
                ul: props => (
                  <ul
                    {...props}
                    className="list-disc pl-6 space-y-2 my-4 text-gray-700"
                  />
                ),
                // 段落をカスタマイズ
                p: props => (
                  <p
                    {...props}
                    className="text-gray-700 leading-relaxed mb-4"
                  />
                )
              }}
            >
              {markdownString}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
