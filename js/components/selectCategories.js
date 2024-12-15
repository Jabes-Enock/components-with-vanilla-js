import { fakeStore } from "../controllers/fakestore.js"

const categoriesFieldsForSelect = async () => {
  const categories = await fakeStore.categories()
  if(!categories) return

  const categoriesFields = categories.map(item => `<option value="${item}">${item}</option>`)
  const categoriesText = categoriesFields.join().replace(',','') 
  return categoriesText
}


export { categoriesFieldsForSelect }