import React from 'react'
import Swal from 'sweetalert2'

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
  const onClickDelete = () => {
    Swal.fire({
      title: 'Deseja realmente excluir este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then((result) => result.isConfirmed && removeOnClick())
  }

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
        <ButtonStyle variant="danger" onClick={onClickDelete}>
          <AiOutlineDelete style={{ marginTop: -4, marginRight: 5 }} />
          Excluir
        </ButtonStyle>
      )}
    </BoxMenu>
  )
}

export default MenuButtons
