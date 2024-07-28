import { Button } from "./button"
import { Dropdown } from "./dropdown"
import { Logo } from "./logo"
import * as S from "./styled"

export function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <Logo suggestions={6} />
        <Dropdown />
      </S.Wrapper>
      <Button />
    </S.Header>
  )
}
