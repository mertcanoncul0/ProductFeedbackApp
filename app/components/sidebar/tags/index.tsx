import { Button } from "./button"
import * as S from "./styled"

const Buttons = [
  { title: "All", active: true },
  { title: "UI", active: false },
  { title: "UX", active: false },
  { title: "Enhancement", active: false },
  { title: "Bug", active: false },
  { title: "Feature", active: false },
]

export function TagsCard() {
  return (
    <S.TagsCard>
      {Buttons.map(({ title, active }) => (
        <Button key={title} title={title} active={active} />
      ))}
    </S.TagsCard>
  )
}
