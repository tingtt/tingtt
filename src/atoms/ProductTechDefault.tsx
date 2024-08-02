import { SvgTag } from '../assets/SvgTag'

export const ProductTechDefault = ({ name }: { name: string }) => (
  <div className='flex gap-2'>
    <SvgTag width={24} height={24} />
    {name}
  </div>
)
