import { main } from '../components/index/main.js'
import { createNavigator } from '../components/navigation.js'

import { $, setTheme } from '../utils.js'

const insertSectionIntoView = () => {
   $('main').innerHTML = main()
}

const mount = () => {
  createNavigator()
  insertSectionIntoView()
}

mount()