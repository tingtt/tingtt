import { LabelButtonClose } from '../atoms/LabelButtonClose'
import {
  ProductModalTitle,
  PropsProductModalTitle,
} from '../atoms/ProductModalTitle'

export type PropsModalHeader = { id?: string } & PropsProductModalTitle

export const ProductModalHeader = ({ title, id }: PropsModalHeader) => (
  <div className='flex items-center'>
    <ProductModalTitle title={title} />
    <div className='modal-action ml-auto !mt-0'>
      <LabelButtonClose htmlFor={id} />
    </div>
  </div>
)
