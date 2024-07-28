import styled from "styled-components"

export const RoadmapCard = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 255px;
  padding: 20px 24px 24px 24px;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.25px;
  color: #3a4374;
`

export const Subtitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #4661e6;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #8397f8;
  }
`
