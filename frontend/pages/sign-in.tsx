import { signIn } from "next-auth/react"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import MainLayout from "../layouts/MainLayout"
import Button from "../components/Button"
import { useInviteStore } from "../utils/store"
import Link from "next/link"

const mockProviders = [
  {
    id: "google",
    name: "Google",
  },
  {
    id: "github",
    name: "GitHub",
  }
];

export default function SignIn() {
  const { inviteCode } = useInviteStore()
  const [providers, setProviders] = useState(mockProviders);

  useEffect(() => {
    console.log("Static site: Using mock authentication providers");
  }, []);

  return (
    <div>
      <Head>
        <title>DIGSHIBUYA 参加型寄付</title>
        <meta
          name="description"
          content="違いを力に変える、新しいアーティスト支援の形。参加型寄付でお気に入りのアーティストに寄付して支援しよう"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout className="items-center justify-center">
        <div className="flex flex-col items-center justify-between h-full rounded-lg bg-white p-8 shadow-card">
          <h1 className="font-bold text-xl mb-10">ログイン / アカウント作成</h1>
          <div className="flex flex-col items-center justify-center gap-y-5">
            {providers.map((provider) => (
              <Button
                key={provider.name}
                onClick={() => {
                  alert("この機能は静的サイトでは利用できません。実際のサイトでお試しください。");
                  // signIn(provider.id, {
                  //   callbackUrl: inviteCode ? `/invite` : undefined,
                  // })
                }}
                className="px-16 py-3 text-xl"
                width="full"
              >
                {provider.name}でログイン
              </Button>
            ))}
          </div>

          <div className="mt-10">
            <Link
              className="mx-1"
              href="https://github.com/tkgshn/digshibuya/blob/main/terms.md"
              target="_blank"
            >
              利用規約
            </Link>
            <Link
              className="mx-1"
              href="https://github.com/tkgshn/digshibuya/blob/main/policy.md"
              target="_blank"
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </MainLayout>
    </div>
  )
}
