import * as S from "./styled"

export function Logo({ suggestions: number }: { suggestions: number }) {
  return (
    <S.Wrapper>
      <S.Image src="/images/logo.svg" alt="Logo" />
      <S.Title>{number} Suggestions</S.Title>
    </S.Wrapper>
  )
}
