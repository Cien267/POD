<script lang="ts" setup>
import { ref } from "vue"
import useClickOutside from "@/composables/useClickOutside"
import { LIST_PRODUCT_CATEGORIES } from "@/constants/main"

// sort
const showDropdownOrder = ref(false)
const listOrderOptions = [
  {
    name: "Phổ biến nhất",
    value: "popular",
  },
  {
    name: "Mới nhất",
    value: "newest",
  },
  {
    name: "Giá từ thấp đến cao",
    value: "price-asc",
  },
  {
    name: "Giá từ cao đến thấp",
    value: "price-desc",
  },
]
const selectedOrderOption = ref(listOrderOptions[0])
const updateSelectedOrderOption = (option: any) => {
  selectedOrderOption.value = option
  showDropdownOrder.value = false
}

const dropdownRef = ref()
const exceptionRef = ref()
useClickOutside(
  dropdownRef,
  () => {
    showDropdownOrder.value = false
  },
  exceptionRef
)

// filter
const priceRange = ref(100000)
</script>

<template>
  <div
    class="font-[sans-serif] flex justify-between items-start gap-10 mx-auto max-w-[1400px] mt-6 mb-20"
  >
    <div class="p-4">
      <h2 class="text-md text-start font-semibold text-gray-800 mb-6 sm:mb-8">
        Phân loại
      </h2>
      <div class="w-[200px]">
        <div
          v-for="category in LIST_PRODUCT_CATEGORIES"
          :key="category.value"
          class="text-md text-start font-medium text-zinc-600 hover:text-sky-500 cursor-pointer py-2"
        >
          {{ category.name }}
        </div>
      </div>
      <h2
        class="text-md text-start font-semibold text-gray-800 mb-6 sm:mb-8 mt-16"
      >
        Lọc theo
      </h2>
      <div class="w-[200px]">
        <h1 class="mb-2">Mức giá</h1>
        <div class="relative">
          <input
            type="range"
            min="50000"
            max="1000000"
            class="no-design-slider w-full h-4 rounded-15 bg-[#d3d3d3] outline-none opacity-70"
            v-model="priceRange"
          />
          <span class="absolute top-full left-0 text-xs">50,000</span>
          <span class="absolute top-full right-0 text-xs">50,000</span>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div
        class="text-md text-end font-semibold text-gray-800 mb-6 sm:mb-8 flex justify-end items-center"
      >
        Sắp xếp theo:
        <div class="relative font-[sans-serif] w-[180px]">
          <button
            ref="exceptionRef"
            @click="showDropdownOrder = !showDropdownOrder"
            type="button"
            id="dropdownToggle"
            class="px-4 py-2 flex items-center text-zinc-500 text-sm font-medium outline-none"
          >
            {{ selectedOrderOption.name }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 fill-gray-400 inline ml-3"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
                data-original="#000000"
              />
            </svg>
          </button>

          <ul
            ref="dropdownRef"
            v-if="showDropdownOrder"
            id="dropdownMenu"
            class="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto"
          >
            <li
              v-for="option in listOrderOptions"
              :key="option.value"
              class="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
              @click="updateSelectedOrderOption(option)"
            >
              {{ option.name }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <router-link to="/product/1">
          <div class="group overflow-hidden cursor-pointer relative">
            <div class="bg-gray-100 w-full overflow-hidden">
              <img
                src="@/assets/images/paper-bag.jpg"
                alt="Product 1"
                class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
              />
            </div>

            <div class="p-4 relative">
              <div
                class="flex flex-wrap justify-between gap-2 w-full absolute px-4 py-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  class="bg-transparent outline-none border-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-gray-800 w-5 h-5 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  class="bg-transparent outline-none border-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-gray-800 w-5 h-5 inline-block"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="z-20 relative">
                <h6 class="text-sm font-semibold text-gray-800 truncate">
                  Túi giấy
                </h6>
                <h6 class="text-sm text-gray-600 mt-2">$100.00</h6>
              </div>
            </div>
          </div>
        </router-link>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img
              src="@/assets/images/white-bottle.jpg"
              alt="Product 2"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
            />
          </div>

          <div class="p-4 relative">
            <div
              class="flex flex-wrap justify-between gap-2 w-full absolute px-4 py-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
            >
              <button
                type="button"
                title="Add to wishlist"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add to cart"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative">
              <h6 class="text-sm font-semibold text-gray-800 truncate">
                Bình nước
              </h6>
              <h6 class="text-sm text-gray-600 mt-2">$120.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img
              src="@/assets/images/white-box.jpg"
              alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
            />
          </div>

          <div class="p-4 relative">
            <div
              class="flex flex-wrap justify-between gap-2 w-full absolute px-4 py-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
            >
              <button
                type="button"
                title="Add to wishlist"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add to cart"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Hộp</h6>
              <h6 class="text-sm text-gray-600 mt-2">$140.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img
              src="@/assets/images/white-cup.jpg"
              alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
            />
          </div>

          <div class="p-4 relative">
            <div
              class="flex flex-wrap justify-between gap-2 w-full absolute px-4 py-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
            >
              <button
                type="button"
                title="Add to wishlist"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add to cart"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Cốc</h6>
              <h6 class="text-sm text-gray-600 mt-2">$120.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img
              src="@/assets/images/white-dress.jpg"
              alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
            />
          </div>

          <div class="p-4 relative">
            <div
              class="flex flex-wrap justify-between gap-2 w-full absolute px-4 py-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
            >
              <button
                type="button"
                title="Add to wishlist"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add to cart"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Váy</h6>
              <h6 class="text-sm text-gray-600 mt-2">$150.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img
              src="@/assets/images/white-hat.jpg"
              alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
            />
          </div>

          <div class="p-4 relative">
            <div
              class="flex flex-wrap justify-between gap-2 w-full absolute px-4 py-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
            >
              <button
                type="button"
                title="Add to wishlist"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add to cart"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative">
              <h6 class="text-sm font-semibold text-gray-800 truncate">Mũ</h6>
              <h6 class="text-sm text-gray-600 mt-2">$140.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img
              src="@/assets/images/white-phone-case.jpg"
              alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
            />
          </div>

          <div class="p-4 relative">
            <div
              class="flex flex-wrap justify-between gap-2 w-full absolute px-4 py-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
            >
              <button
                type="button"
                title="Add to wishlist"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add to cart"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative">
              <h6 class="text-sm font-semibold text-gray-800 truncate">
                Ốp điện thoại
              </h6>
              <h6 class="text-sm text-gray-600 mt-2">$140.00</h6>
            </div>
          </div>
        </div>

        <div class="group overflow-hidden cursor-pointer relative">
          <div class="bg-gray-100 w-full overflow-hidden">
            <img
              src="@/assets/images/white-shirt.webp"
              alt="Product 3"
              class="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
            />
          </div>

          <div class="p-4 relative">
            <div
              class="flex flex-wrap justify-between gap-2 w-full absolute px-4 py-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
            >
              <button
                type="button"
                title="Add to wishlist"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add to cart"
                class="bg-transparent outline-none border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-800 w-5 h-5 inline-block"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="z-20 relative">
              <h6 class="text-sm font-semibold text-gray-800 truncate">
                Áo phông
              </h6>
              <h6 class="text-sm text-gray-600 mt-2">$140.00</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
