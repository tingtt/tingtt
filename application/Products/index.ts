import { PRODUCTS } from '../../data/Products'
import { Products } from '../../domain/model/Products'
import { RepositoryProductsInMemory } from '../../infrastructure/datasource/Products/in_memory'
import { migrate } from './migrate'

const products = new Products(new RepositoryProductsInMemory())

const err = migrate(products, PRODUCTS)
if (err != null) {
  throw err
}

export const getProducts = () => products.found()
