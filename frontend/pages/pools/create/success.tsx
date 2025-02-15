/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useSession } from "next-auth/react";
import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import PoolCard from "../../../components/pool/PoolCard";
import { usePoolStore } from "../../../utils/store";
import Copy from "../../../components/icons/Copy";
import { PoolResponse } from "../../../types/pool";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { TwitterShareButton, FacebookShareButton } from "react-share";

export default function CreatePoolSuccess() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { pool, clearGrantsFromPool, clearPool } = usePoolStore();
  const [createdPool, setCreatedPool] = React.useState<PoolResponse>();
  const shareInformation = React.useMemo(() => {
    if (typeof window !== undefined && createdPool) {
      return {
        url: `${process.env.NODE_ENV === "production"
          ? "https://donation.digdao.jp"
          : "http://localhost:3001"
          }/pools/${createdPool.id}`,
        message: `Check out my pool - ${createdPool.name}!\n`,
      };
    }
  }, [createdPool]);

  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/sign-in");
    }
  }, [status]);

  React.useEffect(() => {
    if (!pool) {
      router.push("/pools");
    }
    setCreatedPool(pool);
    clearGrantsFromPool();
    clearPool();
  }, []);

  return (
    <div>
      <Head>
        <title>マッチングファンドの作成 | DigDAO マッチングドネーション</title>
        <meta
          name="description"
          content="マッチングドネーション（Quadratic Funding）でお気に入りのプロジェクトに寄付して、公共財を支援しよう."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout className="h-full min-h-screen items-center justify-center bg-sg-gradient">
        <Image
          src={"/assets/texture.svg"}
          alt=""
          fill
          className="object-cover"
        />
        <div className="flex flex-row items-center justify-between w-full fixed top-0 px-2 py-4 lg:px-8 lg:py-6">
          <Link className="btn btn-ghost" href="/">
            <Image
              src="/logo-dig-shibuya.png"
              alt="DigDAO マッチングドネーション"
              width={103.55}
              height={32}
            />
          </Link>
          <Link className="flex flex-row items-center" href="/pools">
            <ArrowLeftIcon className="mr-2" />
            <p className="font-bold">Back to Home</p>
          </Link>
        </div>
        {createdPool && shareInformation && (
          <div className="flex flex-col items-center justify-center px-8 my-2 w-full z-10">
            <h1 className="font-bold text-2xl lg:text-3xl text-center">
              Congratulations!
            </h1>
            <p className="text-xl lg:text-2xl text-center">
              Your pool has been created.
            </p>
            <PoolCard
              pool={createdPool}
              onClick={() => router.push(shareInformation.url)}
              className="my-8"
              hideButton
            />
            <Button
              style="ghost"
              onClick={() => {
                navigator.clipboard.writeText(shareInformation.url);
              }}
              className="mb-5"
            >
              <Copy className="stroke-sg-secondary mr-2" />
              Copy link
            </Button>
            <div className="flex flex-row items-center justify-center w-full gap-6">
              <TwitterShareButton
                url={shareInformation.url}
                title={shareInformation.message}
              >
                <p className="btn font-bold lg:text-lg px-4 md:px-12 py-3 h-max rounded-full normal-case btn-outline btn-secondary w-max">
                  Share on Twitter
                </p>
              </TwitterShareButton>
              <FacebookShareButton
                url={shareInformation.url}
                quote={shareInformation.message}
              >
                <p className="btn font-bold lg:text-lg px-4 md:px-12 py-3 h-max rounded-full normal-case btn-outline btn-secondary w-max">
                  Share on Facebook
                </p>
              </FacebookShareButton>
            </div>
          </div>
        )}
      </MainLayout>
    </div>
  );
}
