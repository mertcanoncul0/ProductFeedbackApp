import { ProductRequest } from "@/types/feedback"
import { Button } from "./category-button"
import * as S from "./styled"
import { Unvotes } from "./upvotes"

export function FeedbackCard({ item }: { item: ProductRequest }) {
  return (
    <S.Item>
      <S.Wrapper>
        <Unvotes upvotes={item.upvotes} />
        <S.Middle>
          <S.Title>{item.title}</S.Title>
          <S.Description>{item.description}</S.Description>
          <Button title={item.category} />
        </S.Middle>
      </S.Wrapper>
      <S.Comments>
        <S.Icon src="/images/comments.svg" />
        <S.Number>{!item?.comments ? 0 : item.comments?.length}</S.Number>
      </S.Comments>
    </S.Item>
  )
}
