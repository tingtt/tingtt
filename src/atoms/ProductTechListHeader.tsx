export const ProductTechListHeader = ({ title }: { title?: string }) => (
  <div className='flex items-center gap-3'>
    <div className='divider w-8' />
    <div className='whitespace-nowrap text-md md:text-lg lg:text-xl xl:text-2xl'>
      {title ?? '関連技術'}
    </div>
    <div className='divider w-full' />
  </div>
)
