import { cartController } from "../controllers/cartController.js"
import { fakeStore } from "../controllers/fakestore.js"
import { $, currencyBRL } from "../utils.js"
import { orderSummary } from "./orderSummary.js"
import { shoppingCard } from "./shoppingCard.js"
import { spinner } from "./spinners.js"

const cart = () => {
  const cart = `
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-8">
    <div class="before-order-summary-load w-full h-full grid place-items-center py-20">${spinner()}</div>
      <div class="after-order-summary-load mx-auto max-w-screen-xl px-4 2xl:px-0 hidden">
        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div id="shopping_cards_content" class="space-y-6"></div>
          </div>
          <div id="cart_order_summary_content" class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full"></div>
        </div>
      </div>
    </section>
  `
  return cart
}

const changeProductQuantity = (id, price) => {
  let cardTotal = $(`.item-total-price-${id}`)
  let inputValue = $(`#counter-input-${id}`).value

  const decrement = () => {
    if(inputValue == 1) return

    inputValue--

    $(`#counter-input-${id}`).value = inputValue
    cardTotal.innerHTML = currencyBRL(inputValue * price)
    cartController.update(id, 'decrement')
    location.reload()
  }

  const increment = () => {
    if(inputValue == 10) return

    inputValue++

    $(`#counter-input-${id}`).value = inputValue
    cardTotal.innerHTML = currencyBRL(inputValue * price)
    cartController.update(id, 'increment')
    location.reload()
  }

  $(`#decrement-button-${id}`).addEventListener('click', decrement)  
  $(`#increment-button-${id}`).addEventListener('click', increment)
}

const removeItem = (id) => {
  $(`#remove-product-id-${id}`).addEventListener('click', () => {
    cartController.remove(id)
  }) 
}

const addEventIfElementExist = (product, quantity) => {
  const interval = setInterval(function () {
    const element = $(`#product-card-id-${product.id}`)
    const btnRemoveFromLocalStorage = $(`#remove-product-id-${product.id}`)
    if (element) {
      changeProductQuantity(product.id, product.price, quantity)
      removeItem(product.id)
      clearInterval(interval)
    }
  }, 100)
}

const showOrderSummary = (index, productsInCart) => {
  const isLastElement = index == (productsInCart.length - 1)
    if(isLastElement ) {
      $('#cart_order_summary_content').innerHTML += orderSummary()
      cartController.updateOrderSummaryValue()
      $(".before-order-summary-load").classList.add('hidden')
      $(".after-order-summary-load").classList.remove('hidden')
    }
}

const getProductDetailsInCartFromApi = async () => {
  cartController.clearOrderPrice()
  const productsInCart = cartController.index()

  productsInCart.forEach(async ({id, quantity}, index) =>  {
    const product = await fakeStore.show(id)
    cartController.updatePrice(product.price, quantity)
    $('#shopping_cards_content').innerHTML += shoppingCard(product, quantity)
    showOrderSummary(index, productsInCart)
    addEventIfElementExist(product, quantity)
  })  
}


export { cart, getProductDetailsInCartFromApi }