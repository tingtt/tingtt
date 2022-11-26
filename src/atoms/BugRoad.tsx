import { SvgBug } from './SvgBug'

export const BugRoad = () => {
  return (
    <div className='flex flex-col items-center bg-[#93E1E1] w-[200vh] p-4'>
      {/* Bug icon */}
      <div className='rotate-90'>
        <SvgBug />
      </div>
    </div>
  )
}
