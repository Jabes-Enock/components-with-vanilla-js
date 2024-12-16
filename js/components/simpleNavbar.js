import { $, setTheme } from "../utils.js"

const simpleNavbar = (title) => {
  setTheme()
  const backTo = location.pathname == '/pagamento.html' ? 'carrinho' : 'produtos'
  
  const simpleNavbar = `
    <nav class="fixed top-0 left-0 right-0 shadow-sm bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 gap-8">
        <a href="./${backTo}.html" class="text-2xl">&#x1F850;</a>
        <p class="font-bold">${title}</p>
      </div>
    </nav>
  `
  return simpleNavbar
}

const createSimpleNavbar = (title) => {
  $('body header').innerHTML = simpleNavbar(title)
}

export { createSimpleNavbar }