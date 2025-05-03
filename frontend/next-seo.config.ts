import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "ETIC: Beyond カンファレンス 2025でのQuadratic Votingを使った資金分配実験",
  additionalMetaTags: [
    {
      property: "keywords",
      content:
        "ETIC, Beyond, カンファレンス, 2025, Quadratic Voting, 資金分配, 実験, DIGSHIBUYA, quadratic, funding, quadratic funding, fundraising, raise, grants",
    },
  ],
  canonical: "https://donation.digshibuya.vercel.app/",
  openGraph: {
    type: "website",
    title: "ETIC: Beyond カンファレンス 2025でのQuadratic Votingを使った資金分配実験",
    description: "ETIC: Beyond カンファレンス 2025でQuadratic Votingを使った資金分配実験を実施。参加型寄付でお気に入りのプロジェクトに寄付して支援しよう",
    url: "https://donation.digshibuya.vercel.app/",
    images: [
      {
        url: "https://i.gyazo.com/931d0291cb2a3817ac0c5a247f5b0427.jpg",
        width: 1200,
        height: 630,
        alt: "ETIC: Beyond カンファレンス 2025 - Quadratic Voting 資金分配実験",
      }
    ],
  },
  twitter: {
    handle: "@digdaox",
    site: "@digdaox",
    cardType: "summary_large_image",
  },
};

export default config;
