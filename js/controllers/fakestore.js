const BASE_URL = 'https://fakestoreapi.com'

const fakeStore = {
  index: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`)
      const data = await response.json()
      return data
    } catch (error) {
      alert('não foi possivel obter os dados, por favor tente novamente')
      return false
    }
  },
  create: async (data) => {
    const options = {
      method:"POST",
      body:JSON.stringify(
        {
            title: data.title,
            price:  data.price,
            description:  data.description,
            image: data.image,
            category: data.category
        }
      )
    }

    try {
      const response = await fetch(`${BASE_URL}/products`, options)
      const data = await response.json()
      return data
    } catch (error) {
      alert('não foi possivel obter os dados, por favor tente novamente')
      return false
    }
  },
  show: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`)
      const data = await response.json()
      return data
    } catch (error) {
      alert('não foi possivel obter os dados, por favor tente novamente')
      return false
    }
  },
  categories: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`)
      const data = await response.json()
      return data
    } catch (error) {
      alert('não foi possivel obter as categorias, por favor tente novamente')
      return false
    }
  },
  productsByCategory: async (category) => {
    try {
      const response = await fetch(`${BASE_URL}/products/category/${category}`)
      const data = await response.json()
      return data
    } catch (error) {
      alert('não foi possivel obter os dados, por favor tente novamente')
      return false
    }
  },
}

export { fakeStore }