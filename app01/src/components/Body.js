import React from 'react'
import Button from './reusable/Button'

const Body = ({ data, BlockTriggerById }) =>
  data.map(({ id, name, isBlocked }) => {

    // const idd = `id is ${id}`

    const BlockElement = !isBlocked ?
      <Button
        onClick={() => BlockTriggerById(id)}
        name={`Block`}
        className={"btn btn-danger"}
      /> :
      <Button
        onClick={() => BlockTriggerById(id)}
        name={`Unblock`}
        className={"btn btn-secondary"}
      />


    return (

      <tr key={id}>
        {/* <td>{idd}</td> */}
        <td>{name}</td>
        {/*  <td>{isBlocked ? `yes` : `no`}</td> */}
        <td>{BlockElement}</td>
      </tr>
    )

  })

export default Body
