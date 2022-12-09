import Image from 'next/image'
export const IconQiita = ({
  width,
  height,
}: {
  width: number
  height: number
}) => (
  <div className='relative'>
    <Image src='/qiita.png' width={width} height={height} alt={'Qiita'} />
    {/* Cover */}
    <div className='atomic-atom-cover' />
  </div>
)
