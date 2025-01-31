import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "DIGSHIBUYA 参加型寄付",
  additionalMetaTags: [
    {
      property: "keywords",
      content:
        "DIGSHIBUYA, quadratic, funding, quadratic funding, fundraising, raise, grants",
    },
  ],
  canonical: "https://donation.digshibuya.com/",
  openGraph: {
    type: "website",
    title: "DIGSHIBUYA 参加型寄付",
    description: "違いを力に変える、新しいアーティスト支援の形。参加型寄付でお気に入りのアーティストに寄付して支援しよう",
    url: "https://donation.digshibuya.com/",
    images: [
      {
        url: "https://i.gyazo.com/a8a51a5e0b09fced8b9ef3ed9197df77.png",
        // 画像は仮
        width: 1200,
        height: 630,
        alt: "DIGSHIBUYA 参加型寄付 - サムネイル画像",
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
