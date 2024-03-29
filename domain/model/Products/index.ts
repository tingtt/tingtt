import { Product } from './@types'

export class Products {
  private repo: RepositoryProducts

  constructor(repository: RepositoryProducts) {
    this.repo = repository
  }

  add(s: Product) {
    // validate
    const [products, err] = this.find()
    if (err != null) {
      return err
    }
    // validate duplicate id
    if (products.find((p) => p.id == s.id) != undefined) {
      return new Error(`'Product' "${s.id}" already exists`)
    }

    // add
    return this.repo.add(s)
  }
  find() {
    return this.repo.find()
  }
  findOne(name: string) {
    return this.repo.findOne(name)
  }
}

export interface RepositoryProducts {
  add(s: Product): Error | null
  find(): [Product[], Error | null]
  findOne(name: string): [Product | undefined, Error | null]
}
