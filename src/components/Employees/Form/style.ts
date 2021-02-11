import styled from 'styled-components'
import { Field } from 'formik'

interface InputProps {
  w: string
  m: string
}

export const Input = styled(Field)<InputProps>`
  width: ${(p) => (p.w ? p.w : '100%')};
  margin-left: ${(p) => p.m};
  height: 40px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 2px solid #000;
  outline-color: transparent;
  outline-style: none;
  margin-top: 20px;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }
`

export const BoxInput = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  width: 100%;
  height: auto;
  color: #000;
  font-weight: bold;
  margin-bottom: 30px;
`
