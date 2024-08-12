import { NextPage } from "next";
import { Button } from "@/components/button";
import React from "react";

const AboutPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black space-y-0">
      <section className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl">工事中</h1>
        <div>ただいま準備中です...</div>
      </section>
    </main>
  );
};

export default AboutPage;
