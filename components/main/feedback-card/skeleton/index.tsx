import React from "react"
import * as S from "./styled"

export function Skeleton() {
  return (
    <S.Item>
      <S.Wrapper>
        <S.Unvotes></S.Unvotes>
        <S.Middle>
          <S.Title></S.Title>
          <S.Description></S.Description>
          <S.SkeletonButton></S.SkeletonButton>
        </S.Middle>
      </S.Wrapper>
      <S.Comments></S.Comments>
    </S.Item>
  )
}
