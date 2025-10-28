import { Button } from "@/components/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UniProjectとは - UniProject",
  description:
    "UniProjectは、デジタル創作活動を広範に行うオンラインサークルです。UniProjectとは何なのかを解説しています。",
  twitter: {
    card: "summary",
    site: "@UniPro_digital",
    title: "UniProjectとは - UniProject",
    description:
      "UniProjectは、デジタル創作活動を広範に行うオンラインサークルです。UniProjectとは何なのかを解説しています。"
  },
  openGraph: {
    type: "website",
    siteName: "デジタル創作サークルUniProject",
    url: "https://www.uniproject.jp/about",
    title: "UniProjectとは - UniProject",
    description:
      "UniProjectは、デジタル創作活動を広範に行うオンラインサークルです。UniProjectとは何なのかを解説しています。"
  },
  alternates: {
    canonical: "https://www.uniproject.jp/about"
  }
};

const activities = [
  {
    title: "プログラミング",
    description: "Web開発、ゲーム開発、アプリ開発など",
    icon: "💻",
    items: ["Web開発", "ゲーム開発", "ツール開発", "アプリ開発"]
  },
  {
    title: "イラスト",
    description: "デジタルアートの創作",
    icon: "🎨",
    items: ["キャラクターデザイン", "イラスト制作", "背景画"]
  },
  {
    title: "音楽",
    description: "作曲、UTAU/合成音声など",
    icon: "🎵",
    items: ["UTAU/合成音声", "作曲", "編曲"]
  },
  {
    title: "デザイン",
    description: "UIデザイン、グラフィックデザインなど",
    icon: "✨",
    items: ["UIデザイン", "グラフィックデザイン", "ロゴデザイン"]
  }
];

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center text-slate-800">
      {/* ヒーローセクション */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-5xl px-4 sm:px-6 py-16 sm:py-20 text-center text-white relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-sansen mb-6 sm:mb-8 animate-slideUp">
              UniProject
            </h1>
            <p className="relative">
              <span className="block text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed tracking-wide font-sansjp opacity-0 animate-fadeInUp animation-delay-300">
                デジタル創作を通じて、
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed tracking-wide font-sansjp mt-2 sm:mt-0 opacity-0 animate-fadeInUp animation-delay-500">
                新しい可能性を探求し、つながりを育むコミュニティ
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ミッション・ビジョンセクション */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* ミッション */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-3">
                <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-blue-500 shadow-md shadow-blue-100">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <h3 className="text-lg sm:text-xl font-bold tracking-wide bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Mission
                </h3>
              </div>
              <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-blue-100">
                <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                  やりたいことをできる場所、一緒にできる人を見つける環境をつくり続ける
                </p>
              </div>
            </div>

            {/* ビジョン */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-3">
                <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-blue-500 shadow-md shadow-blue-100">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
                <h3 className="text-lg sm:text-xl font-bold tracking-wide bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Vision
                </h3>
              </div>
              <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-blue-100">
                <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                  人がここにいたいと思える組織体制を構築する
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-600/5 backdrop-blur-sm border border-blue-100">
              <p className="text-slate-600 text-xs sm:text-sm">
                私たちは、一人ひとりのクリエイティビティを大切にし、
                <br className="hidden sm:block" />
                共に成長できるコミュニティの実現を目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 名前の由来セクション */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-slate-800">
            名前の由来
          </h2>
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              「Uni」という言葉には「1つの」という意味が込められています。これには2つの想いが込められています：
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 mr-3 mt-1 text-sm sm:text-base">
                  1
                </span>
                <p className="text-sm sm:text-base">
                  <span className="font-medium">つながりの創造</span>
                  ：同じ界隈の人でも別の界隈の人でも、普段関わらない世界の人でも1つになれる場所を目指しています。
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 mr-3 mt-1 text-sm sm:text-base">
                  2
                </span>
                <p className="text-sm sm:text-base">
                  <span className="font-medium">独自性の追求</span>
                  ：デジタル創作界隈で唯一無二の存在となることを目指しています。
                </p>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-xs sm:text-sm text-slate-500 italic">
                UniProjectという名前は0期メンバー募集開始の5日前に決定しました。
                当初は「UntitledProject」という仮称でしたが、
                「名もなきもの」よりも「みんなで集まれる場所」という想いを大切にしたいという思いから、
                現在の名前に決定しました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 活動内容セクション */}
      <section className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-slate-800">
            活動内容
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl sm:text-4xl mr-4">
                    {activity.icon}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-slate-800">
                      {activity.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      {activity.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {activity.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-slate-600 text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 活動場所セクション */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-800">
            活動場所
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-12 text-slate-600">
            UniProjectでは、主にDiscordを使用して活動しています。
            <br className="hidden sm:block" />
            気軽に参加して、一緒にデジタル創作を楽しみましょう！
          </p>
          <Button<"button">
            href="/discord"
            disabled={false}
            className="flex flex-row items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#5865F2] text-white rounded-xl hover:bg-[#404EED] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span className="text-base sm:text-lg font-medium">
              Discordに参加する
            </span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
