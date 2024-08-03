import styled from "styled-components"

export const List = styled.ul``
export const Item = styled.li`
  display: flex;
  align-items: center;
  color: white;
  position: relative;
`

export const ItemList = styled.ul<{ $isOpen: boolean }>`
  width: 255px;
  background-color: white;
  border-radius: 10px;
  color: black;
  position: absolute;
  top: 62px;
  left: 0;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 125ms ease-in-out, visibility 125ms ease-in-out;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 105, 35%);

  ${({ $isOpen }) =>
    $isOpen &&
    `
    opacity: 1;
    visibility: visible;
  `}
`
export const ListItem = styled.li`
  padding: 12px 24px;
  border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  font-size: 16px;
  font-weight: 400;
  color: #647196;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #ad1fea;
  }
`

export const Subtitle = styled.span`
  color: #f2f4fe;
  font-weight: 400;
`
export const Icon = styled.img`
  width: 10px;
  height: 10px;
`

export const ListItemIcon = styled.img<{ $isSelected: boolean }>`
  display: none;
  ${({ $isSelected }) => $isSelected && `display: block;`}
`

export const Title = styled.h2<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 14px;
  transition: opacity 125ms ease-in-out;
  color: #f2f4fe;
  cursor: pointer;
  user-select: none;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    opacity: 0.75;
    ${Icon} {
      transform: rotate(180deg);
    }
  `}

  &:hover {
    opacity: 0.75;

    ${Icon} {
      transform: rotate(180deg);
    }
  }
`
