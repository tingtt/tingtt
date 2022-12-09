import { ProductTech } from '../../../domain/model/Products/@types'
import { ProductTechDefault } from '../atoms/ProductTechDefault'
import { ProductTechConsole } from '../atoms/ProductTechConsole'
import { ProductTechDB } from '../atoms/ProductTechDB'
import { ProductTechListHeader } from '../atoms/ProductTechListHeader'
import { ProductTechPGLanguage } from '../atoms/ProductTechPGLanguage'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'

export const ProductTechList = ({
  techs,
  inspecting,
}: {
  techs: ProductTech[]
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductTechList',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex flex-col gap-4'>
      <ProductTechListHeader inspecting={inspecting} />
      <div className='flex flex-wrap gap-x-4 gap-y-2'>
        {(techs ?? []).map((t) => {
          if (t.type == 'pg-lang') {
            return (
              <ProductTechPGLanguage
                key={t.name}
                name={t.name}
                inspecting={inspecting}
              />
            )
          } else if (t.type == 'server') {
            return (
              <ProductTechConsole
                key={t.name}
                name={t.name}
                inspecting={inspecting}
              />
            )
          } else if (t.type == 'db') {
            return (
              <ProductTechDB
                key={t.name}
                name={t.name}
                inspecting={inspecting}
              />
            )
          }
          return (
            <ProductTechDefault
              key={t.name}
              name={t.name}
              inspecting={inspecting}
            />
          )
        })}
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
