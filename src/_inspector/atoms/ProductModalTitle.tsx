import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const ProductModalTitle = ({
  title,
  inspecting,
}: { title: string } & PropsInspecting) => (
  <div className='relative text-2xl 2xl:text-3xl'>
    {title}
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
