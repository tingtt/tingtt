export type PropsProductModalTitle = { title: string }

export const ProductModalTitle = ({ title }: PropsProductModalTitle) => (
  <div className='text-2xl xl:text-3xl'>{title}</div>
)
