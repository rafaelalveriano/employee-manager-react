import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface Props {
  active: boolean
}

export const LinkStyle = styled(Link)<Props>`
  margin-left: 40px;
  color: ${(p) => (p.active ? 'white' : ' rgba(255, 255, 255, 0.5)')};
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
`
