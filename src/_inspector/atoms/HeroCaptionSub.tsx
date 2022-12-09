import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const HeroCaptionSub = ({ inspecting }: PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'HeroCaptionSub',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <p className='relative whitespace-nowrap'>
      I love Kubernetes. <br />
      Is there anyone who agrees with me?
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-atom-cover ${isSelected ? 'atomic-atom' : ''}`}
          onClick={() => setComponent(component)}
        />
      )}
    </p>
  )
}
