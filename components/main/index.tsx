import { FeedbackCard } from "./feedback-card"
import { Header } from "./header"
import { useFeedbackStore } from "@/store/feedback"
import { ProductRequest } from "@/types/feedback"

import * as S from "./styled"
import { useEffect, useState } from "react"
import { Skeleton } from "./feedback-card/skeleton"
import { Button } from "./header/button"

export function Main() {
  const { productRequests, categories, orderSelected, setSuggestions } =
    useFeedbackStore()
  const [loading, setLoading] = useState(true)
  const [filteredRequests, setFilteredRequests] = useState<ProductRequest[]>([])
  const activeCategories = categories.filter((category) => category.active)

  useEffect(() => {
    const filterRequests = () => {
      if (activeCategories.length > 0) {
        return productRequests.filter((request) =>
          activeCategories.some(
            (category) =>
              request.category.toLowerCase() === category.name.toLowerCase()
          )
        )
      }

      return productRequests
    }

    setFilteredRequests(filterRequests)
    setLoading(false)
  }, [categories, productRequests])

  useEffect(() => {
    function sortByUpvotes(
      a: ProductRequest,
      b: ProductRequest,
      order: "most-upvotes" | "least-upvotes"
    ) {
      if (order === "most-upvotes") {
        return b.upvotes - a.upvotes
      } else {
        return a.upvotes - b.upvotes
      }
    }

    function sortByComments(
      a: ProductRequest,
      b: ProductRequest,
      order: "most-comments" | "least-comments"
    ) {
      if (order === "most-comments") {
        return (b.comments?.length ?? 0) - (a.comments?.length ?? 0)
      } else {
        const latestCommentDateA =
          a.comments && a.comments.length > 0
            ? Math.max(
                ...a.comments.map((comment) => new Date(comment.date).getTime())
              )
            : 0
        const latestCommentDateB =
          b.comments && b.comments.length > 0
            ? Math.max(
                ...b.comments.map((comment) => new Date(comment.date).getTime())
              )
            : 0

        return latestCommentDateA - latestCommentDateB
      }
    }

    function sortFunction(a: ProductRequest, b: ProductRequest) {
      switch (orderSelected) {
        case "most-upvotes":
          return b.upvotes - a.upvotes
        case "least-upvotes":
          return sortByUpvotes(a, b, orderSelected)
        case "most-comments":
          return (b.comments?.length ?? 0) - (a.comments?.length ?? 0)
        case "least-comments":
          return sortByComments(a, b, orderSelected)
        default:
          return 0
      }
    }

    setFilteredRequests((prev) => [...prev].sort(sortFunction))
  }, [orderSelected, categories])

  useEffect(() => {
    setSuggestions(filteredRequests.length)
  }, [filteredRequests, categories])

  if (loading) {
    return (
      <S.Wrapper>
        <Header />
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </S.Wrapper>
    )
  }

  if (filteredRequests.length === 0) {
    return (
      <S.Wrapper>
        <Header />
        <S.CenterWrapper>
          <S.Center>
            <S.Image src="/images/not-found.svg" alt="not found feedback" />
            <S.Title>There is no feedback yet.</S.Title>
            <S.Description>
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </S.Description>
            <Button />
          </S.Center>
        </S.CenterWrapper>
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper>
      <Header />

      <S.ListWrapper>
        {filteredRequests.map((item: ProductRequest) => (
          <FeedbackCard key={item.id} item={item} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  )
}
