import { productDetails } from '../components/productDetails.js'
import { createSimpleNavbar } from '../components/simpleNavbar.js'
import { spinner } from '../components/spinners.js'
import { cartController } from '../controllers/cartController.js'

import { fakeStore } from '../controllers/fakestore.js'
import { $ } from '../utils.js'

const insertProductDetailsInView = async (controller) => {
  const query = location.search
  const id = new URLSearchParams(query).get('id')

  if(!id) return location.href = 'produtos.html'

  $('main').innerHTML = '<div class="w-full h-full grid place-items-center py-20"></div>'
  $('main div').innerHTML = spinner()

  const product = await controller.show(id)
  if(!product) return location.href = '/'

  createSimpleNavbar(`${product.category}`)
  $('main').innerHTML = ''
  $('main').innerHTML = productDetails(product)

  /*./components/productDetails.js  */
  $('#addToCart').addEventListener('click', () =>  cartController.add(product.id))
}


const mount = () => {
  insertProductDetailsInView(fakeStore)
}

mount()