import * as S from "./styled"

type ButtonProps = {
  name: string
  active: boolean
  handleClick: (name: string) => void
}

export function Button({ name, active, handleClick }: ButtonProps) {
  return (
    <S.Button $active={active} onClick={() => handleClick(name.toLowerCase())}>
      {name}
    </S.Button>
  )
}
