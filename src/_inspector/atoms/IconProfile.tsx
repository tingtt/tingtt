import Image from 'next/image'
import { PropsInspecting } from '../../../domain/model/Inspector/@types'
export const IconProfile = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => (
  <div className='relative'>
    <Image
      src='/prof_icon.png'
      width={width}
      height={height}
      alt={'prof_icon'}
    />
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
