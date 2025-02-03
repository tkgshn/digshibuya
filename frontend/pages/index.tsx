import Head from "next/head"
import { useSession } from "next-auth/react"
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react"
import React from "react"
import Image from "next/image"
import LandingNavbar from "../layouts/landing/LandingNavbar"
import Button from "../components/Button"
import { useRouter } from "next/router"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import GrantCard from "../components/grant/GrantCard"
import { GrantResponse } from "../types/grant"
import axios from "../utils/axios"
import { toast } from "react-toastify"
import Fade from "react-reveal/Fade"
import Github from "../components/icons/Github"
import Twitter from "../components/icons/Twitter"
import Link from "next/link"
import GrantSimulator from "../layouts/landing/GrantSimulator";

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  const [data, setData] = React.useState<GrantResponse[]>([])
  const [loading, setLoading] = React.useState(false)
  const { getData } = useVisitorData({ tag: "signin" }, { immediate: false })

  React.useEffect(() => {
    const saveFingerprintData = async () => {
      getData().then((res) => {
        fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user: res.visitorId,
          }),
        })
      })
    }

    if (session) {
      saveFingerprintData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const getGrants = () => {
    setLoading(true)
    axios
      .get("/grants")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error({ err })
        toast.error(
          err.response?.data?.message || err.message || "Something went wrong",
          {
            toastId: "retrieve-grants-error",
          }
        )
      })
      .finally(() => setLoading(false))
  }

  React.useEffect(() => {
    getGrants()
  }, [])

  return (
    <div>
      <Head>
        <title>DIGSHIBUYA 参加型寄付</title>
        <meta
          name="description"
          content="マッチングドネーション（Quadratic Funding）でお気に入りのプロジェクトに寄付して、公共財を支援しよう"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-w-screen min-h-screen w-full h-full overflow-x-hidden bg-white">
        {/* 一旦背景を白に */}
        <LandingNavbar className="z-[2] absolute top-0 left-0" />

        <div className="flex flex-col w-full items-center justify-center min-h-[100vh] text-center px-2 pt-48 md:pt-24">
          {/* <Fade bottom distance="15px"> */}
          <h1 className="font-bold text-3xl md:text-5xl max-w-2xl md:leading-snug">
            テクノロジーを活用した参加型アーティスト支援プロジェクト<br />
            Participatory Artist Support Project
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            あなたの寄付と投票の結果に基づきDIG SHIBUYAが追加支援します。<br />
            Your donations and votes will be matched by DIG SHIBUYA.
          </p>
          {/* </Fade> */}
          <div className="flex justify-center items-center mt-8">
            <Image
              src="/assets/fitcurve.gif"
              alt="fitcurve"
              width={400}
              height={200}
            />
          </div>
          <div className="flex w-full items-center justify-center mt-12 mb-24">
            {/* <Button onClick={() => router.push("/get-started")}> */}
            <Button onClick={() => router.push("/grants")}>
              支援先を探す / Find Artist Collective
            </Button>
          </div>
        </div>




        <div className="relative flex w-full -translate-y-[57%] pointer-events-none">
          <Image
            src="/assets/abstract.svg"
            width={1920}
            height={384}
            alt="abstract"
            className="scale-200 md:scale-150 lg:scale-125 w-screen"
          />
        </div>

        <div className="relative flex flex-col items-center w-full md:-translate-y-[30%] translate-y-10">

          <div className="bg-[#0055B2] text-white p-6 mt-8 rounded-lg w-full max-w-[350px] md:max-w-[400px] lg:max-w-[600px] text-left">
            {/* 背景色は青にしている */}
            <div className="space-y-4">

              <p className="text-lg">
                期間中、12の公募プログラムの作品を見ていただき、応援したい団体に寄付をお願いします. 1票100円から投票及び寄付することができます.
              </p>
              <p className="mt-4 text-lg">
                こちらの企画はクオドラディック・ファンディングというテクノロジーを使った分配の仕組みを使っています.
              </p>
              <p className="text-lg">
                なお、本プロジェクトの資金の一部は、ブロックチェーンの非営利団体CardanoのCatalystというグラントプログラムより支援いただいています.
              </p>
              <hr className="my-6 border-gray-300" />
              <div className="space-y-2">

                <p className="text-base">
                  Traditionally, subsidies have been decided by the decisions of panel judges, but with this participatory subsidy system, subsidies will be distributed equally in line with your donations (votes), so your will can be reflected in the subsidies.
                </p>
              </div>
              <p className="text-base mt-2">
                This project uses a technology-based distribution system called quadratic funding.
              </p>
              <p className="text-base mt-2">
                In addition, the matching subsidy this time is also being funded by a grant program called Catalyst run by Cardano, a blockchain non-profit organization.
              </p>
            </div>
          </div>
        </div>


        <section className="px-8 md:px-18 lg:px-36 mt-16">
          <h2 className="font-bold text-3xl md:text-5xl mt-12 lg:mt-0 mb-5">
            100円の寄付が1000円を動かす理由<br />Why a 100 yen donation can move 1,000 yen?
          </h2>
          <div className="mb-2">
            <p>
              これまでの補助金のあり方は、選定する一部の方の決断で決まっていましたが、今回の参加型のアーティスト支援では、皆さんの寄付（投票）に連動して分配されるので、配分に皆さんの意思を反映することができます.
            </p>
            <p className="mt-2">
              Traditionally, subsidies have been decided by the decisions of panel judges, but with this participatory subsidy system, subsidies will be distributed equally in line with your donations (votes), so your will can be reflected in the subsidies.
            </p>
          </div>
        </section>


        <div className="flex justify-center items-center m-8">
          <Image src="/assets/DIGSHIBUYA_QF_userflow.svg" alt="DIGSHIBUYA_QF_userflow" width={600} height={600} />
        </div>

        <section className="px-8 md:px-18 lg:px-36">
          <div className="flex flex-wrap w-full items-center justify-center gap-x-12 gap-y-8">
            <div className="flex flex-col min-h-[400px] w-full max-w-[350px] px-9 py-12 bg-white rounded-2xl border border-[#D9A596]">
              <p className="font-bold text-3xl mb-6">寄付を行う / Make a Donation</p>
              <div className="space-y-2">
                <p className="text-lg">
                  公募プログラムの展示をみたら、寄付（投票）をしましょう。
                </p>
                <p className="text-lg">
                  <strong>Make a donation</strong><br />
                  After viewing the exhibition of the open-call program of DIG SHIBUYA, donate (vote) through this site.
                </p>
              </div>
            </div>
            <div className="flex flex-col min-h-[400px] w-full max-w-[350px] px-9 py-12 bg-white rounded-2xl border border-[#D9A596]">
              <p className="font-bold text-3xl mb-6">DIG SHIBUYAの資金を上乗せ / Matching Funds from DIG SHIBUYA</p>
              <div className="space-y-2">
                <p className="text-lg">
                  寄付数ｘ投票人数に連動して、アーティスト団体への支援金100万円の分配額が決まります。
                </p>
                <p className="text-lg">
                  <strong>Subsidies from DIG SHIBUYA will be added on top of this.</strong><br />
                  The amount of the 1 million yen subsidy to be distributed to the artist collective will be determined based on the number of donations x the number of votes.
                </p>
              </div>
            </div>
            <div className="flex flex-col min-h-[400px] w-full max-w-[350px] px-9 py-12 bg-white rounded-2xl border border-[#D9A596]">
              <p className="font-bold text-3xl mb-6">みなさんの応援がアーティストへ / Your Support Reaches the Artists</p>
              <div className="space-y-2">
                <p className="text-lg">
                  特定の審査委員が決めた配分ではなく、みなさんの寄付と応援したい想いが、アーティストに届きます。
                </p>
                <p className="text-lg">
                  <strong>Your support goes to the artists</strong><br />
                  The artists will be reached not by subsidies decided by a panel of judges, but by your donations and your desire to support them.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center mt-16 mb-28">
            {/* <Button onClick={() => router.push("/get-started")}> */}
            <Button onClick={() => router.push("/grants")}>
              支援先を探す / Find Artist Collective
            </Button>
          </div>
        </section>

        <section className="px-8 md:px-18 lg:px-36">
          <h2 className="font-bold text-3xl md:text-5xl mt-12 lg:mt-0 mb-5">
            参加型予算の仕組み / Participatory Budgeting Mechanism
          </h2>
          <p className="mb-2 max-w-2xl;">
            {`それぞれのアーティストが受け取った額と支援者の数によって上乗せ金額が計算されます。以下は簡単なシュミレーションです、DIG SHIBUYAが総額100万円の上乗せ予算を持ち、4つのアーティストがいた場合どのようにして上乗せ額が変わるでしょうか。実際に支援の額を入力してみて試してみてください！`}
            <br />
            {`The amount of additional funding is calculated based on the amount received by each artist and the number of supporters. Below is a simple simulation. If DIG SHIBUYA has a total additional budget of 1 million yen and there are four artists, how will the additional amount change? Try entering the amount of support to see for yourself!`}
          </p>

          <GrantSimulator />
          <div className="flex w-full items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
              <div className="flex flex-col md:flex-row h-full w-full px-8 py-14 md:items-center rounded-2xl bg-white border border-[#D9A596] gap-6">
                <div className="relative flex w-full h-full flex-grow items-stretch min-h-[150px] md:flex-1">
                  <Image
                    src="/assets/quadratic-funding.png"
                    alt="Quadratic funding"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-bold text-2xl">
                    Quadratic Fundingによる分配 / Distribution through Quadratic Funding
                  </p>
                  <p>
                    参加型予算の計算にQuadratic Fundingメカニズムを用いることで、幅広いコミュニティから支持されているアート団体が多くの助成金を受け取ることができます。
                  </p>
                  <p className="text-lg">
                    <strong>Distribution through Quadratic Funding</strong><br />
                    Using the Quadratic Funding mechanism for participatory budget calculations, art collectives that have broad community support can receive more grant funding.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row h-full w-full px-8 py-14 md:items-center rounded-2xl bg-white border border-[#D9A596] gap-6">
                <div className="relative flex w-full h-full min-h-[150px] md:flex-1">
                  <Image
                    src="/assets/matching-pool.png"
                    alt="matching-pool"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-bold text-2xl">民主的な資金分配 / Democratic Distribution of Funds</p>
                  <p>
                    政府や自治体が分配先を決める従来の助成金とは違い、Quadratic Fundingでは資金プールの分配先・額はあなたたちの寄付によって決定されます。
                  </p>
                  <p className="text-lg">
                    <strong>Democratic distribution of funds</strong><br />
                    Unlike traditional grants, where governments or local authorities decide where grants are distributed, with Quadratic Funding, the amount and recipients of the pool of funds are decided by your donations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row h-full w-full px-8 py-14 md:items-center rounded-2xl bg-white border border-[#D9A596] gap-6">
                <div className="relative flex w-full h-full min-h-[150px] md:flex-1">
                  <Image
                    src="/assets/contributors.png"
                    alt="contributors"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-bold text-2xl">多くの人に愛される作品が報われる / Works that are Loved by Many Are Rewarded</p>
                  <p>
                    「ある作品へ寄付した人の数」は、各個人の寄付額より分配金額に大きな影響を与えるように設計されています。
                  </p>
                  <p className="text-lg">
                    <strong>Works that are loved by many people are rewarded</strong><br />
                    The number of people who donate to a particular work is designed to have a greater impact on the amount distributed than the amount of each individual donation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row h-full w-full px-8 py-14 md:items-center rounded-2xl bg-white border border-[#D9A596] gap-6">
                <div className="relative flex w-full h-full min-h-[150px] md:flex-1">
                  <Image
                    src="/assets/raised.png"
                    alt="raised"
                    fill
                    className="object-contain scale-150"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-bold text-2xl">90億円以上の分配実績を持つメカニズム / A Mechanism with a Track Record of Distributing Over $60M</p>
                  <p>
                    QFは民主的な資金分配の方法として、すでに十分な実績を持っています。Ethereum上の公共財プロジェクトに$60M+の資金分配をしたり、UNICEFからNGOへ資金分配する方法として選ばれています。
                  </p>
                  <p className="text-lg">
                    <strong>A mechanism with a track record of distributing over $60M</strong><br />
                    QF already has a proven track record as a democratic method of distributing funds, having distributed $60M+ to public goods projects on Ethereum and been chosen by UNICEF to distribute funds to NGOs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end mt-14 mb-28">
            <Button
              style="ghost"
              onClick={() =>
                window.open(
                  "https://mirror.xyz/0xFEd3A62567FCEDfD10f56467EA6Db8c39c313606/sI97HdGBKr0ROPouXT5iKMJZHlrDm2TB45Ti4VkmLo8",
                  "_blank"
                )
              }
            >
              Quadratic Fundingについてより詳しく / Learn more about Quadratic Funding{" "}
              <ArrowTopRightIcon className="ml-2" />
            </Button>
          </div>
        </section>

        <section className="flex flex-col w-full items-center justify-center">
          <h2 className="font-bold text-3xl md:text-5xl mb-8">
            partner
          </h2>
        </section>
        <div className="flex flex-wrap justify-center mb-16">
          <div className="flex justify-center items-center m-8">
            <Image
              src="/assets/Plurality Tokyo_White.png"
              width={200}
              height={100}
              alt="Plurality Tokyo"
            />
          </div>
          <div className="flex justify-center items-center m-8">
            <Image
              src="/assets/shibuya.png"
              width={200}
              height={100}
              alt="渋谷区"
            />
          </div>
          <div className="flex justify-center items-center m-8">
            <Image
              src="/assets/project_catalyst.png"
              width={240}
              height={120}
              alt="Project Catalyst"
            />
          </div>
        </div>

        <section className="flex flex-row w-full justify-center bg-sg-primary px-8 md:px-24 lg:px-48 xl:px-96 py-28 gap-x-4">
          <p className="font-bold text-[128px] text-[#99BCD1] leading-none -translate-y-6 absolute left-0 md:relative">
            "
          </p>
          <div className="flex flex-col">
            <p className="font-bold text-4xl mb-5 z-[2] max-w-4xl">
              参加型予算により、従来の助成金では見逃されていたアイデアが評価されるようになり、地域社会全体の創造力や文化的価値の底上げにつながると期待しています。
            </p>
            <p className="font-bold text-4xl mb-5 z-[2] max-w-4xl">
              We hope that participatory budgeting will enable ideas that would be overlooked through traditional grants to be recognized, thereby raising the level of creativity and cultural value throughout the local community.
            </p>
            <p>宮本 安芸子, 渋谷区 産業観光文化部</p>
            <p>Akiko Miyamoto, Director of Industry, Tourism and Cultural Division, Shibuya City Office</p>
          </div>
        </section>
        <section className="flex flex-col w-full items-center justify-center mt-24">
          <h3 className="font-bold text-3xl lg:text-5xl mb-14 text-center">
            アーティストの一例 / Example Artists
          </h3>
          <div className="flex flex-col md:flex-row gap-12">
            {data &&
              data
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map((grant) => (
                  <GrantCard
                    grant={grant}
                    key={grant.id}
                    hideButton
                    onClick={() => router.push(`/grants/${grant.id}`)}
                  />
                ))}
          </div>
        </section>
        <section className="flex flex-col w-full items-center justify-center text-center mt-40 px-8 md:px-24 lg:px-48 xl:px-96">
          <h3 className="font-bold text-3xl lg:text-5xl">
            あなたの寄付がアーティストを支える / Your Donations Support Artists
          </h3>
          <p className="mt-3 mb-10 text-lg md:text-xl">
            あなたの寄付がアーティストを支える<br />
            100円からでもアーティストに資金を提供できます。<br />
            Your donations support artists<br />
            Even just 100 yen can help fund an artist.
          </p>
          {/* <Button onClick={() => router.push("/get-started")}> */}
          <Button onClick={() => router.push("/grants")}>
            支援先を探す / Find Artist Collective
          </Button>
        </section>
        <div className="relative flex w-full my-16">
          <Image
            src="/assets/abstract-blue.svg"
            width={1920}
            height={384}
            alt="abstract"
            className="scale-200 md:scale-150 lg:scale-125 w-screen"
          />
        </div>
        <footer className="w-full flex flex-col md:flex-row px-6 py-8 md:px-28 md:py-16 gap-x-14 justify-between items-start">
          <div className="w-full flex-col">
            <Image
              src="/logo-dig-shibuya.png"
              alt="DIGSHIBUYA 参加型寄付"
              width={100}
              height={50}
              className="mb-8"
            />
            <div className="flex space-x-4">
              <Link
                href={"https://github.com/tkgshn/digshibuya/"}
                target="_blank"
              >
                <Github className="w-8 fill-sg-secondary cursor-pointer" />
              </Link>
              <Link href={"https://x.com/search?q=%23digshibuya&src=typed_query&f=top"} target="_blank">
                <Twitter className="w-8 fill-sg-secondary cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="flex flex-row flex-wrap lg:flex-nowrap gap-x-8 w-full justify-between">
            <div className="flex flex-col gap-y-3 mb-6">
              <Link
                href="https://scrapbox.io/public-goods-funding/DigDAO_%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0%E3%83%89%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
                target="_blank"
              >
                <p className="font-bold text-xl cursor-pointer">
                  プロジェクトについて / About the Project
                </p>
              </Link>
              {/* <p className="font-sm">プレスリリース</p> */}
              <Link href="https://www.digdao.jp/" target="_blank">
                <p className="font-sm cursor-pointer">実施団体について / About the Organization</p>
              </Link>
            </div>
            {/* <div className="flex flex-col gap-y-3 mb-6">
              <p className="font-bold text-xl">連絡先</p>
              <Link
                href="https://scrapbox.io/public-goods-funding/%E5%85%AC%E7%9B%8A%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%81%97%E3%81%A6%E6%8E%B2%E8%BC%89%E3%81%97%E3%81%9F%E3%81%84%E4%BA%BA%E3%81%B8"
                target="_blank"
              >
                <p className="font-sm cursor-pointer">
                  プロジェクトを掲載したい
                </p>
              </Link>
              <Link
                href="https://scrapbox.io/public-goods-funding/%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0%E3%83%89%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%BC%81%E7%94%BB%E3%81%97%E3%81%A6%E3%80%81%E3%82%A8%E3%82%B3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%82%92%E8%82%B2%E3%81%A6%E3%81%9F%E3%81%84%E4%BA%BA%E3%81%B8"
                target="_blank"
              >
                <p className="font-sm cursor-pointer">資金を提供したい</p>
              </Link>
            </div> */}
            <div className="flex flex-col gap-y-3 mb-6">
              <p className="font-bold text-xl">法に関すること / Legal Information</p>
              <Link
                href="https://github.com/tkgshn/digshibuya/blob/main/terms.md"
                target="_blank"
              >
                <p className="font-sm cursor-pointer">利用規約 / Terms of Service</p>
              </Link>
              <Link
                href="https://github.com/tkgshn/digshibuya/blob/main/policy.md"
                target="_blank"
              >
                <p className="font-sm cursor-pointer">プライバシーポリシー / Privacy Policy</p>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
