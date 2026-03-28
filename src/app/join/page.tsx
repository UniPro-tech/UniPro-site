import { redirect } from "next/navigation";

const page = async () => {
  redirect("https://unique.uniproject.jp/signup");
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-xl font-sansjp">リダイレクト中...</h1>
    </main>
  );
};

export default page;
