import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { BoxLoad } from './style'
import { LoadReducer, LoadState } from './types'

const Load = () => {
  const { load } = useSelector<LoadReducer, LoadState>((state) => state.load)

  return (
    <>
      {load.status && (
        <BoxLoad>
          <Spinner animation="border" variant="light" />
        </BoxLoad>
      )}
    </>
  )
}

export default Load
