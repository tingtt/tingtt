import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const SectionTitle = ({
  children,
  inspecting,
}: {
  children: string
} & PropsInspecting) => (
  <div className='relative text-5xl md:text-6xl'>
    {children}
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
