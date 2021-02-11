import React from 'react'
import {
  AiOutlineFileAdd,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineArrowLeft,
} from 'react-icons/ai'
import { BoxMenu, ButtonStyle } from './style'

interface Props {
  newOnClick: () => void
  removeOnClick: () => void
  editOnClick: () => void
  totalIdsSelecteds: number
  backButton: boolean
}

const MenuButtons: React.FC<Props> = ({
  newOnClick,
  removeOnClick,
  editOnClick,
  totalIdsSelecteds,
  backButton,
}) => {
  return (
    <BoxMenu>
      <ButtonStyle
        variant={backButton ? 'default' : 'primary'}
        onClick={newOnClick}
      >
        {backButton ? (
          <>
            <AiOutlineArrowLeft style={{ marginTop: -4, marginRight: 5 }} />
            Voltar
          </>
        ) : (
          <>
            <AiOutlineFileAdd style={{ marginTop: -4, marginRight: 5 }} />
            Novo
          </>
        )}
      </ButtonStyle>

      {totalIdsSelecteds === 1 && (
        <ButtonStyle variant="warning" onClick={editOnClick}>
          <AiOutlineEdit style={{ marginTop: -4, marginRight: 5 }} />
          Editar
        </ButtonStyle>
      )}
      {totalIdsSelecteds > 0 && (
        <ButtonStyle variant="danger" onClick={removeOnClick}>
          <AiOutlineDelete style={{ marginTop: -4, marginRight: 5 }} />
          Excluir
        </ButtonStyle>
      )}
    </BoxMenu>
  )
}

export default MenuButtons
