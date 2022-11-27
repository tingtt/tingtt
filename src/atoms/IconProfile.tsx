import Image from 'next/image'
export const IconProfile = ({
  width,
  height,
}: {
  width: number
  height: number
}) => (
  <Image src='/prof_icon.png' width={width} height={height} alt={'prof_icon'} />
)
