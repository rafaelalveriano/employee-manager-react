import React from 'react'
import { ResponsibilitiesType } from '../../../Responsibilities/types'
import { HttpClient } from '../../../../services'
import { BoxInput, Label, Input } from '../../../commons/Form'

interface Props {
  handleFilter: (description: string) => void
}

const FilterResponsability: React.FC<Props> = ({ handleFilter }) => {
  const [responsability, setResponsability] = React.useState<
    ResponsibilitiesType[]
  >([])

  React.useEffect(() => {
    let isMounted = true
    const fetch = async () => {
      const { data } = await HttpClient().get('responsability')
      isMounted && setResponsability(data)
    }
    fetch()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <BoxInput w="40%" style={{ marginTop: 80 }}>
      <Label>Filtro por carga</Label>
      <Input
        as="select"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleFilter(e.target.value)
        }
      >
        <option value="all">Todos</option>
        {responsability &&
          responsability.map((r) => (
            <option key={r.id}>{r.description}</option>
          ))}
      </Input>
    </BoxInput>
  )
}
export default FilterResponsability
