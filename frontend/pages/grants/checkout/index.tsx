/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head"
import { useSession } from "next-auth/react"
// import React from "react";
import MainLayout from "../../../layouts/MainLayout"
import Navbar from "../../../layouts/Navbar"
import Button from "../../../components/Button"
import Link from "next/link"
import { useRouter } from "next/router"
import { useGrantCartStore } from "../../../utils/store"
import Divider from "../../../components/Divider"
import { useHasHydrated } from "../../../utils/useHydrated"
import BackButton from "../../../components/BackButton"

import React from "react"
// import fetchMatchingAmountEstimate from "./success" //consoleで推定マッチング額を表示するためにimport
// import { number } from "zod";
import instance from "../../../utils/axios"
import { GrantCheckoutListItem } from "../../../components/grant/CheckoutItem"
import { QfBar } from "../../../components/grant/QfBar"

const fetchMatchingAmountEstimate = async (
  donationAmount: number,
  grantId: string
): Promise<any> => {
  try {
    const response = await instance.get(
      `/qf/estimate?donationAmount=${donationAmount}&grantId=${grantId}`
    )
    return response.data // マッチング金額の見積もりが返される
  } catch (error) {
    console.error("マッチング金額の見積もり取得エラー:", error)
    return 0 // エラーが発生した場合は0を返す
  }
}

const fetchMatchingAmountEstimates = async (
  donationAmounts: number[],
  grantIds: string[]
): Promise<any> => {
  try {
    const response = await instance.get(
      `/qf/estimate/multiple?donationAmounts=${donationAmounts.join(
        ","
      )}&grantIds=${grantIds.join(",")}`
    )
    return response.data // マッチング金額の見積もりが返される
  } catch (error) {
    console.error("マッチング金額の見積もり取得エラー:", error)
    return 0 // エラーが発生した場合は0を返す
  }
}

export default function GrantsCheckout() {
  const router = useRouter()
  const { grants, addToCart, removeFromCart, updateCart } = useGrantCartStore()
  const { id } = router.query
  // const { data: session, status } = useSession();
  // const [data, setData] = React.useState<any>();
  const { data: session, status } = useSession()
  const [initialMatchingAmount, setInitialMatchingAmount] = React.useState<{
    [grantId: string]: number
  }>()
  const [matchingAmount, setMatchingAmount] = React.useState<{
    [grantId: string]: number
  }>()
  const [overflowMatchingPool, setOverflowMatchingPool] = React.useState(false)
  const [checkoutData, setCheckoutData] = React.useState<any>()
  const [loading, setLoading] = React.useState(false)
  const hasHydrated = useHasHydrated()

  React.useEffect(() => {
    const fetchMatchingAmount = async () => {
      const initialMatchingAmounts = await fetchMatchingAmountEstimates(
        grants.map((_) => 0),
        grants.map((grant) => grant.id)
      )
      const estimatedMatchingAmounts = await fetchMatchingAmountEstimates(
        grants.map((grant) => grant.amount),
        grants.map((grant) => grant.id)
      )

      const _initialMatchingAmounts: { [grantId: string]: number } = {}

      for (const roundId of Object.keys(initialMatchingAmounts)) {
        const round = initialMatchingAmounts[roundId]
        for (const grantId of Object.keys(round.grants)) {
          if (typeof _initialMatchingAmounts[grantId] == "undefined") {
            _initialMatchingAmounts[grantId] = round.grants[grantId].qfAmount
          } else {
            _initialMatchingAmounts[grantId] =
              _initialMatchingAmounts[grantId] + round.grants[grantId].qfAmount
          }
        }
      }
      setInitialMatchingAmount(_initialMatchingAmounts)

      const _matchingAmounts: { [grantId: string]: number } = {}

      for (const roundId of Object.keys(estimatedMatchingAmounts)) {
        const round = estimatedMatchingAmounts[roundId]

        // ラウンドのマッチングプール金額をとってきて、推定値がそれを超えている場合はOverflow Trueにする。
        // UIでOverflowしているので実際の金額とは異なる旨を注意書きする。
        const { data: roundData } = await instance.get(`/pools/${roundId}`)
        setOverflowMatchingPool(
          round.totalFundsInPool > roundData.amountRaised + 10000
        )

        for (const grantId of Object.keys(round.grants)) {
          if (typeof _matchingAmounts[grantId] == "undefined") {
            _matchingAmounts[grantId] =
              round.grants[grantId].qfAmount -
              (grants.find((grant) => grant.id === grantId)?.amount || 0)
          } else {
            _matchingAmounts[grantId] =
              _matchingAmounts[grantId] +
              round.grants[grantId].qfAmount -
              (grants.find((grant) => grant.id === grantId)?.amount || 0)
          }
        }
      }
      setMatchingAmount(_matchingAmounts)
    }
    if (grants.length > 0) {
      fetchMatchingAmount()
    }
  }, [grants])

  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/sign-in")
    }
  }, [status])

  React.useEffect(() => {
    if (checkoutData) {
      router.push(checkoutData.url)
    }
  }, [checkoutData])

  const subtotal = React.useMemo(
    () => grants.reduce((acc, grant) => acc + grant.amount, 0),
    [grants]
  )

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await instance.post(
        "/grants/checkout",
        {
          grants: grants.map((grant) => ({
            id: grant.id,
            amount: grant.amount,
          })),
        },
        { withCredentials: true }
      )
      setCheckoutData(response.data)
      sessionStorage.setItem(
        "projectIds",
        JSON.stringify(grants.map((grant) => grant.id))
      )
      // マッチング金額をセッションストレージに保存
      sessionStorage.setItem(
        "totalMatchingAmount",
        totalMatchingAmount.toString()
      )
    } catch (err) {
      console.error("Checkout error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleAmountChange = async (id: string, amount: string) => {
    const num = parseFloat(amount)
    if (isNaN(num) || num < 0) {
      updateCart(id, 0)
    } else {
      updateCart(id, num)

      //ユーザーが金額を入力するたびに、マッチング金額の見積もりを取得
      try {
        const matchingAmount = await fetchMatchingAmountEstimate(num, id)
        console.log(`推定マッチング額: ${matchingAmount}`)
      } catch (error) {
        console.error("Error fetching matching amount:", error)
      }
    }
  }

  //推定マッチングの合計
  const totalMatchingAmount = React.useMemo(() => {
    return Math.round(
      grants.reduce((acc, grant) => {
        const matchedAmount =
          (matchingAmount?.[grant.id] || 0) -
          (initialMatchingAmount?.[grant.id] || 0)
        return acc + (matchedAmount > 0 ? matchedAmount : 0)
      }, 0)
    )
  }, [initialMatchingAmount, matchingAmount])

  return (
    <div>
      <Head>
        <title>カートの中身 | DigDAO マッチングドネーション</title>
        <meta
          name="description"
          content="マッチングドネーション（Quadratic Funding）でお気に入りのプロジェクトに寄付して、公共財を支援しよう."
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
        <div className="flex flex-col items-start justify-center md:px-8 my-2 w-full">
          <BackButton href="/grants">プロジェクト一覧へ戻る</BackButton>
          <h1 className="font-bold text-2xl my-10 px-4">
            カート内のプロジェクト
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-y-8">
            <div className="md:w-[50%] basis-full px-4">
              <div className="flex flex-col bg-white shadow-card py-8 px-6 rounded-xl gap-y-6">
                {hasHydrated &&
                  grants.map((grant, index) => (
                    <>
                      <GrantCheckoutListItem
                        grant={grant}
                        initialMatchingAmount={initialMatchingAmount}
                        matchingAmount={matchingAmount}
                        removeFromCart={removeFromCart}
                        handleAmountChange={handleAmountChange}
                      />
                      {index !== grants.length - 1 && (
                        <Divider
                          orientation="horizontal"
                          className="bg-sg-500"
                          key={index}
                        />
                      )}
                    </>
                  ))}
              </div>
            </div>
            <div className="md:w-[50%] basis-full px-4">
              <div className="flex flex-col bg-white shadow-card py-8 px-6 rounded-xl gap-y-6">
                <h2 className="font-bold text-xl mb-4">推定マッチング金額</h2>
                <QfBar
                  grants={grants}
                  initialMatchingAmount={initialMatchingAmount}
                  matchingAmount={matchingAmount}
                />
              </div>

              <div className="flex flex-col bg-white shadow-card py-8 px-6 rounded-xl mt-5">
                <p className="font-bold text-xl mb-8">合計金額</p>
                <p className="font-bold text-lg mb-3">
                  カートに入れたプロジェクト
                </p>
                <div className="flex flex-col mb-6 gap-y-3">
                  {hasHydrated &&
                    grants.map((grant) => (
                      <div
                        className="flex flex-row w-full items-center justify-between"
                        key={grant.id}
                      >
                        <div className="flex flex-1 justify-start overflow-hidden">
                          <p className="truncate">{grant.name}</p>
                        </div>
                        <p className="flex flex-1 text-ellipsis truncate justify-end">
                          {grant.amount.toLocaleString("ja-JP", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}{" "}
                          円
                        </p>
                      </div>
                    ))}
                </div>
                <Divider orientation="horizontal" className="bg-sg-700" />
                <div className="flex flex-row w-full items-center justify-between mt-6 mb-3">
                  <p className="flex flex-1 text-ellipsis truncate justify-start font-bold text-lg">
                    合計
                  </p>

                  <p className="flex flex-1 text-ellipsis truncate justify-end">
                    {hasHydrated &&
                      subtotal.toLocaleString("ja-JP", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}{" "}
                    円
                  </p>
                </div>
                <div className="flex flex-row w-full items-center justify-between">
                  <p className="flex text-ellipsis truncate justify-start text-md">
                    資金プールからのマッチング金額
                  </p>
                  <p className="flex flex-1 text-ellipsis truncate justify-end">
                    +
                    {hasHydrated &&
                      totalMatchingAmount.toLocaleString("ja-JP", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}{" "}
                    円
                  </p>
                </div>

                {overflowMatchingPool && (
                  <p className="flex text-ellipsis truncate justify-start text-sm mt-2 text-sg-error">
                    ※推定マッチング金額がプール総額を超えているため、推定値が実際の金額と異なる場合があります。
                  </p>
                )}

                <Button
                  onClick={handleCheckout}
                  width="full"
                  disabled={(hasHydrated && subtotal <= 1) || loading}
                  className="mt-6"
                >
                  寄付する
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  )
}
