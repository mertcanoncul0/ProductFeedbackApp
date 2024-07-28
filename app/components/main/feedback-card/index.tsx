import { Button } from "./category-button"
import * as S from "./styled"
import { Unvotes } from "./upvotes"

export type FeedbackCardProps = {
  id: number
  title: string
  category: string
  upvotes: number
  status: string
  description: string
  comments?: {
    id: number
    content: string
    user: {
      image: string
      name: string
      username: string
    }
    replies?: {
      content: string
      replyingTo: string
      user: {
        image: string
        name: string
        username: string
      }
    }[]
  }[]
}

export function FeedbackCard({ item }: { item: FeedbackCardProps }) {
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
        <S.Number>{item.comments?.length}</S.Number>
      </S.Comments>
    </S.Item>
  )
}
