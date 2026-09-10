import fs from "node:fs";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "公認プロジェクト制度について",
  description: "公認プロジェクト制度についての詳細情報を提供するページです。",
  openGraph: {
    title: "公認プロジェクト制度について",
    description: "公認プロジェクト制度についての詳細情報を提供するページです。",
    url: "https://www.uniproject.jp/certificate",
    siteName: "デジタル創作サークルUniProject",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UniPro_digital",
    title: "公認プロジェクト制度について",
    description: "公認プロジェクト制度についての詳細情報を提供するページです。",
  },
  alternates: {
    canonical: "https://www.uniproject.jp/certificate",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CertificatePage() {
  const MARKDOWN_FILE_PATH = `src/app/certificate/certificate.md`;
  const fileContent = await fs.promises.readFile(MARKDOWN_FILE_PATH, "utf-8");
  return (
    <main className="min-h-screen w-full bg-linear-to-br from-slate-50 via-white to-slate-50">
      {/* ヘッダーセクション */}
      <section className="w-full pt-28 pb-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold font-sansen tracking-wide text-white animate-slideUp">
              公認プロジェクト制度について
            </h1>
          </div>
        </div>
      </section>

      {/* 記事本文 */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/80 backdrop-blur-xs rounded-2xl shadow-lg p-8 animate-fadeIn">
          <div className="prose-lg prose-slate w-full">
            <div className="markdown">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {fileContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
