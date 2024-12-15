import { param } from "../utils.js"

const badge = (category) => {
  const linkToProductsByCategory = category == 'todos' ? './produtos.html' : `./produtos.html?categoria=${category}`

  const activeBade = `
  <a href="${linkToProductsByCategory}">
    <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">${category}</span>
  </a>
  `

  const simplebadge = `
    <a href="${linkToProductsByCategory}">
      <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-4 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300 first-letter:uppercase">${category}</span>
    </a>
  `
  
  return param("categoria") == category ? activeBade : simplebadge
}

export { badge }