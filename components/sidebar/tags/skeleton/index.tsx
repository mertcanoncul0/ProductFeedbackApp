import * as S from "./styled"

export function Skeleton() {
  return (
    <>
      <S.SkeletonButton style={{ minWidth: 48, height: 31.5 }} />
      <S.SkeletonButton style={{ minWidth: 44, height: 31.5 }} />
      <S.SkeletonButton style={{ minWidth: 49, height: 31.5 }} />
      <S.SkeletonButton style={{ minWidth: 110, height: 31.5 }} />
      <S.SkeletonButton style={{ minWidth: 55, height: 31.5 }} />
      <S.SkeletonButton style={{ minWidth: 75, height: 31.5 }} />
    </>
  )
}
