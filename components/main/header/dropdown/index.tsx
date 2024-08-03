import { useState } from "react";
import * as S from "./styled";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <S.List>
      <S.Item>
        <S.Title onClick={handleToggle} $isOpen={isOpen}>
          <S.Subtitle>Sort by :</S.Subtitle> Most Upvotes
          <S.Icon src="/images/icon-arrow-down.svg" alt="Arrow Down" />
        </S.Title>

        <S.ItemList $isOpen={isOpen}>
          <S.ListItem>
            Most Upvotes{" "}
            <S.ListItemIcon $isSelected={true} src="/images/check.svg" />
          </S.ListItem>
          <S.ListItem>
            Least Upvotes
            <S.ListItemIcon $isSelected={false} src="/images/check.svg" />
          </S.ListItem>
          <S.ListItem>
            Most Comments
            <S.ListItemIcon $isSelected={true} src="/images/check.svg" />
          </S.ListItem>
          <S.ListItem>
            Least Comments
            <S.ListItemIcon $isSelected={false} src="/images/check.svg" />
          </S.ListItem>
        </S.ItemList>
      </S.Item>
    </S.List>
  );
}
