import { RepositoryProducts } from '../../../../domain/model/Products'
import { Product } from '../../../../domain/model/Products/@types'

export class RepositoryProductsInMemory implements RepositoryProducts {
  private data: Product[] = []

  add(s: Product): Error | null {
    // add
    this.data.push(s)
    return null
  }

  find(): [Product[], Error | null] {
    return [this.data, null]
  }

  findOne(id: string): [Product | undefined, Error | null] {
    const filtered = this.data.filter(({ id: n }) => n == id).pop()
    if (filtered == undefined) {
      // not found
      return [filtered, new Error(`'Product' "${id}" not found`)]
    }
    return [filtered, null]
  }
}
