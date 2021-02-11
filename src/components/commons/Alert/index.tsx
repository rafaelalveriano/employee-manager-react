import React from 'react'
import { useSelector } from 'react-redux'
import { CustomAlert } from './style'
import { AlertReducer, AlertState } from './types'

const AlertDialog = () => {
  const [show, setShow] = React.useState(false)
  const { alert } = useSelector<AlertReducer, AlertState>(
    (state) => state.alert,
  )

  React.useEffect(() => {
    alert.msg.length > 1 && setShow(true)
  }, [alert])

  React.useEffect(() => {
    show && setTimeout(() => setShow(false), 3000)
  }, [show])

  return (
    <>
      {show && (
        <CustomAlert show variant={alert.status ? 'success' : 'danger'}>
          {alert.msg}
        </CustomAlert>
      )}
    </>
  )
}

export default AlertDialog
