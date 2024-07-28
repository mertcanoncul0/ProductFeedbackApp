import { FeedbackCard, FeedbackCardProps } from "./feedback-card"
import { Header } from "./header"
import * as S from "./styled"
import Datas from "@/app/data/data.json"

export function Main() {
  const sliceData = Datas.productRequests.slice(0, 6)

  return (
    <S.Wrapper>
      <Header />

      <S.ListWrapper>
        {sliceData.map((item: FeedbackCardProps) => (
          <FeedbackCard key={item.id} item={item} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  )
}
