import { SvgTag } from './SvgTag'

export const ProductTechDefault = ({ name }: { name: string }) => (
  <div className='relative flex gap-2'>
    <SvgTag width={24} height={24} />
    {name}
    {/* Cover */}
    <div className='atomic-atom-cover' />
  </div>
)
