import {test} from '../../Custom_fixtures/Vitegar_fixtures'
import product1 from '../../testdata/Product.json'

test('',async ({product}) => {
    await product.create_product(product1.ProductName)
})
