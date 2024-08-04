import { ProductRequest } from "@/types/feedback"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type FeedbackStore = {
  productRequests: ProductRequest[]
  categories: {
    name: string
    active: boolean
  }[]
  orderSelected: string
  suggestions: number
  setSuggestions: (suggestions: number) => void
  setOrderSelected: (order: string) => void
  setProductRequest: (productRequest: ProductRequest) => void
  setAllProductRequests: (productRequests: ProductRequest[]) => void
  setCategories: (name: string) => void
  setAllCategories: (categories: { name: string; active: boolean }[]) => void
}

export const useFeedbackStore = create(
  persist<FeedbackStore>(
    (set) => ({
      productRequests: [],
      categories: [],
      orderSelected: "most-upvotes",
      suggestions: 0,
      setSuggestions: (suggestions) =>
        set(() => ({
          suggestions,
        })),
      setOrderSelected: (order) =>
        set(() => ({
          orderSelected: order,
        })),
      setCategories: (name) =>
        set((state) => ({
          categories: state.categories.map((category) => {
            if (category.name.toLowerCase() === name) {
              return { name: category.name, active: !category.active }
            }

            return category
          }),
        })),
      setAllCategories: (categories) =>
        set(() => ({
          categories,
        })),
      setAllProductRequests: (productRequests) =>
        set(() => ({
          productRequests,
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
