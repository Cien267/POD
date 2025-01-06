<script lang="ts" setup>
import { useGetProductById } from "@/composables/useApi"
import { formatMoney } from "@/helpers/common"
import { ref, type Ref, onMounted } from "vue"
import Loading from "../Loading.vue"
import type { ProductType } from "@/types/main"
import { Notivue, Notification } from "notivue"
import { useMainStore } from "@/stores/main"
const store = useMainStore()
import router from "@/router/index.ts"

const { id } = defineProps<{
  id: string
}>()

const product: Ref<any> = ref({})
const loading = ref(false)
const ratedAmount = Math.floor(Math.random() * 100) + 1
onMounted(async () => {
  try {
    loading.value = true
    const response = await useGetProductById(id)
    product.value = response
    loading.value = false
  } catch (e) {
    loading.value = false
    console.error(e)
  }
})

const selectProductToApplyDesign = (product: ProductType) => {
  const selectedDesign = store.getSelectedDesign
  store.setSelectedProduct(product)
  if (!selectedDesign.id) {
    push.success({
      title: "Thông báo",
      message: "Đã chọn sản phẩm, tiếp tục chọn thiết kế để in.",
    })
    router.push({ name: "DesignPage" })
  } else {
    router.push({ name: "OrderPage" })
  }
}
</script>

<template>
  <div class="font-[sans-serif] p-4 my-10">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else class="xl:max-w-screen-xl lg:max-w-screen-lg max-w-xl mx-auto">
      <div
        class="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8"
      >
        <div class="w-full lg:sticky top-0 lg:col-span-3">
          <div class="flex flex-row gap-2">
            <div class="flex-1">
              <img
                :src="product.imageUrl ?? ''"
                alt="Product"
                class="w-full aspect-[750/800] object-top object-cover"
              />
            </div>
          </div>
        </div>

        <div class="w-full lg:col-span-2">
          <div>
            <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
            <div class="flex items-center space-x-1 mt-2">
              <svg
                class="w-4 h-4 fill-yellow-500"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-yellow-500"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-yellow-500"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-yellow-500"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>

              <p class="text-sm text-gray-800 !ml-3">4.0 ({{ ratedAmount }})</p>
            </div>
            <div class="flex items-center flex-wrap gap-4 mt-6">
              <h4 class="text-gray-800 text-2xl font-bold">
                {{ formatMoney(product.price) }}
              </h4>
            </div>
          </div>

          <hr class="my-6 border-gray-300" />

          <div>
            <h3 class="text-lg font-bold text-gray-800">Sizes</h3>
            <div class="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                class="w-10 h-9 border border-gray-300 hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0"
              >
                S
              </button>
              <button
                type="button"
                class="w-10 h-9 border border-purple-600 hover:border-purple-600 text-purple-800 text-sm flex items-center justify-center shrink-0"
              >
                M
              </button>
              <button
                type="button"
                class="w-10 h-9 border border-gray-300 hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0"
              >
                L
              </button>
              <button
                type="button"
                class="w-10 h-9 border border-gray-300 hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0"
              >
                XL
              </button>
            </div>

            <div class="mt-6">
              <h3 class="text-lg font-bold text-gray-800">Màu sắc</h3>
              <div class="flex flex-wrap gap-4 mt-4">
                <button
                  type="button"
                  class="w-10 h-9 bg-white border border-transparent hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0"
                ></button>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-300" />

          <div class="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              @click="selectProductToApplyDesign(product)"
              class="px-4 py-3 w-[45%] border border-sky-400 bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold"
            >
              Chọn sản phẩm này
            </button>
          </div>

          <hr class="my-6 border-gray-300" />
        </div>
      </div>
    </div>

    <div class="mt-12 bg-gray-100 px-6 py-12">
      <div class="xl:max-w-screen-xl max-w-screen-lg mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <h3 class="text-lg font-bold text-gray-800">Thông tin sản phẩm</h3>

            <div>
              <h3 class="text-gray-800 text-sm font-bold">Chất liệu:</h3>
              <p class="text-sm text-gray-500 mt-2">100% Organic Cotton</p>
            </div>

            <div>
              <h3 class="text-gray-800 text-sm font-bold">
                Hướng dẫn bảo quản:
              </h3>
              <p class="text-sm text-gray-500 mt-2">
                Rửa nước lạnh, tránh ánh sáng mặt trời trực tiếp.
              </p>
            </div>

            <div>
              <h3 class="text-gray-800 text-sm font-bold">Đặc điểm nổi bật:</h3>
              <ul class="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-500">
                <li>Thân thiện với môi trường.</li>
                <li>Công nghệ cao cấp, chống nước.</li>
                <li>Dễ lau chùi, dễ dàng vệ sinh.</li>
              </ul>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-lg font-bold text-gray-800">
              Vận chuyển & Trả hàng
            </h3>

            <div class="space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-gray-800 text-sm font-bold mb-2">
                    vận chuyển mặc định
                  </p>
                  <p class="text-gray-500 text-sm">Giao tới bạn sau 3-5 ngày</p>
                </div>
                <span class="text-gray-500 text-sm">25.000 đ</span>
              </div>

              <div class="flex justify-between items-start">
                <div>
                  <p class="text-gray-800 text-sm font-bold mb-2">
                    Giao hỏa tốc
                  </p>
                  <p class="text-gray-500 text-sm">Giao tới bạn trong ngày</p>
                </div>
                <span class="text-gray-500 text-sm">50.000 đ</span>
              </div>

              <div class="flex justify-between items-start">
                <div>
                  <p class="text-gray-800 text-sm font-bold mb-2">
                    Lấy hàng tại xưởng
                  </p>
                  <p class="text-gray-500 text-sm">
                    Hiện dịch vụ này chưa áp dụng
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <p class="text-sm text-gray-500">
                Để hiểu thêm về chính sách vận chuyển, trả hàng,
                <span class="underline">bấm vào đây</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
</template>
