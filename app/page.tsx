"use client"

import { useEffect } from "react"
import { Main } from "../components/main"
import { Sidebar } from "../components/sidebar"
import { useFeedbackStore } from "@/store/feedback"
import { Categories, productRequests } from "@/data"

export default function Home() {
  const { setAllCategories, setAllProductRequests } = useFeedbackStore()

  useEffect(() => {
    function initializeApp() {
      const storage = JSON.parse(
        localStorage.getItem("feedback-storage") || "{}"
      ).state

      if (
        storage.productRequests.length === 0 ||
        storage.categories.length === 0
      ) {
        setAllCategories(Categories)
        setAllProductRequests(productRequests)
      }
    }

    initializeApp()
  }, [])

  return (
    <main>
      <Sidebar />
      <Main />
    </main>
  )
}
