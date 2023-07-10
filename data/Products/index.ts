import { Product } from '../../domain/model/Products/@types'

export const PRODUCTS: Product[] = [
  {
    id: 'portfolio',
    title: 'このサイトについて',
    description: ``,
    links: [
      {
        name: 'Inspect',
        href: '/inspect',
        type: 'web',
      },
    ],
    thumbnail: '/products/portfolio/thumbnail.webp',
    images: [
      { name: 'top', src: '/products/portfolio/top.webp' },
      { name: 'aboutme', src: '/products/portfolio/aboutme.webp' },
      { name: 'skills', src: '/products/portfolio/skills.webp' },
    ],
    techs: [
      { name: 'TypeScript', type: 'pg-lang' },
      { name: 'Next.js', type: 'pg-lang' },
      { name: 'TailwindCSS', type: 'pg-lang' },
      { name: 'Kubernetes', type: 'server' },
    ],
  },
  {
    id: 'flow',
    title: 'flow',
    description: `「頑張るあなたに、自己管理を手助けする手帳。」  
  タイムテーブルやガントチャートによるスケジュールの管理機能といった手帳サービスの主な機能と組み合わせ、ポモドーロタイマーによる時間記録機能やプロジェクトごとに掛けた時間を可視化・比較できる機能を実装しました。`,
    links: [
      {
        name: 'flow.tingtt.jp',
        href: 'https://flow.tingtt.jp',
        type: 'web',
      },
      {
        name: 'スライド',
        href: 'https://slidev.tingtt.jp/flow',
        type: 'slide',
      },
      {
        href: 'https://gitlab.tingtt.jp/flow',
        type: 'gitlab',
      },
    ],
    thumbnail: '/products/flow/thumbnail.webp',
    images: [
      { name: 'timetable', src: '/products/flow/timetable.webp' },
      { name: 'dashboard', src: '/products/flow/dashboard.webp' },
      // TODO: Figmaのスクショを追加
    ],
    techs: [
      { name: 'TypeScript', type: 'pg-lang' },
      { name: 'Next.js', type: 'pg-lang' },
      { name: 'TailwindCSS', type: 'pg-lang' },
      { name: 'MySQL', type: 'db' },
      { name: 'Kubernetes', type: 'server' },
    ],
  },
  {
    id: 'hotcale',
    title: 'ほっとけーる / hotcale gallery',
    description: `学校で行っていた無人展示の展示会において、Webサイトの展示ではトップ画面の限られた範囲で興味を持ってもらうことが難しいという課題を解決するための Google Chrome や Microsoft Edge で利用できる拡張機能を製作しました。  
                ループや速度調整・複数ページの巡回が可能なな自動スクロール機能と、操作を検知した際のLINEへの通知機能を実装しています。`,
    links: [
      {
        name: 'Chrome web store',
        href: 'https://chrome.google.com/webstore/detail/%E3%81%BB%E3%81%A3%E3%81%A8%E3%81%91%E3%83%BC%E3%82%8B-hotcale-gallery/alcebkakhpingeooolhchbjokkikiopa?hl=zh',
        type: 'web',
      },
      {
        name: 'スライド',
        href: 'https://slidev.tingtt.jp/hotcale',
        type: 'slide',
      },
      {
        name: 'Chrome extension',
        href: 'https://github.com/indoor-m/hotcale',
        type: 'github',
      },
      {
        name: 'Web API',
        href: 'https://github.com/indoor-m/hotcale-api',
        type: 'github',
      },
    ],
    thumbnail: '/products/hotcale/thumbnail.webp',
    images: [
      {
        name: 'popup',
        src: '/products/hotcale/popup.webp',
      },
      {
        name: 'line_notify',
        src: '/products/hotcale/line_notify.webp',
      },
    ],
    techs: [
      { name: 'TypeScript', type: 'pg-lang' },
      { name: 'React', type: 'pg-lang' },
      { name: 'TailwindCSS', type: 'pg-lang' },
      { name: 'Python', type: 'pg-lang' },
    ],
  },
  {
    id: 'intellibase',
    title: 'IntelliBase',
    description: `「教科書や参考書、ノートでできることを電子書籍でも。」  
      参考書系の電子書籍の「書き込みができない」という課題を解決するアプリ。
      電子書籍に上から書き込むことができる機能を主に、学生が行う紙のノートの見せ合いや教師がテスト範囲や要点を書き込んだテキストの共有ができる書き込み共有機能などを実装しました。`,
    links: [
      {
        name: 'Web site',
        href: 'https://github.com/tingtt/IntelliBaseDocker',
        type: 'github',
      },
      {
        name: 'iOS app',
        href: 'https://github.com/tingtt/IntelliBaseV3',
        type: 'github',
      },
    ],
    thumbnail: '/products/intellibase/thumbnail.webp',
    images: [{ name: 'expo', src: '/products/intellibase/expo.webp' }],
    // TODO: アプリのスクショを追加
    techs: [
      { name: 'PHP', type: 'pg-lang' },
      { name: 'SwiftUI', type: 'pg-lang' },
      { name: 'Docker', type: 'server' },
      { name: 'Nginx', type: 'server' },
      { name: 'MySQL', type: 'db' },
    ],
  },
  {
    id: 'tingttjp',
    title: '自宅サーバーDevOps',
    description: ``,
    links: [
      {
        name: 'スライド',
        href: 'https://slidev.tingtt.jp/k8s-argo',
        type: 'slide',
      },
      {
        name: '構築ドキュメント（自宅サーバー）',
        href: 'https://growi.tingtt.jp/on-premises',
        type: 'docs',
      },
      {
        name: '構築ドキュメント（自宅K8s）',
        href: 'https://growi.tingtt.jp/k8s',
        type: 'docs',
      },
    ],
    thumbnail: '/products/tingttjp/thumbnail.webp',
    images: [
      { name: 'k8s-diagram', src: '/products/tingttjp/k8s_diagram.webp' },
      { name: 'argo-diagram', src: '/products/tingttjp/argo_diagram.webp' },
    ],
    techs: [
      { name: 'Kubernetes', type: 'server' },
      { name: 'ArgoCD', type: 'server' },
      { name: 'Linux', type: 'server' },
      { name: 'Ubuntu', type: 'server' },
    ],
  },
  {
    id: 'slidev-cd',
    title: 'コード化したスライドをCI/CD',
    description: `slidev ( Markdown / Vue.js ) で記述したスライドを Kubernetes にデプロイし、アップデート時に自動デプロイを行うCDパイプラインを構築しました。`,
    links: [],
    // thumbnail: '',
    images: [
      { name: 'diagram', src: '/products/slidev/diagram.webp' },
      { name: 'flow', src: '/products/slidev/slidev.tingtt.jp_flow_1.webp' },
      {
        name: 'k8s-argo',
        src: '/products/slidev/slidev.tingtt.jp_k8s-argo_1.webp',
      },
      { name: 'intro', src: '/products/slidev/slidev.tingtt.jp_intro_1.webp' },
    ],
    techs: [
      { name: 'Slidev', type: 'pg-lang' },
      { name: 'Vue', type: 'pg-lang' },
      { name: 'TailwindCSS', type: 'pg-lang' },
      { name: 'Kubernetes', type: 'server' },
      { name: 'ArgoCD', type: 'server' },
    ],
  },
  // {
  //   id: 'NAME',
  //   title: '',
  //   description: ``,
  //   links: [
  //     {
  //       name: 'スライド',
  //       href: 'https://slidev.tingtt.jp/NAME',
  //       type: 'slide',
  //     },
  //   ],
  //   images: [
  //     { name: '', src: '/products/NAME/' }
  //   ],
  //   techs: [
  //     { name: '', type: 'pg-lang' }
  //   ],
  // },
]
