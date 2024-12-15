import {$} from '../utils.js'

const navbar = () => {
  const navbar = `
    <nav class="fixed top-0 left-0 right-0 shadow-sm bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../../assets/logo.png" class="h-8" alt="E-all Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">fakeStore</span>
        </a>
        <button data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
    </nav>
  `
  return navbar
}

const drawer = () => {
  const path = location.pathname.split('.html')
  const friendlyURL = path[0]

  const drawer = `
    <div id="drawer-navigation" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
      <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 dark:text-gray-400">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../../assets/logo.png" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">fakeStore</span>
        </a>
      </h5>
      <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
    <div class="py-4 mt-16 overflow-y-auto">
        <ul class="space-y-2 font-medium">
            <li>
              <a href="/" class=" ${friendlyURL == "/index" || friendlyURL == "/" ? "bg-blue-500 text-white": " text-gray-900"} flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span class="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a href="produtos.html" class="${friendlyURL == "/produtos" ? "bg-blue-500 text-white": " text-gray-900"} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Produtos</span>
              </a>
            </li>
            <li>
              <a href="adicionar-produto.html" class="${friendlyURL == "/adicionar-produto" ? "bg-blue-500 text-white": " text-gray-900"} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Adicionar</span>
              </a>
            </li>
            <li>
              <a href="carrinho.html" class="${friendlyURL == "/cart" ? "bg-blue-500 text-white": " text-gray-900"} flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Carrinho</span>
              </a>
            </li>
        </ul>
      </div>
    </div>
  `
  return drawer
}

const createNavigator = () => {
  $('body header').innerHTML = navbar()
  $('body header').innerHTML += drawer()
}

export {
  createNavigator
}