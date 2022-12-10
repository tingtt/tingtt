import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
} from '../../../domain/model/Inspector/@types'
import { LabelButtonClose } from '../atoms/LabelButtonClose'
import { ProductModalTitle } from '../atoms/ProductModalTitle'

export const ProductModalHeader = ({
  id,
  title,
}: {
  id: string
  title: string
}) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductModalHeader',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex items-center'>
      <ProductModalTitle title={title} />
      <div className='modal-action ml-auto !mt-0'>
        <LabelButtonClose htmlFor={id} />
      </div>
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-molecule-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
