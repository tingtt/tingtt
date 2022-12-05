import { Products } from '../../domain/model/Products'
import { Product } from '../../domain/model/Products/@types'

export const migrate = (i: Products, products: Product[]): Error | null => {
  var err: Error | null = null
  products.some((s) => {
    err = i.add(s)
    if (err != null) {
      return true
    }
  })
  return err
}
