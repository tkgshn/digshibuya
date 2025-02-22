/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head"
import { useSession } from "next-auth/react"
import React from "react"
import MainLayout from "../../../layouts/MainLayout"
import Navbar from "../../../layouts/Navbar"
import Button from "../../../components/Button"
import axios from "../../../utils/axios"
import Link from "next/link"
import { toast } from "react-toastify"
import { GrantDetailResponse } from "../../../types/grant"
import Image from "next/image"
import { useRouter } from "next/router"
import FundingBar from "../../../components/FundingBar"
import { useGrantCartStore } from "../../../utils/store"
import Location from "../../../components/icons/Location"
import Twitter from "../../../components/icons/Twitter"
import Website from "../../../components/icons/Website"
import BackButton from "../../../components/BackButton"

export default function GrantDetails() {
  const router = useRouter()
  const { grants, addToCart, removeFromCart } = useGrantCartStore()
  const { id } = router.query
  const { data: session, status } = useSession()
  const [data, setData] = React.useState<GrantDetailResponse>()
  const [loading, setLoading] = React.useState(false)

  const getGrant = () => {
    setLoading(true)
    axios
      .get(`/grants/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error({ err })
        toast.error(
          err.response?.data?.message || err.message || "Something went wrong",
          {
            toastId: "retrieve-grant-error",
          }
        )
      })
      .finally(() => setLoading(false))
  }

  React.useEffect(() => {
    if (id) {
      getGrant()
    }
  }, [id])

  return (
    <div>
      <Head>
        <title>
          {data?.name || "Grant not found"} | DigDAO マッチングドネーション
        </title>
        <meta
          name="description"
          content="マッチングドネーション（Quadratic Funding）でお気に入りのプロジェクトに寄付して、公共財を支援しよう"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Navbar className="p-0" location="grants">
          {/* <Link href="/grants/create">
            <Button>プロジェクト登録</Button>
          </Link> */}
          {/* <Link
            href="https://scrapbox.io/public-goods-funding/%E5%85%AC%E7%9B%8A%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%81%97%E3%81%A6%E6%8E%B2%E8%BC%89%E3%81%97%E3%81%9F%E3%81%84%E4%BA%BA%E3%81%B8"
            target="_blank"
          >
            <Button>プロジェクト登録</Button>
          </Link> */}
        </Navbar>
        <div className="flex flex-col items-start justify-center px-4 md:px-8 my-2 w-full">
          <BackButton href="/grants">プロジェクト一覧へ戻る</BackButton>
          {data ? (
            <div className="w-full flex flex-col md:flex-row my-10 gap-y-8">
              <div className="basis-full md:basis-3/5 md:px-4">
                <div className=" bg-white shadow-card py-8 px-6 rounded-xl ">
                  <div className="relative aspect-[3/2] lg:aspect-[3/1] h-full w-full rounded-lg overflow-hidden">
                    <Image
                      alt={data.name}
                      src={data.image}
                      fill
                      className="aspect-[3/2] lg:aspect-[3/1] object-cover"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <p className="font-bold text-2xl mb-3 mt-6">
                        {data.name}
                      </p>
                      <div className="flex flex-row items-center">
                        <Location className="fill-[#193154]" />
                        <p className="ml-2">{data.location}</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                      <Link href={data.website}>
                        <Website className="fill-[#193154]" />
                      </Link>
                      <Link href={`https://twitter.com/${data.twitter}`}>
                        <Twitter className="fill-[#193154]" />
                      </Link>
                    </div>
                  </div>
                  <p className="mt-12">
                    {data.description.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
              <div className="basis-full md:basis-2/5 px-4 flex flex-col items-center gap-4">
                <div className="flex flex-col w-full bg-white shadow-card py-8 px-6 rounded-xl max-w-sm">
                  <FundingBar
                    className="mb-4"
                    value={data.amountRaised}
                    max={data.fundingGoal}
                  />
                  <p className="font-bold text-2xl">
                    {data.amountRaised.toLocaleString("ja-JP")}円
                  </p>
                  <p className="mb-2">
                    目標金額 {data.fundingGoal.toLocaleString("ja-JP")}円
                  </p>

                  <p className="font-bold text-2xl">
                    {data.contributions.length.toLocaleString("ja-JP")}
                  </p>
                  <p className="mb-4">寄付者</p>
                  {!data.verified && (
                    <div className="badge badge-error mb-4">
                      認証されていないプロジェクト
                    </div>
                  )}
                  {grants.find((grant) => grant.id === id) ? (
                    <Button
                      width="full"
                      className="btn-error"
                      onClick={() => removeFromCart(id as string)}
                    >
                      カートから削除
                    </Button>
                  ) : (
                    <div
                      className={
                        data.verified ? "" : "tooltip tooltip-secondary"
                      }
                      data-tip="This grant is unverified, therefore you cannot
                    donate to it."
                    >
                      {!data.team.some(
                        (team) => team.email === session?.user?.email
                      ) && (
                        <Button
                          width="full"
                          // className=""
                          // disabled={!data.verified}
                          // onClick={() => addToCart(data)}
                          className="bg-gray-400 text-white cursor-not-allowed"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          disabled={true}
                        >
                          {/* カートに入れる */}
                          終了しました
                        </Button>
                      )}
                    </div>
                  )}
                </div>
                {data.team.some(
                  (team) => team?.id === (session?.user as any)?.id
                ) && (
                  <div className="flex flex-col w-full bg-white shadow-card py-8 px-6 rounded-xl max-w-sm">
                    <p className="font-bold mb-4">Looking to make changes?</p>
                    <Link href={`/grants/${id}/edit`}>
                      <Button width="full" className="">
                        プロジェクトを編集する
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col md:flex-row my-10 gap-y-8 items-center justify-center">
              <p className="font-bold text-xl text-center">
                プロジェクトが見つかりません
              </p>
            </div>
          )}
        </div>
      </MainLayout>
    </div>
  )
}
