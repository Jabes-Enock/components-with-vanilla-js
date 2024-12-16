const main = () => {
  const section = `
   <div class="max-w-screen-xl px-4 mx-auto mt-16 sm:mt-12 sm:px-6 md:px-16 ">
      <div class="">
        <div class="text-center md:max-w-2xl md:mx-auto space-y-8">
          <div class="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
            Componentização com
          </div>
          <h2
            class="mt-1 text-4xl dark:text-white font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Vanilla JS
          </h2> 
          <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl pr-14">
            Esse projeto é baseado em componetização sem utilizar nenhum bundle como Webpack ou Vite, foi utilizado a API da fakestore que você pode verificar clicando no botão abaixo.
          </p>
         
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div class="rounded-md shadow">
              <a href="https://github.com/Jabes-Enock/components-with-vanilla-js" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10">
                GitHub do projeto
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10">
                FakeStore API
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  `
  return section
}

export { main }

