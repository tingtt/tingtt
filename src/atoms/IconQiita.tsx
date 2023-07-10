import Image from 'next/image'
export const IconQiita = ({
  width,
  height,
}: {
  width: number
  height: number
}) => <Image src='/qiita.webp' width={width} height={height} alt={'Qiita'} />
