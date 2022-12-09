import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const ProductTechListHeader = ({
  title,
  inspecting,
}: { title?: string } & PropsInspecting) => (
  <div className='relative flex items-center gap-3'>
    <div className='divider w-8' />
    <div className='whitespace-nowrap text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
      {title ?? '関連技術'}
    </div>
    <div className='divider w-full' />
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
