import React from 'react'
import { useSelector } from 'react-redux'
import { HttpClient } from '../../services'
import {
  ResponsibilitiesType,
  ResponsibilitiesReducer,
  ResponsibilitiesState,
} from './types'

export const FetchResponsibilities = (
  setResponsibilities: React.Dispatch<
    React.SetStateAction<ResponsibilitiesType[]>
  >,
) => {
  React.useEffect(() => {
    let isMounted = true

    const fetch = async () => {
      const { data } = await HttpClient().get('responsability')
      isMounted && setResponsibilities(data)
    }
    fetch()

    return () => {
      isMounted = false
    }
  }, [setResponsibilities])
}

export const AddInListNewResponsibilities = (
  initResponsibilities: ResponsibilitiesType[],
  setResponsibilities: React.Dispatch<
    React.SetStateAction<ResponsibilitiesType[]>
  >,
) => {
  const { response } = useSelector<
    ResponsibilitiesReducer,
    ResponsibilitiesState
  >((state) => state.responsability)
  React.useEffect(() => {
    setResponsibilities(initResponsibilities)
    response.status && setResponsibilities(response.data)
  }, [initResponsibilities, setResponsibilities, response])
}
