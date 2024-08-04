import styled, { keyframes } from "styled-components"

const loading = keyframes`
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
`

export const Item = styled.button`
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${loading} 1.5s infinite;
  padding: 28px 32px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 154px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const Middle = styled.div``

export const Title = styled.div`
  background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 50%, #f5f5f5 75%);
  margin-bottom: 12px;
  background-size: 200% 100%;
  animation: ${loading} 1.5s infinite;
  width: 203px;
  height: 22px;
`

export const Description = styled.div`
  background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 50%, #f5f5f5 75%);
  margin-bottom: 12px;
  background-size: 200% 100%;
  animation: ${loading} 1.5s infinite;
  width: 374px;
  height: 24px;
`

export const SkeletonButton = styled.div`
  background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 50%, #f5f5f5 75%);
  background-size: 200% 100%;
  border-radius: 10px;
  padding: 6px 16px;
  height: 30px;
  width: 80px;
  animation: ${loading} 1.5s infinite;
`

export const Unvotes = styled.div`
  background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 50%, #f5f5f5 75%);
  border-radius: 10px;
  background-size: 200% 100%;
  width: 40px;
  height: 53px;
  align-self: baseline;
  animation: ${loading} 1.5s infinite;
`

export const Comments = styled.div`
  background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 50%, #f5f5f5 75%);
  background-size: 200% 100%;
  gap: 8px;
  width: 36px;
  height: 30px;
  border-radius: 4px;
  animation: ${loading} 1.5s infinite;
`
