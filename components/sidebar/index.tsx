import { LogoCard } from "./logo-card";
import { RoadmapCard } from "./roadmap";
import * as S from "./styled";
import { TagsCard } from "./tags";

export function Sidebar() {
  return (
    <S.Sidebar>
      <LogoCard title="Frontend Mentor" subtitle="Feedback Board" />
      <TagsCard />
      <RoadmapCard />
    </S.Sidebar>
  );
}
