import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import { LabelButtonClose } from '../atoms/LabelButtonClose'
import { ProductModalTitle } from '../atoms/ProductModalTitle'

export const ProductModalHeader = ({
  id,
  title,
  inspecting,
}: {
  id: string
  title: string
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductModalHeader',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex items-center'>
      <ProductModalTitle title={title} inspecting={inspecting} />
      <div className='modal-action ml-auto !mt-0'>
        <LabelButtonClose htmlFor={id} inspecting={inspecting} />
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
