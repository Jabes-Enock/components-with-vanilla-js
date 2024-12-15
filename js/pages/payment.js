
import { $ } from '../utils.js'
import { createSimpleNavbar } from '../components/simpleNavbar.js'
import { messages } from '../components/messages.js'
import { cartController } from '../controllers/cartController.js'
import { spinner } from '../components/spinners.js'
import { paymentDetails } from '../components/paymentDetails.js'

const insertCartDetailsIntoView = () => {
    createSimpleNavbar('Pagamento')

    $('main').innerHTML = '<div class="w-full h-full grid place-items-center py-20">Estou aqui</div>'
    $('main div').innerHTML = spinner(12, 12)

    const itemsInCart = cartController.index()
    
    if(itemsInCart.length < 1) {
      $('main').innerHTML = ''
      $('main').innerHTML = `<div class="container mx-auto px-8"></div>`
      $('main div').innerHTML = messages.danger('Nenhum item salvo no carrinho, clique em:', 'produtos')
      return
    }
    
    $('main').innerHTML = ''
    $('main').innerHTML = paymentDetails()
    cartController.updateOrderSummaryValue()
}

const mount = () => {
  insertCartDetailsIntoView()
}

mount()