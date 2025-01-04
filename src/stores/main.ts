import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
  state: () => ({
    selectedProduct: null,
    selectedDesign: null,
  }),

  getters: {
    getSelectedProduct: (state) => state.selectedProduct,
    getSelectedDesign: (state) => state.selectedDesign,
  },

  actions: {
    setSelectedProduct(selectedProduct: any) {
      this.selectedProduct = selectedProduct
    },
    setSelectedDesign(selectedDesign: any) {
      this.selectedDesign = selectedDesign
    },
  },
})
