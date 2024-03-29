import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
} from '../../../domain/model/Inspector/@types'

export const AboutMeText = () => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'AboutMeText', level: ATOMIC_LEVEL_ATOM }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative'>
      <div className='align-middle leading-7'>
        神戸出身のエンジニア。専門学校でIT技術を学び、授業内外問わず
        Webサイト・モバイルアプリなどのフロントエンド、WebAPI
        バックエンド、サーバーなどのITインフラ
        など幅広く製作・構築を行ってきました。
        また、ソフトウェア開発における設計やDevOpsの実践にも力を入れています。
      </div>
      <p className='smm:invisible w-full text-end absolute translate-y-10'>
        自宅サーバーも趣味でちょこっと・・・
      </p>
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-atom-cover ${isSelected ? 'atomic-atom' : ''}`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
