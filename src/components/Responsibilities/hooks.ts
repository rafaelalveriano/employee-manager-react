import React from 'react'
import { HttpClient } from '../../services'
import { ResponsibilitiesType } from './types'

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
  React.useEffect(() => {
    setResponsibilities(initResponsibilities)
  }, [initResponsibilities, setResponsibilities])
}
