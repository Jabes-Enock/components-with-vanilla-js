import { badge } from '../components/badge.js'
import { cardEcommerce } from '../components/cardEcommerce.js'
import { createNavigator } from '../components/navigation.js'
import { spinner } from '../components/spinners.js'

import { fakeStore } from '../controllers/fakestore.js'
import { $, param, setTheme } from '../utils.js'

createNavigator()

const insertProductsIntoView = async (controller) => {
  $('main').innerHTML = '<div class="w-full h-full grid place-items-center py-20"></div>'
  $('main div').innerHTML = spinner(12,12)

  let categories = await fakeStore.categories()

  let products = []

  if(param('categoria')) {
    products = await fakeStore.productsByCategory(param('categoria'))
    categories.unshift('todos')
  } else {
    products = await controller.index()
  }

  if(!products) return location.href = 'produtos.html'

  const toolbar = `
      <nav class="fixed border-b dark:border-gray-700 top-16 left-0 right-0 bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-sm flex flex-wrap items-center mx-auto p-4 gap-x-2 gap-y-4">
          ${categories.map(item => badge(item))}
        </div>
      </nav>
    `
  const removeCommaSignal = toolbar.replaceAll(',','')

  $('main').innerHTML = ''
  $('main').innerHTML = removeCommaSignal


  $('main').innerHTML += '<section class="container max-w-[1000px] px-4 py-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></section>'
  
  products.forEach(item => {
    $('main section').innerHTML += cardEcommerce(item)
  })

  
  setTheme()
}

insertProductsIntoView(fakeStore)
