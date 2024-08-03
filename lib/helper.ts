import { ProductRequest } from "@/types/feedback"

export function seedLocalStorage(values: ProductRequest[]) {
  localStorage.setItem("feedback-storage", JSON.stringify(values))
}
