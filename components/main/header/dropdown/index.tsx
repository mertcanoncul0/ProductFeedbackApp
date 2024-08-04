import { useState } from "react"
import * as S from "./styled"
import { useFeedbackStore } from "@/store/feedback"

const sortOptions = [
  { label: "Most Upvotes", value: "most-upvotes" },
  { label: "Least Upvotes", value: "least-upvotes" },
  { label: "Most Comments", value: "most-comments" },
  { label: "Least Comments", value: "least-comments" },
]

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { orderSelected, setOrderSelected } = useFeedbackStore()

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  function handleSelect(value: string) {
    setOrderSelected(value)
    setIsOpen(false)
  }

  return (
    <S.List>
      <S.Item>
        <S.Title onClick={handleToggle} $isOpen={isOpen}>
          <S.Subtitle>Sort by :</S.Subtitle>{" "}
          {sortOptions.find((option) => option.value === orderSelected)?.label}
          <S.Icon src="/images/icon-arrow-down.svg" alt="Arrow Down" />
        </S.Title>

        <S.ItemList $isOpen={isOpen}>
          {sortOptions.map((option) => (
            <S.ListItem
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
              <S.ListItemIcon
                $isSelected={orderSelected === option.value}
                src="/images/check.svg"
              />
            </S.ListItem>
          ))}
        </S.ItemList>
      </S.Item>
    </S.List>
  )
}
