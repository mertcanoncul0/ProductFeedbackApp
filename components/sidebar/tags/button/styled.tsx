import styled from "styled-components"

export const Button = styled.button<{ $active: boolean }>`
  border-radius: 10px;
  color: #4661e6;
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 600;
  background-color: #f2f4ff;
  transition: background-color 175ms ease-in-out;

  ${({ $active }) =>
    $active
      ? `
        background-color: #4661E6;
        color:  white;`
      : `
      &:hover {
          background-color: #CFD7FF;
        }
      `}
`
