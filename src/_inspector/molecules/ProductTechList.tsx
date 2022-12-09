import { ProductTech } from '../../../domain/model/Products/@types'
import { ProductTechDefault } from '../atoms/ProductTechDefault'
import { ProductTechConsole } from '../atoms/ProductTechConsole'
import { ProductTechDB } from '../atoms/ProductTechDB'
import { ProductTechListHeader } from '../atoms/ProductTechListHeader'
import { ProductTechPGLanguage } from '../atoms/ProductTechPGLanguage'

export const ProductTechList = ({ techs }: { techs: ProductTech[] }) => {
  return (
    <div className='relative flex flex-col gap-4'>
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
          return <ProductTechDefault key={t.name} name={t.name} />
        })}
      </div>
      {/* Cover */}
      <div className='atomic-molecule-cover' />
    </div>
  )
}
