export const OutlineContent = ({
  name,
  subText,
}: {
  name: string
  subText: string
}) => {
  return (
    <div className='flex items-center gap-4 link link-hover'>
      <div className='text-2xl sm:text-3xl xl:text-4xl whitespace-nowrap'>
        {name}
      </div>
      <div className='divider w-full' />
      <div className='whitespace-nowrap text-sm sm:text-base'>{subText}</div>
    </div>
  )
}
