import * as S from "./styled"

type LogoCardProps = {
  title: string
  subtitle: string
}

export function LogoCard({ title, subtitle }: LogoCardProps) {
  return (
    <S.LogoCard>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.LogoCard>
  )
}
