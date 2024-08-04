import styled from "styled-components"

export const SkeletonButton = styled.button`
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: loading 1.5s infinite;
  border-radius: 10px;
  padding: 6px 16px;
  color: white;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`
