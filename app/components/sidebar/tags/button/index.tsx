import * as S from "./styled"

type ButtonProps = {
  title: string
  active: boolean
}

export function Button({ title, active }: ButtonProps) {
  return <S.Button $active={active}>{title}</S.Button>
}
