import { Button } from "./button"
import { Skeleton } from "./skeleton"
import * as S from "./styled"
import { useFeedbackStore } from "@/store/feedback"

export function TagsCard() {
  const { categories, setCategories } = useFeedbackStore()

  function handleClick(name: string) {
    setCategories(name)
  }

  if (!categories.length) {
    return (
      <S.TagsCard>
        <Skeleton />
      </S.TagsCard>
    )
  }

  return (
    <S.TagsCard>
      {categories.map(({ name, active }) => (
        <Button
          key={name}
          name={name}
          active={active}
          handleClick={handleClick}
        />
      ))}
    </S.TagsCard>
  )
}
