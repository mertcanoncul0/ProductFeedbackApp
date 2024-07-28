import styled from "styled-components"

export const Button = styled.button`
  background-color: #ad1fea;
  color: #f2f4fe;
  font-weight: 700;
  font-size: 14px;
  border-radius: 10px;
  height: 44px;
  padding-inline: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 125ms ease-in-out;

  &:hover {
    background-color: #c75af6;
  }
`
