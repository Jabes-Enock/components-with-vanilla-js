
import { $ } from '../utils.js'
import { createSimpleNavbar } from '../components/simpleNavbar.js'
import { cart, getProductDetailsInCartFromApi } from '../components/cartPage.js'
import { messages } from '../components/messages.js'
import { cartController } from '../controllers/cartController.js'
import { spinner } from '../components/spinners.js'

const insertCartDetailsIntoView = async () => {
    createSimpleNavbar('Carrinho')
    $('main').innerHTML = '<div class="w-full h-full grid place-items-center py-20">Estou aqui</div>'
    $('main div').innerHTML = spinner(12, 12)

    const itemsInCart = cartController.index()
    
    if(itemsInCart.length < 1) {
      $('main').innerHTML = ''
      $('main').innerHTML = `<div class="container mx-auto px-8"></div>`
      $('main div').innerHTML = messages.danger('Nenhum item salvo no carrinho, clique em:', 'produtos')
      return
    }
    
    $('main').innerHTML = cart()
    getProductDetailsInCartFromApi()
}

const mount = () => {
  insertCartDetailsIntoView()
}

mount()