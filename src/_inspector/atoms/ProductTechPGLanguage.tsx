import { SvgCode } from './SvgCode'

export const ProductTechPGLanguage = ({ name }: { name: string }) => (
  <div className='relative flex gap-2'>
    <SvgCode width={24} height={24} />
    {name}
    {/* Cover */}
    <div className='atomic-atom-cover' />
  </div>
)
