import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getSkillsGroupedByGenre } from '../../application/Skills'
import { PropsSkillRadarChartGrid } from '../molecules/SkillRadarChartsGrid'
import { ProductModal } from '../organisms/ProductModal'
import { Top } from '../templates/Top'

type Props = PropsSkillRadarChartGrid

const Home: NextPage<Props> = ({ genres }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [hooks, setHooks] = useState<any>([])
  useEffect(() => {
    // UI theme
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // add hook to detect prefers-color-scheme changes
    setHooks(() => [window])
  }, [hooks])

  return (
    <Top
      genres={genres}
      isDarkMode={isDarkMode}
      products={[
        {
          id: 'flow',
          title: 'flow',
          modalContent: (
            <ProductModal
              id={'flow'}
              title={'flow'}
              description={`「頑張るあなたに、自己管理を手助けする手帳。」  
                タイムテーブルやガントチャートによるスケジュールの管理機能といった手帳サービスの主な機能と組み合わせ、ポモドーロタイマーによる時間記録機能やプロジェクトごとに掛けた時間を可視化・比較できる機能を実装しました。`}
              links={[
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
              ]}
              images={[
                { name: 'timetable', src: '/products/flow/timetable.png' },
                { name: 'dashboard', src: '/products/flow/dashboard.png' },
              ]}
              techs={[
                { name: 'TypeScript', type: 'pg-lang' },
                { name: 'Next.js', type: 'pg-lang' },
                { name: 'TailwindCSS', type: 'pg-lang' },
                { name: 'MySQL', type: 'db' },
                { name: 'Kubernetes', type: 'server' },
              ]}
            />
          ),
        },
        {
          id: 'hotcale',
          title: 'hotcale',
          modalContent: (
            <ProductModal
              id={'hotcale'}
              title={'ほっとけーる / hotcale gallery'}
              description={`学校で行っていた無人展示の展示会において、Webサイトの展示ではトップ画面の限られた範囲で興味を持ってもらうことが難しいという課題を解決するための Google Chrome や Microsoft Edge で利用できる拡張機能を製作しました。  
                ループや速度調整・複数ページの巡回が可能なな自動スクロール機能と、操作を検知した際のLINEへの通知機能を実装しています。`}
              links={[
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
              ]}
              images={[
                {
                  name: 'popup',
                  src: '/products/hotcale/popup.jpg',
                },
                {
                  name: 'line_notify',
                  src: '/products/hotcale/line_notify.jpeg',
                },
              ]}
              techs={[
                { name: 'TypeScript', type: 'pg-lang' },
                { name: 'React', type: 'pg-lang' },
                { name: 'TailwindCSS', type: 'pg-lang' },
                { name: 'Python', type: 'pg-lang' },
              ]}
            />
          ),
        },
        {
          id: 'intellibase',
          title: 'IntelliBase',
          modalContent: (
            <ProductModal
              id={'intellibase'}
              title={'IntelliBase'}
              description={`「教科書や参考書、ノートでできることを電子書籍でも。」  
                参考書系の電子書籍の「書き込みができない」という課題を解決するアプリ。
                電子書籍に上から書き込むことができる機能を主に、学生が行う紙のノートの見せ合いや教師がテスト範囲や要点を書き込んだテキストの共有ができる書き込み共有機能などを実装しました。`}
              links={[
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
              ]}
              images={[{ name: 'expo', src: '/products/intellibase/expo.jpg' }]}
              techs={[
                { name: 'PHP', type: 'pg-lang' },
                { name: 'SwiftUI', type: 'pg-lang' },
                { name: 'Docker', type: 'server' },
                { name: 'Nginx', type: 'server' },
                { name: 'MySQL', type: 'db' },
              ]}
            />
          ),
        },
        {
          id: 'tingttjp',
          title: '自宅サーバーDevOps',
          modalContent: (
            <ProductModal
              id={'tingttjp'}
              title={'自宅サーバーDevOps'}
              description={''}
              links={[
                {
                  name: 'スライド',
                  href: 'https://slidev.tingtt.jp/k8s-argo',
                  type: 'slide',
                },
              ]}
              images={[]}
              techs={[
                { name: 'Kubernetes', type: 'server' },
                { name: 'ArgoCD', type: 'server' },
                { name: 'Linux', type: 'server' },
                { name: 'Ubuntu', type: 'server' },
              ]}
            />
          ),
        },
      ]}
    />
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const [genres, err] = getSkillsGroupedByGenre()
  if (err != null) {
    throw err
  }

  return {
    props: { genres },
  }
}

export default Home
