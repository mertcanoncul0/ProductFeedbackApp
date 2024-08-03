import * as S from "./styled"

export type UnvotedProps = {
  upvotes: number
}

export function Unvotes({ upvotes }: UnvotedProps) {
  return (
    <S.Wrapper>
      <S.Icon src="/images/unvotes.svg" />
      <S.Number>{upvotes}</S.Number>
    </S.Wrapper>
  )
}
