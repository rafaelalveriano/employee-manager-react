import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { List, Item } from './style'
import { ResponsibilitiesType } from '../types'
import { AddInListNewResponsibilities } from '../hooks'

interface Props {
  initResponsibilities: ResponsibilitiesType[]
  selectId: string[]
  editOnClick: (id: string) => void
}

const ListResponsibilities: React.FC<Props> = ({
  initResponsibilities,
  selectId,
  editOnClick,
}) => {
  const [responsibilities, setResponsibilities] = React.useState<
    ResponsibilitiesType[]
  >([])

  AddInListNewResponsibilities(initResponsibilities, setResponsibilities)

  const handleItemClick = (id: string) => editOnClick(id)

  return (
    <List>
      {responsibilities &&
        responsibilities.map((r) => (
          <OverlayTrigger
            key={r.id}
            placement="top"
            overlay={
              <Tooltip id={`${r.id}`}>Clique para editar o item</Tooltip>
            }
          >
            <Item
              ac={r.id === selectId[0] ? 1 : 0}
              onClick={() => handleItemClick(r.id as string)}
            >
              {r.description}
            </Item>
          </OverlayTrigger>
        ))}
    </List>
  )
}

export default ListResponsibilities
