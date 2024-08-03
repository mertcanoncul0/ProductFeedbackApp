import { FeedbackCard } from "./feedback-card"
import { Header } from "./header"
import { useFeedbackStore } from "@/store/feedback"
import { ProductRequest } from "@/types/feedback"

import * as S from "./styled"

export function Main() {
  const { productRequests } = useFeedbackStore()

  return (
    <S.Wrapper>
      <Header />

      <S.ListWrapper>
        {productRequests.map((item: ProductRequest) => (
          <FeedbackCard key={item.id} item={item} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  )
}
