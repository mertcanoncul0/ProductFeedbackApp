import { seedLocalStorage } from "@/lib/helper"
import Datas from "@/data/data"
import * as S from "./styled"
import { ProductRequest } from "@/types/feedback"

export function Button() {
  function handleClick() {}

  return <S.Button onClick={handleClick}>+ Add Feedback</S.Button>
}
