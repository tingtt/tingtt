import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const SvgDocs = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => (
  <div className='relative'>
    <svg
      width={width}
      height={height}
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='fill-[#1B1817] dark:fill-[white]'
    >
      <path d='M39.1111 0H4.88889C2.2 0 0 2.2 0 4.88889V39.1111C0 41.8 2.2 44 4.88889 44H39.1111C41.8 44 44 41.8 44 39.1111V4.88889C44 2.2 41.8 0 39.1111 0ZM26.8889 34.2222H9.77778V29.3333H26.8889V34.2222ZM34.2222 24.4444H9.77778V19.5556H34.2222V24.4444ZM34.2222 14.6667H9.77778V9.77778H34.2222V14.6667Z' />
    </svg>
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
