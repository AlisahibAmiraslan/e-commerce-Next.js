import React from "react";
import { BannerTop, TopTen, BannerMiddle } from "../components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce</title>
      </Head>
      <BannerTop />
      <TopTen />
      <BannerMiddle />
    </>
  );
}
