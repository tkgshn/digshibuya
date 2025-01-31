import { useSession, signOut, signIn } from "next-auth/react";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useGrantCartStore } from "../utils/store";
import clsx from "clsx";
import Cart from "../components/icons/Cart";
import Avatar from "../components/icons/Avatar";
import Image from "next/image";
import { useHasHydrated } from "../utils/useHydrated";
import Button from "../components/Button";

interface INavbarProps {
  children?: ReactNode;
  className?: string;
  location: "grants" | "pools"; // Tracks which checkout page to go to
}

export default function Navbar({
  children,
  className,
  location,
}: INavbarProps) {
  const { data: session } = useSession();
  const { grants } = useGrantCartStore();
  const hasHydrated = useHasHydrated();

  const subtotal = React.useMemo(
    () => grants.reduce((acc, grant) => acc + grant.amount, 0).toFixed(0),
    [grants]
  );

  return (
    <div className={clsx("navbar", className)}>
      <div className="navbar-start w-max">
        <div className="w-max">
          <Link className="btn btn-ghost" href="/">
            <Image
              src="/logo-dig-shibuya.png"
              alt="DIGSHIBUYA 参加型寄付"
              width={103.55}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div className="navbar-end flex-grow">
        <div className="mr-2 lg:mr-7">
          {session ? (
            children
          ) : (
            <Button onClick={() => signIn()}>ログイン</Button>
          )}
        </div>
        {session && (
          <>
            <div className="flex-none gap-x-7 hidden lg:flex">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <Cart className="fill-[#193154]" />
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">
                      {hasHydrated && grants.length} プロジェクト
                    </span>
                    <span className="text-info">
                      合計: {hasHydrated && `${parseInt(subtotal).toLocaleString("ja-JP")}円`}
                    </span>
                    <div className="card-actions">
                      <Link
                        href={`/${location}/checkout`}
                        className="w-full h-full"
                      >
                        <button className="btn btn-primary btn-block">
                          カートの中身を見る
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <Avatar className="fill-[#193154]" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link
                      className="justify-between"
                      href={`/profile/${(session.user as any).id}`}
                    >
                      アカウント
                    </Link>
                  </li>
                  <li>
                    <a>設定</a>
                  </li>
                  <li>
                    <a onClick={() => signOut()}>ログアウト</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    href={`/${location}/checkout`}
                    className="justify-between"
                  >
                    カートの中身を見る
                  </Link>
                </li>
                <li>
                  <Link
                    className="justify-between"
                    href={`/profile/${(session.user as any).id}`}
                  >
                    プロフィール
                  </Link>
                </li>
                {/* <li>
                  <a>設定</a>
                </li> */}
                <li>
                  <a onClick={() => signOut()}>ログアウト</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
