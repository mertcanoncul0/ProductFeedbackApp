import { List } from "./list"
import * as S from "./styled"

export function RoadmapCard() {
  return (
    <S.RoadmapCard>
      <S.Flex>
        <S.Title>Roadmap</S.Title>
        <S.Subtitle>View</S.Subtitle>
      </S.Flex>

      <List
        lists={[
          { title: "Planned", color: "#F49F85", count: 2 },
          { title: "In-Progress", color: "#AD1FEA", count: 5 },
          { title: "Live", color: "#62BCFA", count: 1 },
        ]}
      />
    </S.RoadmapCard>
  )
}
