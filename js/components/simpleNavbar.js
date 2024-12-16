import { $, setTheme } from "../utils.js"

const simpleNavbar = (title) => {
  setTheme()
  const backTo = location.pathname == '/pagamento.html' ? 'carrinho' : 'produtos'
  
  const simpleNavbar = `
    <nav class="fixed top-0 left-0 right-0 shadow-sm bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 gap-8">
        <a href="./${backTo}.html" class="text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </a>
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