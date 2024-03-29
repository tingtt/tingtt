import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
} from '../../../domain/model/Inspector/@types'

export const ChatBubbleWelcome = () => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ChatBubbleWelcome',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div
      className={`
        relative
        alert alert-success shadow-lg
        chat-bubble max-w-none
      `}
    >
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-current flex-shrink-0 h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>Welcome to my portfolio !</span>
      </div>
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-atom-cover ${isSelected ? 'atomic-atom' : ''}`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
