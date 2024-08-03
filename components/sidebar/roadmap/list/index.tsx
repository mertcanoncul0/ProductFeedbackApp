import * as S from "./styled"

type ListProps = {
  lists: {
    title: string
    color: string
    count: number
  }[]
}

export function List({ lists }: ListProps) {
  return (
    <S.List>
      {lists.map(({ color, title, count }, index) => (
        <S.Item key={index}>
          <S.Wrapper>
            <S.Circle $color={color} />
            <S.Title>{title}</S.Title>
          </S.Wrapper>
          <S.Count>{count}</S.Count>
        </S.Item>
      ))}
    </S.List>
  )
}
