<template>
  <div>
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-4">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >メニュー1</a
          >
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >メニュー2</a
          >
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >メニュー3</a
          >
        </div>
        <div class="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >ログイン <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
