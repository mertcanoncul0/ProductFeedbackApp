import { useFeedbackStore } from "@/store/feedback"
import { Button } from "./button"
import { Dropdown } from "./dropdown"
import { Logo } from "./logo"
import * as S from "./styled"

export function Header() {
  const { suggestions } = useFeedbackStore()

  return (
    <S.Header>
      <S.Wrapper>
        <Logo suggestions={suggestions} />
        <Dropdown />
      </S.Wrapper>
      <Button />
    </S.Header>
  )
}
