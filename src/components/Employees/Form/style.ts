import styled from 'styled-components'
import { Field } from 'formik'

interface BoxInputProps {
  w: string
  m?: string
}

export const Input = styled(Field)`
  width: 100%;
  height: 30px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 2px solid #000;
  outline-color: transparent;
  outline-style: none;
`

export const BoxInput = styled.div<BoxInputProps>`
  width: ${(p) => (p.w ? p.w : '50%')};
  margin-left: ${(p) => p.m};
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
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
export const Label = styled.div`
  width: 100%;
  height: auto;
  color: #000;
  font-size: 12px;
`
export const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
