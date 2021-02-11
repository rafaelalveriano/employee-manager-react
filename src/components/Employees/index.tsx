import React from 'react'
import { Layout } from '../commons'
import List from './List'
import MenuButtons from './MenuButtons'

const Empolyees = () => {
  const [ids, setIds] = React.useState<string[]>([])
  console.log(ids)
  return (
    <Layout title="Funcionários">
      <>
        <MenuButtons
          newOnClick={() => {}}
          editOnClick={() => {}}
          removeOnClick={() => {}}
        />

        <List setIds={setIds} ids={ids} />
      </>
    </Layout>
  )
}

export default Empolyees
