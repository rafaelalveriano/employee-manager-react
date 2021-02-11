import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const BoxMenu = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
export const ButtonStyle = styled(Button)`
  margin-right: 10px;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 10px;
  }
`
