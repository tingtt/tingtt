import { SvgConsole } from './SvgConsole'

export const ProductTechConsole = ({ name }: { name: string }) => (
  <div className='relative flex gap-2'>
    <SvgConsole width={24} height={24} />
    {name}
    {/* Cover */}
    <div className='atomic-atom-cover' />
  </div>
)
