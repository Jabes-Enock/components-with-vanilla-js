const $ = (selector) => {
  const element = document.querySelector(selector)
  return element
}

const currencyBRL = (money) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(money)

const param = (query) => {
  const search = location.search
  const urlParams = new URLSearchParams(search)
  const param = urlParams.get(query)

  if(!param) return

  return param
}

const calculateTax = (orderTotalPrice) => {
  const icmsAliquota = 0.12; // 12%
  const ipiAliquota = 0.05; // 5%
  const pisAliquota = 0.0065; // 0.65%
  const cofinsAliquota = 0.03; // 3%

  const icms = orderTotalPrice * icmsAliquota;
  const ipi = orderTotalPrice * ipiAliquota;
  const pis = orderTotalPrice * pisAliquota;
  const cofins = orderTotalPrice * cofinsAliquota;

  const totalTax = icms + ipi + pis + cofins;

  return totalTax.toFixed(2)
}





export {
  $,
  currencyBRL,
  param,
  calculateTax
}