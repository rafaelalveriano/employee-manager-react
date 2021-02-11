import React from 'react'
import {
  AiOutlineFileAdd,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai'
import { BoxMenu, ButtonStyle } from './style'

interface Props {
  newOnClick: () => void
  removeOnClick: () => void
  editOnClick: () => void
}

const MenuButtons: React.FC<Props> = ({
  newOnClick,
  removeOnClick,
  editOnClick,
}) => {
  return (
    <BoxMenu>
      <ButtonStyle variant="primary" onClick={newOnClick}>
        <AiOutlineFileAdd style={{ marginTop: -4, marginRight: 5 }} />
        Novo
      </ButtonStyle>
      <ButtonStyle variant="warning" onClick={editOnClick}>
        <AiOutlineEdit style={{ marginTop: -4, marginRight: 5 }} />
        Editar
      </ButtonStyle>
      <ButtonStyle variant="danger" onClick={removeOnClick}>
        <AiOutlineDelete style={{ marginTop: -4, marginRight: 5 }} />
        Excluir
      </ButtonStyle>
    </BoxMenu>
  )
}

export default MenuButtons
