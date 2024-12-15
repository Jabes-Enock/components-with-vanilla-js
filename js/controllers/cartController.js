import { DISCOUNT_PERCENTAGE } from "../constants.js"
import { $, calculateTax, currencyBRL } from "../utils.js"

const cartController = {
  index: () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    return cartItems
  },
  add: (id, quantity = 1) => {
    const items = cartController.index()
    const data = { id, quantity }
    items.push(data)
    const exist = cartController.alreadyExist(id)

    if(!exist) return cartController.save(items)

    cartController.update(id)
  },
  update: (id, type = 'increment') => {
    const cartItems = cartController.index()

    cartItems.forEach(item =>  {
      if(item.id == id) {
        type == 'increment' ? item.quantity++ : item.quantity--
      }
    })

    cartController.save(cartItems)
  },
  remove: (id) => {
    const cartItems = cartController.index()

    const newCart = cartItems.filter(items => items.id != id)
    cartController.save(newCart)
    location.reload()
  },
  save: (data) => {
    const json = JSON.stringify(data)
    localStorage.setItem('cart', json)
  },
  alreadyExist: (id) => {
    const cartItems = cartController.index()

    if(cartItems.length < 1) {
      return 
    }

    const exist = cartItems.some(item => item.id == id)
    return exist ? true: false
  },
  updatePrice: (price, quantity) => {
    const total = price * quantity
  
    const orderPrice = localStorage.getItem('orderTotalPrice') 
    const newValue = orderPrice ? parseFloat(orderPrice) + total : total
    localStorage.setItem('orderTotalPrice', newValue)
  },
  clearOrderPrice: () => localStorage.removeItem('orderTotalPrice'),
  updateOrderSummaryValue: () => {
    const orderPrice = localStorage.getItem('orderTotalPrice')
    const discount = Number((orderPrice * DISCOUNT_PERCENTAGE)).toFixed(2)
    const tax = calculateTax(orderPrice)
    const payment = parseFloat(orderPrice) + parseFloat(tax) - parseFloat(discount)

    $(`#discount_field`).innerHTML = currencyBRL(Number(discount))
    $(`#tax_field`).innerHTML = currencyBRL(Number(tax))
    $(`#order_summary_price`).innerHTML = currencyBRL(Number(orderPrice))
    $(`#payment_field`).innerHTML = currencyBRL(payment)
  }
}

export { cartController }