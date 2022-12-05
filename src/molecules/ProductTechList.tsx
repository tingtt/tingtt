import { ProductTech } from '../atoms/ProductTech'
import { ProductTechConsole } from '../atoms/ProductTechConsole'
import { ProductTechDB } from '../atoms/ProductTechDB'
import { ProductTechListHeader } from '../atoms/ProductTechListHeader'
import { ProductTechPGLanguage } from '../atoms/ProductTechPGLanguage'

export type PropsProductTechList = { techs: ProductTech[] }

export type ProductTech = {
  name: string
  type?: 'server' | 'pg-lang' | 'db'
}

export const ProductTechList = ({ techs }: PropsProductTechList) => {
  return (
    <div className='flex flex-col gap-4'>
      <ProductTechListHeader />
      <div className='flex flex-wrap gap-x-4 gap-y-2'>
        {(techs ?? []).map((t) => {
          if (t.type == 'pg-lang') {
            return <ProductTechPGLanguage key={t.name} name={t.name} />
          } else if (t.type == 'server') {
            return <ProductTechConsole key={t.name} name={t.name} />
          } else if (t.type == 'db') {
            return <ProductTechDB key={t.name} name={t.name} />
          }
          return <ProductTech key={t.name} name={t.name} />
        })}
      </div>
    </div>
  )
}
