import styled from "styled-components"

export const List = styled.ul``

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Circle = styled.span<{ $color: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #647196;
`

export const Count = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #647196;
`
