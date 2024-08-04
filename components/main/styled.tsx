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

export const CenterWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
`

export const Center = styled.div`
  display: flex;
  max-width: 410px;
  margin-inline: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  text-align: center;
`

export const Image = styled.img`
  width: 129px;
  height: 136px;
  margin-bottom: 60px;
`

export const Title = styled.h2`
  font-size: 24px;
  letter-spacing: -0.33px;
  color: #3a4374;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 16px;
  color: #647196;
  margin-bottom: 32px;
  margin-bottom: 48px;
`
