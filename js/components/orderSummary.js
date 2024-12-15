const orderSummary = () => {
  const orderSummary = `
    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <p class="text-xl font-semibold text-gray-900 dark:text-white">Resumo da compra</p>
      <div class="space-y-4">
        <div class="space-y-2">
          <dl class="flex items-center justify-between gap-4">
            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Preço original</dt>
            <dd id="order_summary_price" class="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
          </dl>
          <dl class="flex items-center justify-between gap-4">
            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Desconto</dt>
            <dd id="discount_field" class="text-base font-medium text-green-600"></dd>
          </dl>
          <dl class="flex items-center justify-between gap-4">
            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Impostos</dt>
            <dd id="tax_field" class="text-base font-medium text-gray-900 dark:text-white"></dd>
          </dl>
        </div>

        <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
          <dd id="payment_field" class="text-base font-bold text-gray-900 dark:text-white"></dd>
        </dl>
      </div>

      <a href="./pagamento.html" class="flex w-full bg-blue-500 items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pagar</a>

      <div class="flex items-center justify-center gap-2">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> ou </span>
        <a href="./produtos.html" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
          Adicionar mais produtos
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>

    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <form class="space-y-4">
        <div>
          <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Cupom aplicado </label>
        <input type="text" id="voucher" readonly value="desconto10" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
        </div>
        <button type="submit" class="bg-gray-700 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" readonly>Aplicar codigo</button>
      </form>
    </div>
  `
  return orderSummary
}

export { orderSummary }