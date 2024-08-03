import styled from "styled-components"

export const Wrapper = styled.div`
  border-radius: 10px;
  width: 40px;
  height: 53px;
  align-self: baseline;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-inline: 9px;
  background-color: #f2f4fe;
  cursor: pointer;

  &:hover {
    background-color: #cfd7ff;
  }
`

export const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-bottom: 7px;
`

export const Number = styled.span`
  font-size: 13px;
  letter-spacing: -0.18px;
  font-weight: 700;
  color: #3a4374;
`
