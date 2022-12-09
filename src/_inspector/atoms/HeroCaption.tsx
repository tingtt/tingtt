import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const HeroCaption = ({ inspecting }: PropsInspecting) => {
  return (
    <h1 className='relative text-3xl md:text-5xl font-bold whitespace-nowrap'>
      Takuto Fujishima
      {/* Cover */}
      {inspecting && <div className='atomic-atom-cover' />}
    </h1>
  )
}
