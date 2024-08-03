import { ProductRequest } from "@/types/feedback"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type FeedbackStore = {
  productRequests: ProductRequest[]
  categories: {
    name: string
    active: boolean
  }[]
  setProductRequest: (productRequest: ProductRequest) => void
  setCategories: (name: string) => void
}

export const useFeedbackStore = create(
  persist<FeedbackStore>(
    (set) => ({
      productRequests: [],
      categories: [],
      setCategories: (name) =>
        set((state) => ({
          categories: state.categories.map((category) => {
            if (category.name.toLowerCase() === name) {
              return { name, active: !category.active }
            }

            return category
          }),
        })),
      setProductRequest: (productRequest) =>
        set((state) => ({
          productRequests: state.productRequests.includes(productRequest)
            ? state.productRequests
            : [...state.productRequests, productRequest],
        })),
    }),
    {
      name: "feedback-storage",
    }
  )
)
