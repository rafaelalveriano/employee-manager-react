import styled from 'styled-components'
interface Props {
  ac: number
}
export const List = styled.div`
  width: 100%;
  height: auto;
`
export const Item = styled.div<Props>`
  background: ${(p) => (p.ac === 1 ? '#ededed' : 'white')};
  border-radius: 4px;
  border: 1px solid #ededed;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #ededed;
  }
`
