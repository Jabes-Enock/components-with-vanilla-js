import { form } from '../components/form.js'
import { createNavigator } from '../components/navigation.js'
import { spinner } from '../components/spinners.js'
import { categoriesFieldsForSelect as categoriesFields} from '../components/selectCategories.js'
import { messages } from '../components/messages.js'

import { fakeStore } from '../controllers/fakestore.js'
import { $ } from '../utils.js'

const insertFormIntoView = async () => {
  $('main').innerHTML = '<div class="w-full h-full grid place-items-center py-20"></div>'
  $('main div').innerHTML = spinner()
  
  const selectFields = await categoriesFields()
  $('body main').innerHTML = '<section class="form px-4 py-16"></section>'
  $('.form').innerHTML += form(selectFields)
}

const create = async (e) => {
  e.preventDefault()

  const formData = {
    title: document.getElementById('title').value,
    price:  document.getElementById('price').value,
    description: document.getElementById('description').value,
    image:  document.getElementById('image').value,
    category: document.getElementById('category').value
  }
  
  const response = await fakeStore.create(formData)

  $('main').innerHTML = ''
  $('main').innerHTML = '<div class="w-full h-full text-center px-16 pt-16"></div>'

  if(!response) {
    $('main div').innerHTML = messages.danger('Não foi possível criar esse produto')
  }
  
  $('main div').innerHTML = messages.success('Produto criado com sucesso')
}

const mount = () => {
  createNavigator()
  insertFormIntoView()
  addEventListener('submit', create )
}

mount()