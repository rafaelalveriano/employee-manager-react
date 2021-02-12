import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
export const Box = styled.div`
  width: 50%;
  height: auto;
  padding: 20px;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`
