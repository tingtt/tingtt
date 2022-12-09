import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { LabelButtonClose } from '../atoms/LabelButtonClose'
import { ProductModalTitle } from '../atoms/ProductModalTitle'

export const ProductModalHeader = ({
  id,
  title,
  inspecting,
}: {
  id: string
  title: string
} & PropsInspecting) => (
  <div className='relative flex items-center'>
    <ProductModalTitle title={title} inspecting={inspecting} />
    <div className='modal-action ml-auto !mt-0'>
      <LabelButtonClose htmlFor={id} inspecting={inspecting} />
    </div>
    {/* Cover */}
    {inspecting && <div className='atomic-molecule-cover' />}
  </div>
)
