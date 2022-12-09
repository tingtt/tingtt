import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const SvgDefault = ({
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
      <path d='M7.41997 36.58C4.34198 33.502 4.34197 28.498 7.41997 25.42L14.6199 18.22L11.2 14.8L3.99998 22C-0.968011 26.968 -0.968011 35.032 3.99998 40C8.96796 44.968 17.0319 44.968 21.9999 40L29.1999 32.8L25.7799 29.38L18.5799 36.58C15.5019 39.658 10.498 39.658 7.41997 36.58ZM16.5999 31L30.9999 16.6L27.3999 13L13 27.4L16.5999 31ZM21.9999 4.00007L14.7999 11.2001L18.2199 14.62L25.4199 7.42006C28.4979 4.34207 33.5019 4.34207 36.5799 7.42006C39.6579 10.4981 39.6579 15.502 36.5799 18.58L29.3799 25.78L32.7999 29.2L39.9999 22C44.9679 17.032 44.9679 8.96806 39.9999 4.00007C35.0319 -0.967916 26.9679 -0.967916 21.9999 4.00007Z' />
    </svg>
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
