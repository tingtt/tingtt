import { SvgCode } from '../assets/SvgCode'

export const ProductTechPGLanguage = ({ name }: { name: string }) => (
  <div className='flex gap-2'>
    <SvgCode width={24} height={24} />
    {name}
  </div>
)
