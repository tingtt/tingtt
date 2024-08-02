import { SvgConsole } from '../assets/SvgConsole'

export const ProductTechConsole = ({ name }: { name: string }) => (
  <div className='flex gap-2'>
    <SvgConsole width={24} height={24} />
    {name}
  </div>
)
