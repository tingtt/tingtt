import { SvgDB } from '../assets/SvgDB'

export const ProductTechDB = ({ name }: { name: string }) => (
  <div className='flex gap-2'>
    <SvgDB width={24} height={24} />
    {name}
  </div>
)
