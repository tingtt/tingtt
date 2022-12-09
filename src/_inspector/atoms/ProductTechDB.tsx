import { SvgDB } from './SvgDB'

export const ProductTechDB = ({ name }: { name: string }) => (
  <div className='relative flex gap-2'>
    <SvgDB width={24} height={24} />
    {name}
    {/* Cover */}
    <div className='atomic-atom-cover' />
  </div>
)
