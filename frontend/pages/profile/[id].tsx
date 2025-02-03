import Head from "next/head";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import { UserProfile } from "../../types/user";
import * as Tabs from "@radix-ui/react-tabs";
import GrantCard from "../../components/grant/GrantCard";
import Link from "next/link";
import Button from "../../components/Button";
import Navbar from "../../layouts/Navbar";
import DonationList from "../../components/grant/DonationList";
import PoolDonationList from "../../components/pool/DonationList";
import PoolCard from "../../components/pool/PoolCard";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = React.useState<UserProfile>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`/users/profile/${id}`)
        .then((res: any) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error(err);
          toast.error(
            err.response?.data?.message ||
            err.message ||
            "エラーが発生しました",
            {
              toastId: "user-profile",
            }
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>{data ? data.name : "User Profile"} | DigDAO マッチングドネーション</title>
        <meta
          name="description"
          content="マッチングドネーション（Quadratic Funding）でお気に入りのプロジェクトに寄付して、公共財を支援しよう."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-w-screen min-h-screen w-full h-full overflow-x-hidden text-sg-secondary">
        <Navbar className="p-4 absolute" location="grants">
          {/* <Link href="/grants/create">
            <Button>プロジェクト登録</Button>
          </Link> */}
          {/* <Link href="https://scrapbox.io/public-goods-funding/%E5%85%AC%E7%9B%8A%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%81%97%E3%81%A6%E6%8E%B2%E8%BC%89%E3%81%97%E3%81%9F%E3%81%84%E4%BA%BA%E3%81%B8" target="_blank">
            <Button>プロジェクト登録</Button>
          </Link> */}
        </Navbar>
        {loading ? (
          <></>
        ) : (
          <div className="w-full flex flex-col md:flex-row min-h-screen">
            {data ? (
              <>
                <div className="basis-full shrink-0 md:basis-1/3 lg:basis-1/4 bg-sg-gradient px-8 sm:px-12 md:px-14 pt-24 pb-6 rounded-b-xl overflow-hidden">
                  <p className="font-bold text-2xl text-sg-accent">プロフィール</p>
                  <div className="max-w-[8rem] aspect-square rounded-full relative overflow-hidden my-6">
                    <Image fill src={data.image} alt={data.name} />
                  </div>
                  <p className="font-bold text-xl text-sg-accent">
                    {data.name}
                  </p>
                  <p className="text-xl">{data.email}</p>
                  <p className="mt-4 my-12 line-clamp-4">{data.bio}</p>

                  <p className="font-bold text-xl text-sg-accent">
                    アーティストへの寄付
                  </p>
                  <p className="text-xl mb-5">
                    {" "}
                    {data.totalDonated.toLocaleString("ja-JP", {
                      maximumFractionDigits: 0,
                    })}{" "}
                    円
                  </p>

                  {data.totalContributed ? (
                    <>
                      <p className="font-bold text-xl text-sg-accent">
                        資金プールへの寄付
                      </p>
                      <p className="text-xl mb-5">
                        {" "}
                        {data.totalContributed.toLocaleString("ja-JP", {
                          maximumFractionDigits: 0,
                        })}{" "}
                        円
                      </p>
                    </>
                  ) : (
                    <></>
                  )}


                  <p className="font-bold text-xl text-sg-accent">
                    自分が受け取った寄付
                  </p>
                  <p className="text-xl mb-5">
                    {" "}
                    {data.totalRaised.toLocaleString("ja-JP", {
                      maximumFractionDigits: 0,
                    })}{" "}
                    円
                  </p>



                  {data.totalPooled ? (
                    <>
                      <p className="font-bold text-xl text-sg-accent">
                        総受取額（寄付+QF上乗せ）
                      </p>
                      <p className="text-xl mb-5">
                        {" "}
                        {data.totalPooled.toLocaleString("ja-JP", {
                          maximumFractionDigits: 0,
                        })}{" "}
                        円
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="basis-full shrink-0 md:basis-2/3 lg:basis-3/4 px-8 sm:px-12 md:px-14 py-20 md:pt-24">
                  <Tabs.Root
                    className="flex flex-col w-full items-center md:items-start"
                    defaultValue="donations"
                  >
                    <Tabs.List
                      className="flex flex-row gap-x-11 font-bold text-xl mb-11"
                      aria-label="View your donations or grants"
                    >
                      <Tabs.Trigger
                        className="data-[state=active]:text-sg-accent data-[state=active]:underline"
                        value="donations"
                      >
                        アーティストへの寄付
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        className="data-[state=active]:text-sg-accent data-[state=active]:underline"
                        value="grants"
                      >
                        作成したプロジェクト
                      </Tabs.Trigger>
                      {data.contributions && data.contributions.length > 0 && (
                        <Tabs.Trigger
                          className="data-[state=active]:text-sg-accent data-[state=active]:underline"
                          value="contributions"
                        >
                          資金プールへの寄付
                        </Tabs.Trigger>
                      )}
                      {data.pools && data.pools.length > 0 && (
                        <Tabs.Trigger
                          className="data-[state=active]:text-sg-accent data-[state=active]:underline"
                          value="pools"
                        >
                          作成した資金プール
                        </Tabs.Trigger>
                      )}
                    </Tabs.List>
                    <Tabs.Content
                      className="flex flex-col gap-10"
                      value="donations"
                    >
                      {data.donations.length > 0 ? (
                        data.donations.map((donation) => (
                          <DonationList
                            grant={donation.grant}
                            contribution={donation}
                            key={donation.id}
                            onClick={() =>
                              router.push(`/grants/${donation.grantId}`)
                            }
                          />
                        ))
                      ) : (
                        <p className="text-xl text-center">
                          寄付プールへの寄付はありません
                        </p>
                      )}
                    </Tabs.Content>
                    <Tabs.Content
                      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
                      value="grants"
                    >
                      {data.grants.length > 0 ? (
                        data.grants.map((grant) => (
                          <GrantCard
                            grant={grant}
                            key={grant.id}
                            onClick={() => router.push(`/grants/${grant.id}`)}
                            hideButton
                          />
                        ))
                      ) : (
                        <p className="text-xl text-center">
                          作成したプロジェクトはありません
                        </p>
                      )}
                    </Tabs.Content>
                    <Tabs.Content
                      className="flex flex-col gap-10"
                      value="contributions"
                    >
                      {data.contributions ? (
                        data.contributions.map((contribution) => (
                          <PoolDonationList
                            contribution={contribution}
                            key={contribution.id}
                            onClick={() =>
                              router.push(
                                `/pools/${contribution.matchingRoundId}`
                              )
                            }
                          />
                        ))
                      ) : (
                        <p className="text-xl text-center">
                          寄付はありません
                        </p>
                      )}
                    </Tabs.Content>
                    <Tabs.Content
                      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
                      value="pools"
                    >
                      {data.pools ? (
                        data.pools.map((pool) => (
                          <PoolCard
                            pool={pool as any}
                            key={pool.id}
                            onClick={() => router.push(`/pools/${pool.id}`)}
                            hideButton
                          />
                        ))
                      ) : (
                        <p className="text-xl text-center">
                          寄付プールはありません
                        </p>
                      )}
                    </Tabs.Content>
                  </Tabs.Root>
                </div>
              </>
            ) : (
              <div className="flex w-full h-full items-center justify-center min-h-screen">
                <h1 className="font-bold text-2xl">User profile not found</h1>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
