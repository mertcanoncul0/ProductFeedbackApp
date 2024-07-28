import * as S from "./styled"

type ButtonProps = {
  title: string
}

export function Button({ title }: ButtonProps) {
  return <S.Button>{title}</S.Button>
}
