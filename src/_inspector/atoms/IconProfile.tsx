import Image from 'next/image'
export const IconProfile = ({
  width,
  height,
}: {
  width: number
  height: number
}) => (
  <div className='relative'>
    <Image
      src='/prof_icon.png'
      width={width}
      height={height}
      alt={'prof_icon'}
    />
    {/* Cover */}
    <div className='atomic-atom-cover' />
  </div>
)
