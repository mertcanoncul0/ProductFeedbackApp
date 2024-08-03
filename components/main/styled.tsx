import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
`
export const ListWrapper = styled.div`
  overflow: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cfd7ff;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`
