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

        <div className="flex flex-col w-full items-center justify-center min-h-[100vh] text-center px-2 pt-32 md:pt-0">
          {/* <Fade bottom distance="15px"> */}
          <h1 className="font-bold text-3xl md:text-5xl max-w-2xl md:leading-snug">
            違いを力に変える、新しいアーティスト支援の形
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            あなたの100円の支援が1,000円になってアーティストに届く。
            あなたの寄付に対してDIG SHIBUYAが金額を上乗せ！
          </p>
          {/* </Fade> */}
          <div className="flex justify-center items-center mt-8">
            <img src="/assets/fitcurve.gif" alt="fitcurve" width="400" height="200" />
          </div>

          <div className="flex w-full items-center justify-center mt-12 mb-24">
            {/* <Button onClick={() => router.push("/get-started")}> */}
            <Button onClick={() => router.push("/grants")}>
              支援するアーティストを探す
            </Button>
          </div>
        </div>




        <div className="relative flex w-full -translate-y-[57%]">
          <Image
            src="/assets/abstract.svg"
            width={1920}
            height={384}
            alt="abstract"
            className="scale-200 md:scale-150 lg:scale-125 w-screen"
          />
        </div>

        <div className="relative flex flex-col items-center w-full md:-translate-y-[30%] translate-y-10">

          <div className="bg-[#0055B2] text-white p-6 mt-8 rounded-lg w-full max-w-[350px] md:max-w-[400px] lg:max-w-[500px] text-left">
            {/* 背景色は青にしている */}
            <p>
              DIG SHIBUYAではアーティストへの制作資金提供のほか、来場者による寄付を元にボーナス資金を分配する「参加型予算」という仕組みを実験しています。
            </p>
            <p className="mt-4">
              一人の人に愛される（商業的にうまくいく）アーティストよりも、多くの人に（少額であっても）愛されるアーティストに寄付が流通する仕組みです。
            </p>
          </div>
        </div>


        <section className="px-8 md:px-18 lg:px-36 mt-16">
          <h2 className="font-bold text-3xl md:text-5xl mt-12 lg:mt-0 mb-5">
            100円の寄付が1,000円を動かす理由
          </h2>
          <p className="mb-2 max-w-2xl;
">
            {`DIG SHIBUYAではアーティストへの資金提供の一環として、「参加型予算」の実験を行っています。有識者である一部の人たちが選んだアーティストだけが資金を受け取るのではなく、みんなの寄付に応じて資金を分配する試みです。`}
          </p>
        </section>


        <div className="flex justify-center items-center m-8">
          <img src="/assets/userflow.svg" alt="userflow.svg" width="600" height="600" />
        </div>

        <section className="px-8 md:px-18 lg:px-36">
          <div className="flex flex-wrap w-full items-center justify-center gap-x-12 gap-y-8">
            <div className="flex flex-col h-[400px] w-full max-w-[350px] px-9 py-12 bg-white rounded-2xl border border-[#D9A596]">
              <p className="font-bold text-3xl mb-10">寄付を行う</p>
              <p>
                お気に入りのアーティスト・作品を見つけたら、寄付してみましょう！
                <br></br>
                あなたの支援に対して、（アーティストが受け取った金額・人数に応じて）金額が上乗せされます。
              </p>
            </div>
            <div className="flex flex-col h-[400px] w-full max-w-[350px] px-9 py-12 bg-white rounded-2xl border border-[#D9A596]">
              <p className="font-bold text-3xl mb-10">DIG SHIBUYAが金額を上乗せ</p>
              <p>
                今回は、合計100万円分の上乗せ資金を用意しました！このお金は、あなたの寄付に応じて分配されます。
              </p>
            </div>
            <div className="flex flex-col h-[400px] w-full max-w-[350px] px-9 py-12 bg-white rounded-2xl border border-[#D9A596]">
              <p className="font-bold text-3xl mb-10">支援がアーティストへ届く</p>
              <p>
                今までは一部の審査員やお金持ちに認められる作品を作ることがアーティストにとってお金を得る方法でした。
                <br></br>
                しかし、この実験ではそれぞれのアーティストは寄付に応じて分配された資金を受け取ることができます。
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center mt-16 mb-28">
            {/* <Button onClick={() => router.push("/get-started")}> */}
            <Button onClick={() => router.push("/grants")}>
              支援するアーティストを探す
            </Button>
          </div>
        </section>

        <section className="px-8 md:px-18 lg:px-36">
          <h2 className="font-bold text-3xl md:text-5xl mt-12 lg:mt-0 mb-5">
            参加型予算の仕組み
          </h2>
          <p className="mb-2 max-w-2xl;
">
            {`それぞれのアーティストが受け取った額と支援者の数によって上乗せ金額が計算されます。以下は簡単なシュミレーションです、DIG SHIBUYAが総額100万円の上乗せ予算を持ち、4つのアーティストがいた場合どのようにして上乗せ額が変わるでしょうか。実際に支援の額を入力してみて試してみてください！`}
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
                    Quadratic Fundingによる分配
                  </p>
                  <p>
                    参加型予算の計算にQuadratic
                    Fundingメカニズムを用いることで、幅広いコミュニティから支持されているアート作品が多くの助成金を受け取ることができます。
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
                  <p className="font-bold text-2xl">民主的な資金分配</p>

                  <p>
                    政府や自治体が分配先を決める従来の助成金とは違い、Quadratic
                    Fundingでは資金プールの分配先・額はあなたたちの寄付によって決定されます。
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
                  <p className="font-bold text-2xl">
                    多くの人に愛される作品が報われる
                  </p>
                  <p>
                    「ある作品へ寄付した人の数」は、各個人の寄付額より分配金額に大きな影響を与えるように設計されています。
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
                  <p className="font-bold text-2xl">
                    90億円以上の分配実績を持つメカニズム
                  </p>
                  <p>
                    QFは民主的な資金分配の方法として、すでに十分な実績を持っています。Ethereum上の公共財プロジェクトに$60M+の資金分配をしたり、UNICEFからNGOへ資金分配する方法として選ばれています。
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
              Quadratic Fundingについてより詳しく{" "}
              <ArrowTopRightIcon className="ml-2" />
            </Button>
          </div>
        </section>

        <section className="flex flex-col w-full items-center justify-center">
          <h2 className="font-bold text-3xl md:text-5xl mb-8">
            実験パートナー
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
            “
          </p>
          <div className="flex flex-col">
            <p className="font-bold text-4xl mb-5 z-[2] max-w-4xl">
              参加型予算により、従来の助成金では見逃されていたアイデアが評価されるようになり、地域社会全体の創造力や文化的価値の底上げにつながると期待しています。
            </p>
            <p>宮本 安芸子, 渋谷区 産業観光文化部</p>
          </div>
        </section>
        <section className="flex flex-col w-full items-center justify-center mt-24">
          <h3 className="font-bold text-3xl lg:text-5xl mb-14 text-center">
            アーティストの一例
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
            あなたの寄付がアーティストを支える
          </h3>
          <p className="mt-3 mb-10 text-lg md:text-xl">
            100円からでもアーティストに資金を提供できます。
          </p>
          {/* <Button onClick={() => router.push("/get-started")}> */}
          <Button onClick={() => router.push("/grants")}>
            支援するアーティストを探す
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
                  プロジェクトについて
                </p>
              </Link>
              {/* <p className="font-sm">プレスリリース</p> */}
              <Link href="https://www.digdao.jp/" target="_blank">
                <p className="font-sm cursor-pointer">実施団体について</p>
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
              <p className="font-bold text-xl">法に関すること</p>
              <Link
                href="https://github.com/tkgshn/digshibuya/blob/main/terms.md"
                target="_blank"
              >
                <p className="font-sm cursor-pointer">利用規約</p>
              </Link>
              <Link
                href="https://github.com/tkgshn/digshibuya/blob/main/policy.md"
                target="_blank"
              >
                <p className="font-sm cursor-pointer">プライバシーポリシー</p>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
