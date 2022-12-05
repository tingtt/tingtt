import { PRODUCTS } from '..'
import { migrate } from '../../../application/Products/migrate'
import { Products } from '../../../domain/model/Products'
import { RepositoryProductsInMemory } from '../../../infrastructure/datasource/Products/in_memory'

it('product data not contain duplicate id', () => {
  expect(
    migrate(new Products(new RepositoryProductsInMemory()), PRODUCTS)
  ).toBe(null)
})
