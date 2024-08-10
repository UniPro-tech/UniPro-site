import { Metadata } from 'next';
import { Button } from '@/components/button';
import TwitterTimeline from '@/components/twitter-timeline';

export const metadata: Metadata = {
  title: '全国ネットのデジタルサークル - UniProject',
  description:
    '全国ネットのデジタルサークル『UniProject』の公式サイトです！普段の活動や、その他お知らせなどをお届けします。'
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black spac-y-0">
      <section id="first" className="flex space-y-3 items-center min-w-full p-20 flex-col bg-gray-100">
        <div className="mb-4">
          <a href="#first">
            <h3 className="text-2xl text-center">全国ネットのデジタルサークル</h3>
            <h2 className="text-6xl text-center">UniProject</h2>
          </a>
        </div>
        <p className="text-center">
          UniProjectは、プログラミング・音楽制作などのデジタル関連の創作活動を行うサークルです。
          <br />
          活動内容
          <br />
          Web開発/UTAU/デザイン/競技プログラミング/AI研究/映像制作/インフラ開発(サーバー構築など)/etc...
          <br />
        </p>
        <Button<'button'> href="#" disabled={true}>
          もっと詳しく(準備中)
        </Button>
      </section>
      <section id="announce" className="flex space-y-3 items-center min-w-full p-20 flex-col bg-gray-200">
        <h3 className="text-2xl">
          <a href="#announce">最新情報</a>
          <p>UniProjectの最新情報をお届けします。</p>
        </h3>
        <div className="flex space-x-3">
          <div className="flex flex-col w-1/2">
            <div>
              <h4>2024/08/09</h4>
              <p>UniProject公式サイト(工事中)をリリースしました。</p>
            </div>
          </div>
          <div className="w-1/2">
            <TwitterTimeline />
          </div>
        </div>
      </section>
      <section id="join" className="flex space-y-3 items-center min-w-full p-20 flex-col bg-gray-100">
        <h3 className="text-2xl">
          <a href="#join">参加しよう！</a>
        </h3>
        <div className="text-center flux flux-col space-y-3">
          <p>UniProjectに参加するには、以下のリンクから参加フォームにアクセスしてください。</p>
          <Button<'Link'> href="https://forms.gle/VsRQQ4LwnxvDUyH58" disabled={false}>
            参加フォーム
          </Button>
        </div>
      </section>
    </main>
  );
}
