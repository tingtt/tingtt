import Image from 'next/image'
import { PropsInspecting } from '../../../domain/model/Inspector/@types'
export const IconQiita = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => (
  <div className='relative'>
    <Image src='/qiita.png' width={width} height={height} alt={'Qiita'} />
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
