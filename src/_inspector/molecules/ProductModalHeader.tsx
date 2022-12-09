import { LabelButtonClose } from '../atoms/LabelButtonClose'
import { ProductModalTitle } from '../atoms/ProductModalTitle'

export const ProductModalHeader = ({
  id,
  title,
}: {
  id: string
  title: string
}) => (
  <div className='relative flex items-center'>
    <ProductModalTitle title={title} />
    <div className='modal-action ml-auto !mt-0'>
      <LabelButtonClose htmlFor={id} />
    </div>
    {/* Cover */}
    <div className='atomic-molecule-cover' />
  </div>
)
